"use client"
import React, { useState, useEffect } from "react"
import { Modal, Form, Input, Upload, Button, Switch, message } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import { fetchData } from "../../api/apiInstance"

export default function ManageModal({ isEditing, data, open, onCancel, onSuccess, getData }) {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [fileList, setFileList] = useState([])

    useEffect(() => {
        console.log("category", data)
        if (open) {
            if (isEditing && data) {

                form.setFieldsValue({
                    title_en: data?.title?.en || "",
                    title_ar: data?.title?.ar || "",
                    description_en: data?.description?.en || "",
                    description_ar: data?.description?.ar || "",
                    status: data?.status ?? true,
                })


            } else {

                form.resetFields()
                setFileList([])
            }
        }
    }, [open, isEditing, data, form])

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields()


            if (fileList.length === 0 && (!isEditing || !data?.image)) {
                message.error("Please upload an image")
                return
            }

            setLoading(true)


            const formData = new FormData()


            formData.append("title[en]", values.title_en)
            formData.append("title[ar]", values.title_ar)


            if (fileList.length > 0 && fileList[0].originFileObj) {
                formData.append("file", fileList[0].originFileObj)
                formData.append("name", values.title_en)
                const image = await fetchData({
                    url: "upload",
                    method: "POST",
                    body: formData,
                    isFile: true,
                })
                console.log(image)
                formData.append("image", image?.url)
            } else if (isEditing && data?.image) {


                formData.append("image", data.image)
            }


            if (values.description_en) {
                formData.append("description[en]", values.description_en)
            }
            if (values.description_ar) {
                formData.append("description[ar]", values.description_ar)
            }


            if (values.status !== undefined) {
                formData.append("status", values.status ? "1" : "0")
            }


            const url = isEditing ? `admin/categories/${data?.id}` : "admin/categories"
            const method = isEditing ? "PUT" : "POST"

            const response = await fetchData({
                url,
                method,
                body: formData,
                isFile: false,
            })

            if (response?.message || response?.data || response?.status === "success") {
                message.success(isEditing ? "Category updated successfully!" : "Category added successfully!")
                form.resetFields()
                getData()
                setFileList([])
                onSuccess?.()
                onCancel?.()
            } else {
                message.error(response?.message || "Failed to save category")
            }
        } catch (error) {
            if (error.errorFields) {

                message.error("Please fill in all required fields")
            } else {
                message.error("An error occurred while saving the category")
            }
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        form.resetFields()
        setFileList([])
        onCancel?.()
    }

    const uploadProps = {
        beforeUpload: (file) => {
            const isImage = file.type.startsWith('image/')
            if (!isImage) {
                message.error('You can only upload image files!')
                return Upload.LIST_IGNORE
            }
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isLt2M) {
                message.error('Image must be smaller than 2MB!')
                return Upload.LIST_IGNORE
            }
            return false
        },
        fileList,
        onChange: ({ fileList: newFileList }) => {
            setFileList(newFileList)
        },
        onRemove: () => {
            setFileList([])
        },
        maxCount: 1,
    }

    return (
        <Modal
            title={isEditing ? "Edit Category" : "Add Category"}
            open={open}
            onCancel={handleCancel}
            onOk={handleSubmit}
            confirmLoading={loading}
            width={600}
            okText={isEditing ? "Update" : "Add"}
            cancelText="Cancel"
        >
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item
                    label="Title (English)"
                    name="title_en"
                    rules={[{ required: true, message: "Please enter title in English" }]}
                >
                    <Input placeholder="Enter title in English" />
                </Form.Item>

                <Form.Item
                    label="Title (Arabic)"
                    name="title_ar"
                    rules={[{ required: true, message: "Please enter title in Arabic" }]}
                >
                    <Input placeholder="Enter title in Arabic" dir="rtl" />
                </Form.Item>

                <Form.Item
                    label="Description (English)"
                    name="description_en"
                >
                    <Input.TextArea placeholder="Enter description in English" rows={4} />
                </Form.Item>

                <Form.Item
                    label="Description (Arabic)"
                    name="description_ar"
                >
                    <Input.TextArea placeholder="Enter description in Arabic" dir="rtl" rows={4} />
                </Form.Item>

                <Form.Item
                    label="Image"
                    required
                    help={isEditing && data?.image && fileList.length === 0 ? "Current image will be kept if no new image is uploaded" : "Please upload an image (required)"}
                >
                    <Upload {...uploadProps} listType="picture">
                        <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                    valuePropName="checked"
                    initialValue={true}
                >
                    <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
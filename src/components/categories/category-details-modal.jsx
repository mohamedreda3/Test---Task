"use client"
import React from "react"
import { Modal, Descriptions, Image, Tag, Divider } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"

export default function CategoryDetailsModal({ data, open, onCancel }) {
    if (!data) return null

    return (
        <Modal
            title="Category Details"
            open={open}
            onCancel={onCancel}
            footer={null}
            width={700}
            centered
        >
            <div className="space-y-6">
                {data?.image && (
                    <div className="flex justify-center mb-4">
                        <Image
                            src={`https://edunezam.net/api/storage/${data.image}`}
                            alt={data?.title?.en || "Category Image"}
                            width={200}
                            height={200}
                            style={{ borderRadius: '8px', objectFit: 'cover' }}
                            preview={{
                                mask: 'Preview'
                            }}
                        />
                    </div>
                )}

                <Divider />

                <Descriptions title="English Information" bordered column={1}>
                    <Descriptions.Item label="Title">
                        {data?.title?.en || "N/A"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        {data?.description?.en || "No description available"}
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions title="Arabic Information" bordered column={1}>
                    <Descriptions.Item label="Title">
                        <div dir="rtl" className="text-right">
                            {data?.title?.ar || "N/A"}
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        <div dir="rtl" className="text-right">
                            {data?.description?.ar || "No description available"}
                        </div>
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions title="Additional Information" bordered column={1}>
                    <Descriptions.Item label="Status">
                        {data?.status ? (
                            <Tag icon={<CheckCircleOutlined />} color="success">
                                Active
                            </Tag>
                        ) : (
                            <Tag icon={<CloseCircleOutlined />} color="error">
                                Inactive
                            </Tag>
                        )}
                    </Descriptions.Item>
                    {data?.id && (
                        <Descriptions.Item label="Category ID">
                            {data.id}
                        </Descriptions.Item>
                    )}
                </Descriptions>
            </div>
        </Modal>
    )
}

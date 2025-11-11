"use client"

import React, { use, useEffect, useState } from "react"
import Category from "../components/categories/category"
import { fetchData } from "../api/apiInstance"
import ManageModal from "../components/categories/add-edit-category-modal"
export default function Categories() {
    const [openAdd, setOpenAdd] = useState(null)
    const [data, setData] = useState();
    const getData = async () => {
        const data = await fetchData({
            url: "admin/categories",
            method: "GET",

        })
        setData(data?.data)
    }
    useEffect(() => {

        getData()
    }, [])


    return <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="flex justify-end mb-6 mr-8">
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
                onClick={()=>setOpenAdd(true)}
            >
                + Add Category
            </button>
        </div>
        <ManageModal open={openAdd} onCancel={setOpenAdd}/>
        <div className="">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    data && data?.length && Array.isArray(data) ? data?.map(item => {
                        return <Category key={item?.id} name={item?.title?.en} image={item?.image} category={item} getData={getData} />
                    }) : null
                }

            </div>
        </div>
    </section>
}
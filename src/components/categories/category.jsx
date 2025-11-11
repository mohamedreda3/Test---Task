"use client"

import Image from "next/image"
import ManageModal from "./add-edit-category-modal"
import CategoryDetailsModal from "./category-details-modal"
import { useState } from "react";
import { fetchData } from "../../api/apiInstance";
export default function Category({ name, image, category, getData }) {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const categoryImage = image || category?.image;
    const categoryName = name || category?.title?.en;

    const handleShowDetails = () => {
        setOpenDetails(true);
    };

    const handleEdit = (category) => {
        setOpenEdit(category)
    };

    const handleDelete = (id) => {
        window.confirm("Are You Sure Delete ?")
        fetchData({
            url: "admin/categories/" + id,
            method: "DELETE",
            isFile: false,
        })
        getData()
    };

    return <div className="flex items-center gap-2">
        <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 gap-2 flex-1">
            {categoryImage && <Image src={"https://edunezam.net/api/storage/" + categoryImage} width={20} height={20} alt={categoryName} />}
            <span className="text-sm font-medium text-gray-900 dark:text-white">{categoryName}</span>
        </a>
        <div className="flex items-center gap-2">
            <button
                onClick={handleShowDetails}
                className="px-3 cursor-pointer py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition-colors"
                title="Show Details"
            >
                Details
            </button>
            <button
                onClick={() => handleEdit(category)}
                className="px-3 cursor-pointer py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800 transition-colors"
                title="Edit"
            >
                Edit
            </button>
            <button
                onClick={()=>handleDelete(category?.id)}
                className="px-3 cursor-pointer py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 transition-colors"
                title="Delete"
            >
                Delete
            </button>
            <ManageModal open={openEdit} isEditing={true} data={openEdit} onCancel={setOpenEdit} getData={getData} />
            <CategoryDetailsModal open={openDetails} data={category} onCancel={() => setOpenDetails(false)} />
        </div>
    </div>
}
"use client"

import React from "react"

export default () => {
    return <div className="relative"> <img
        src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3644e6ef-e804-4213-b950-1e343312e2bd"}
        className="w-[713px] h-[718px] -left-[80px] scale-[1.4] -top-[150px] object-contain relative pointer-events-none -z-[1] "
    />
        <button className="flex flex-col items-start bg-white text-left p-[30px] absolute right-[40%] rounded-[100px] top-[73%] cursor-pointer border-0"
            style={{
                boxShadow: "1px 1px 20px #00000026"
            }}
            onClick={() => alert("Pressed!")}>
            <img
                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29ccf8b3-04bb-48c2-bfc3-ab5c5d3f042b"}
                className="w-[90px] h-[90px] rounded-[100px] object-fill"
            />
        </button>
    </div>
}
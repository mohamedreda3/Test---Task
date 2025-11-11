import Link from 'next/link'
import React from 'react'

function LeftSection() {
    return (
        <div className="flex flex-col items-center justify-center m-auto h-full">
            <div className="items-start">
                <div className="flex flex-col items-end min-h-[455px] justify-between w-full  sm:w-[485.0294189453125px]">
                    <div className="flex flex-col items-center ]">
                        <div className="flex flex-col items-start gap-[57px]">
                            <div className="flex flex-col items-start gap-7">
                                <span className="text-black text-[70px] font-bold text-right w-[447px] ml-[33px]" >
                                    {"د. صفوت بدوي الطنطــــــــــــاوي"}
                                </span>
                                <span className="text-black text-[28px] font-bold" >
                                    {"مدرب معلمين ومؤسس منصات تعليمية"}
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                             
                                <Link href={"/contact"} className="flex flex-col items-start bg-[#6F48AA] w-[238px] py-[21px] px-[74px] rounded-[10px]">
                                    <span className="text-white text-lg font-bold" >
                                        {"تواصل معنا"}
                                    </span>
                                </Link>
                                <Link href={"/projects"} className="flex flex-col items-start w-[238px] py-[21px] px-[30px] rounded-[10px] border border-solid border-[#6F48AA]">
                                    <span className="text-[#6F48AA] text-lg font-bold" >
                                        {"اطلع علي أبرز المشاريع"}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mt-[108px] gap-6">
                        <span className="text-black text-xl" >
                                {"+40 مشروع ومنصة تعليمية مكتملة"}
                            </span>
                            <Link href={"https://www.facebook.com/profile.php?id=100063501762214"} target="_blank">
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b81fed83-494c-414b-85ab-3b5d3bfc9dea"}
                                className="w-6 h-6 object-fill"
                            />
                            </Link>
                            <Link href={"https://www.facebook.com/profile.php?id=100063501762214"} target="_blank">
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/486207b9-e552-4823-b389-0d579bde6633"}
                                className="w-6 h-6 object-fill"
                            />
                            </Link>
                            <Link href={"https://www.facebook.com/profile.php?id=100063501762214"} target="_blank">
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac035813-f74d-4c34-9aa0-d2e97a44ebdf"}
                                className="w-6 h-6 object-fill"
                            />
                            </Link>
                           
                          
                            <Link href={"https://www.facebook.com/profile.php?id=100063501762214"} target="_blank">
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/812eadf7-7fe2-47f1-aa72-c39d3ed1a786"}
                                className="w-6 h-6 object-fill"
                            />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection
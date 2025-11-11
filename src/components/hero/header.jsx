"use client";

import Link from "next/link";

function Header() {
    const navLinks = [
        {
            href: "/projects",
            label: "المشروعات",
            icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f23de82-5358-4b47-8a3e-29ebe51623ed",
        },
        {
            href: "/services",
            label: "خدماتنا",
            icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a51f0eb7-0106-4f27-b6a1-8a077eb64901",
        },
        {
            href: "/contact",
            label: "تواصل معنا",
            icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/118e02b2-bfcf-4696-ac17-23de87ec6a4a",
        },
    ];
    return (
        <header className="flex items-center justify-between px-4 !mr-auto w-full sm:px-0" dir="rtl">

            <div className="flex items-start mr-auto w-full">
                <div className="flex flex-col justify-start items-center !mr-auto w-full sm:w-[1440px]">
                    <div className="flex items-center justify-between w-full gap-4 flex-wrap">

                        <div className="flex flex-col items-start w-6 py-0.5 px-1">
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3c8e38d-176b-48a8-9ecd-fa128de26ccd"}
                                className="w-[12px] h-[16px] sm:w-[15px] sm:h-[19px] object-fill"
                            />
                        </div>
                        <div className="flex items-center gap-4 sm:gap-[61px] flex-wrap">
                            {navLinks.map(({ href, label, icon }) => (
                                <div key={href} className="flex items-center gap-2 sm:gap-[8px]">
                                    <Link href={href} className="text-black text-sm sm:text-base font-bold">
                                        {label}
                                    </Link>
                                    <img
                                        src={icon}
                                        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] mr-1 sm:mr-2 object-fill"
                                        alt=""
                                    />
                                </div>
                            ))}
                            <img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20e0ad71-a514-4247-b5e3-aaa79fca8f69"}
                                className="h-12 sm:h-[102px]"
                                alt="logo"
                            />
                        </div>

                    </div>

                    <div className="bg-black w-full h-[1px] mt-3 sm:mt-0">
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
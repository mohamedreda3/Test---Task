"use client";
import React from 'react'
import Header from '../components/hero/header'
import LeftSection from '../components/hero/left-section'
import RightSection from '../components/hero/right-section'

function HeroSection() {
    return (
        <div className="w-full bg-[#7049AA4D] min-h-screen">
            <Header />
            <div className="flex flex-col w-full sm:flex-row items-center justify-between relative" dir='rtl'>
                <LeftSection />
                <RightSection />
            </div>
        </div>
    )
}

export default HeroSection
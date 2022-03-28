import {
    SearchIcon,
    MenuIcon,
    ChevronDownIcon
} from '@heroicons/react/outline'

import { useState, useEffect } from "react";

function Header() {
    const [colorChange, setColorchange] = useState(false);
    const [yScroll, setYScroll] = useState(window.scrollY);

    useEffect(()=>{

        const changeNavbarColor = () =>{
            if(window.scrollY >= 100){
            setColorchange(true);         
            }else{
            setColorchange(false);
            }
        };

        window.addEventListener('scroll', changeNavbarColor);
        
        return function unMount() {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    },[yScroll])

   

    return (
        <div className={` ${!colorChange ? ('bg-blue-200 bg-opacity-20') : ('bg-blue-600 shadow-md')} z-50 fixed top-0 left-0 right-0`}>
             <p className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white text-center py-3 overflow-hidden">
                <p className="animate-ping spin-slow duration-900">Carestack sees uptake of 47% on close rate after adding Convin&apos;s Conversation Intelligence in their sales stack.</p>
             </p>
            <div className="">
                <div className="flex justify-between max-w-screen-2xl xl:mx-auto items-center mx-5 py-5 md:py-8 xl:px-24">

                    <img className="cursor-pointer font-bold text-blue-700 text-lg sm:text-xl md:text-4xl flex-shrink-0" src="/images/logo.svg"/>
                    
                    <div className="flex space-x-8 text-white">
                        <div className="hidden lg:flex space-x-6 text-xl">

                            <button className="hover:opacity-80 border-b border-transparent hover:border-white">Pricing</button>

                            <div className="relative flex items-center group">
                                <button className="flex items-center hover:opacity-80">Solution<ChevronDownIcon className="w-4 ml-1"/></button>
                                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                                    <div className="text-gray-700 mt-12 -ml-24 grid grid-cols-2 gap-3 w-max p-5 bg-white shadow-md rounded-lg text-base">
                                        <div className="space-y-3">
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Sales Onboarding</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Sales Training</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">People Intelligence</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Process Monitoring</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Market Intelligence</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Sales Strategy</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Meeting Intelligence</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">For Sales Leaders</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">For Sales Managers</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">For Account Execs</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">For Sales Enablement</p>
                                        </div>  
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="relative flex items-center group">
                                <button className="flex items-center hover:opacity-80">Integration<ChevronDownIcon className="w-4 ml-1"/></button>
                                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                                    <div className="text-gray-700 mt-12 -ml-12 w-max p-5 bg-white shadow-md rounded-lg text-base space-y-3">
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Team Messaging</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Video Conferencing</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Calender</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Process Monitoring</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Dialer</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">CRM</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="relative flex items-center group">
                                <button className="flex items-center hover:opacity-80">Resources<ChevronDownIcon className="w-4 ml-1"/></button>
                                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                                    <div className="text-gray-700 mt-12 -ml-12 w-max p-5 bg-white shadow-md rounded-lg text-base space-y-3">
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Bogs</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">E-Book</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">News</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Case Studies</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Sales Gambid Podcast</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <button className="hover:opacity-80 border-b border-transparent hover:border-white">About Us</button>
                        </div> 

                        <div className="hidden md:flex text-xs md:text-lg space-x-4 xl:space-x-6">
                            <button className="px-3 py-1 rounded-full border border-white bg-white text-blue-600">Sign Up</button>
                            <button className="px-3 py-1 rounded-full border border-white hover:bg-white hover:text-blue-600">Log In</button>
                        </div>
                    </div>

                    <MenuIcon className="w-6 md:hidden text-white"/>
                
                </div>
                
                
            </div>
        </div>
    )
}

export default Header

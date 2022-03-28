import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[url('/images/blue_bg.svg')] h-max bg-cover text-blue-100 py-12 mt-24">
            <div className="max-w-6xl xl:mx-auto mx-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div>
                        <img className="font-bold text-blue-700 text-lg sm:text-xl md:text-4xl flex-shrink-0 mb-3" src="/images/logo.svg"/>
                        <p>Convin records, transcribes and analyzes all your sales calls to give insights on what&apos;s working on calls and what&apos;s not.</p>
                        <div className="flex gap-3 sm:space-x-1 mt-4">
                        <FaYoutube className="w-10 h-10 p-3 bg-blue-700 text-white hover:bg-white hover:text-red-500 rounded-full"/>
                        <FaTwitter className="w-10 h-10 p-3 bg-blue-700 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                        <FaInstagram className="w-10 h-10 p-3 bg-blue-700 text-white hover:bg-white hover:text-pink-500 rounded-full"/>
                        <FaLinkedinIn className="w-10 h-10 p-3 bg-blue-700 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                    </div>
                    </div>
                    <div className="gap-2">
                        <h1 className="text-white font-bold">Company</h1>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">About Us</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Career</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Gambit</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Press</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Success Stories</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Blogs</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">E-Books</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">Pricing</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg text-white font-bold">Products</h1>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Productivity Tool</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Voise call recording software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Call center Recording Solution</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Call Analyst cs Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Monitoring System</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Automation software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Strategy Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Video Conference Transcription</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Engagement Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white"> Sales Training Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Record and Log Call on CRM</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Tracking Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Call Recording Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Revenue Intelligence</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Management Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Voice of Customer Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Convin VS Gong</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Convin Vs Salesken</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Convin Vs Salesloft</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Acceleration Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Conversation Analytics</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Data Analytics</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white"> Optimization Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Reporting Tool</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Speech Analytics Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Automated Quality Management</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Acceleration Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Conversation Analytics</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Data Analytics</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white"> Optimization Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Reporting Tool</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Speech Analytics Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Automated Quality Management</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Data Analytics</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white"> Optimization Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Sales Reporting Tool</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Speech Analytics Software</p>
                            <p className="cursor-pointer border-b border-transparent hover:border-white">Automated Quality Management</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg text-white font-bold">United States of America</h1>
                        <p>2093 PHILADELPHIA PIKE #5025 CLAYMONT, DELAWARE 19703</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">PHONE: (+1) 6282095776</p>

                        <h1 className="text-lg text-white font-bold mt-2">India</h1>
                        <p>BUILDING #79, BALAJI NAGAR SG PALYA, BENGALURU, 560029</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">PHONE1: +91-7011464590</p>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">PHONE 2 : +91-8802881329</p>

                        <h1 className="text-lg text-white font-bold mt-2">Email</h1>
                        <p className="cursor-pointer border-b border-transparent hover:border-white">contact@convin.ai</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mx-6 mt-12 flex-wrap md:w-[600px]">
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Terms & Conditions</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Privacy Policy</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Security Refund Policy</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Cancellation Policy</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Dispute Policy</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Shipping Policy</p>
                <p className="cursor-pointer border-b border-transparent hover:border-white">● Return Policy</p>
            </div>
        </div>
    )
    }
export default Footer
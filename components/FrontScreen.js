function FrontScreen() {
    return (
        <div className="bg-[url('/images/bg-img.png')] h-screen bg-cover text-white">
            <div className="max-w-6xl mx-auto px-5 lg:mx-24 pt-44">
                <button className="bg-blue-600 rounded-md text-xs md:text-base p-1 lg:p-2">EBOOK</button>
                <p className="text-lg md:text-2xl xl:text-4xl md:w-[600px] 2xl:w-[820px] 2xl:text-5xl my-5">Do you want to conquer your fear of meeting C-suite buyers?</p>
                <h1 className="text-gray-200">Enter your email and get your hands on the e-book.</h1>

                <div className="bg-white rounded-sm p-2 w-max" >
                <input type="email" className="mr-4 md:mr-12 outline-none xl:w-96 text-black" placeholder="Enter your Email address..." />  
                <button className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 lg:p-3 xl:text-lg rounded-sm">Download</button>
                </div>
            </div>
            
        </div>
    )
}

export default FrontScreen
function EmailInput() {
    return (
        <div className="max-w-6xl xl:mx-auto px-5 py-12 mt-12 bg-[url('/images/dark_laptop_bg.png')] bg-cover text-white text-center rounded-lg">
            <h1 className='font-bold text-lg md:text-3xl md:w-[650px] mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Ready to overcome your fear and face the C-suite buyer? </h1>
            <p className="md:w-[600px] mx-auto text-xs md:text-base">Start applying the 10 selling tips to see dramatic changes in your sales outcomes and selling attitude.It&apos;s tried and tested!</p>
            <div className="bg-white rounded-sm p-2 my-4 w-max mx-auto" >
                <input type="email" className="mr-4 md:mr-12 outline-none lg:w-96 text-black" placeholder="Enter your Email address..." />  
                <button className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 lg:p-3 xl:text-lg rounded-sm">Download</button>
                </div>
        </div>
    )
}
export default EmailInput
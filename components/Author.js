function Author() {
    return (
        <div className="max-w-6xl xl:mx-auto mx-5 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="relative  px-2 pl-16">
                <img className="object-contain max-h-96" src="/images/author.png" alt="author-image"/>
                <h1 className="absolute origin-top-left -rotate-90 bottom-0 left-0 font-extrabold text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">AUTHOR</h1>
            </div>
            
            <div className="flex flex-col text-lg justify-center">
                <p className="text-blue-500 font-bold mb-5">The Author</p>
                <h1 className="font-bold text-xl md:text-3xl mb-3">Abhishika Chatterjee</h1>
                <p>Abhishikha is a marketing professional with over three years of experience in content writing. She&apos;s currently on a mission to create content that will help a salesperson overcome obstacles.</p>
            </div>
        </div>
        </div>
    )
}
export default Author
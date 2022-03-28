function Question() {
    return (
        <div className="max-w-6xl xl:mx-auto mx-5 grid grid-cols-1 md:grid-cols-2 mt-8">
            <div>
                <h1 className="text-lg font-bold lg:text-2xl mb-2">Why should you invest time in reading the eBook?</h1>
                <p>Handling C-suite buyers is a different experience altogether. The expectation mismatch between the executive buyer and the seller ruptures good deals and stalls them over silly matters. But considering the involvement of C-level guys faster in sales deals, sellers must learn to conquer their fear and prepare in advance for the C-level buyer.</p>
                <img src="/images/employers.png"/>
            </div>

            <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                    <img className="w-20 p-3 h-20 object-contain rounded-md bg-yellow-200" src="/images/user_icon.png" />
                    <div>
                        <h1 className="text-lg lg:text-2xl font-bold">The more senior executives are involved, the better....</h1>
                        <p className="text-gray-400">…not the power and authority, but their decision-making skills and influence make them a preferred buyer choice.&nbsp;</p>
                    </div>   
                </div>
                
                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                    <img className="w-20 p-3 h-20 object-contain rounded-md bg-pink-200" src="/images/brain_icon.png" />
                    <div>
                        <h1 className="text-lg lg:text-2xl font-bold">CXO buyers accelerate decision-making…</h1>
                        <p className="text-gray-400">…as they decide in fewer meetings and waste minimum time talking and discussing. Their absence can stall or delay sales deals.</p>
                    </div>   
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                    <img className="w-20 p-3 h-20 object-contain rounded-md bg-orange-200" src="/images/clock_icon.png" />
                    <div>
                        <h1 className="text-lg lg:text-2xl font-bold">C-level executives are entering buying cycles faster…</h1>
                        <p className="text-gray-400">…since the beginning of the pandemic and impacting the decision-making process. In some cases, CXOs enter sales discussions unannounced.</p>
                    </div>   
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                    <img className="w-20 p-3 h-20 object-contain rounded-md bg-green-200" src="/images/stress_icon.png" />
                    <div>
                        <h1 className="text-lg lg:text-2xl font-bold">Most sellers find themselves stressed...</h1>
                        <p className="text-gray-400">…losing sleep before the night of a sales meeting with a CXO of an Enterprise company, impacting the meeting and performing poorly.</p>
                    </div>   
                </div>
            </div>
        </div>
    )
    }
export default Question
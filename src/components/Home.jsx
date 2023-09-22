import React from 'react'
import eyes from '../Images/pexels-c.png';


function Home() {
    return (
        <>
            <div className="flex flex-col xl:justify-around xl:flex-row p-4 bg-violet-200 ">
                <section className='p-2 py-6 xl:py-20  font-medium '>
                    <h3>Marketing Solutions</h3>
                    <p className=' font-mono font-black   mt-3 mb-4 text-5xl'>
                        Social Media <br/>Marketing
                    </p>
                    <p className=' font-serif mb-4'>
                        Struggling to find PPC experts who really understand <br />
                        your business and can actually drive lone term results?<br />
                        Our world-class marketers would love to help your business thrive!
                    </p>
                    <button className='px-3 py-1 font-bold rounded-full bg-black text-violet-50 hover:text-violet-100'>
                        <p>Get a Free Audit →</p>
                    </button>
                </section>
                <section className='p-2 xl:p-12 '>
                    <img src={eyes} alt="social" className='xl:max-h-96'/>
                </section>
            </div>
        </>
    )
}

export default Home
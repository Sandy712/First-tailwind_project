import React from 'react'
import eyes from '../Images/pexels-c.png';


function Home() {
    return (
        <>
            <div className="flex justify-around bg-violet-200 p-4">
                <section className='p-2 py-20  font-medium'>
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
                <section className='p-12 '>
                    <img src={eyes} alt="social" style={{height:"400px",width:"450px"}} />
                </section>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import team from "../Images/pexels-ivan-samkov-8117438-1024x750.jpg.png"
import certi from "../Images/google-experts-1024x750.jpg.png";



function About() {
    return (
        <>
            <div className='bg-violet-200 p-16'>
                <section className='flex flex-col items-center'>
                    <h2 className='uppercase font-mono mb-3'>Numerique</h2>
                    <p className='font-medium text-4xl'>How our paid search marketing</p>
                    <p className='font-medium text-4xl'>service can help grow your</p>
                    <p className='font-medium text-4xl'>revenue</p>
                </section>
            </div>
            <div className='flex justify-around bg-violet-200 p-4'>
                <article className=''>
                    <img src={team} alt='team work' style={{ height: "380px", width: "480px" }}></img>
                </article>
                <article className='font-medium p-3'>
                    <p className='font-bold text-3xl font-mono '>
                        Combining Search <br /> engine marketing with <br />conversion rate<br /> optimiztaion(CRO)
                    </p>
                    <p className='font-normal text-sm pt-5'>
                        The secret to a successful SEM campaign is much more than just making <br />your wwebsite appear on Goggle.Other SEM agenices in Singapore would <br />just set your ads ti appear on Goggle, and leave it there.These<br /> campaigns are not performing up to its optimal level.
                        <br />
                        <br />
                        The secret to achieving optimal SEM results lies in the abilit to get as <br />many people as possible to call/contact you after they click on your ad <br />and land on your website.Foe example, your current SEM ads are getting <br />2% conversion rate on your landing page.That means out of 1000 people <br />  that visit your page, 2 people contact you.
                    </p>
                </article>
            </div>
            <div className="flex justify-around p-16 bg-violet-200">
                <section className='font-sans items-center py-12'>
                    <h3 className='font-bold text-3xl py-5'>Real certified Google Ads <br />Professionals</h3>
                    <p className='font-normal mt-2'>Get a team of certified Google Adwards/SEM specialists who have a<br /> minimum of 2 years experience managing various SEM campaigns <br />locally. We help you create the perfect combination of strategy and <br />implementation to ensure we achieve your goals.</p>
                </section>
                <section>
                    <img src={certi} alt='cert-img' style={{ height: "370px", width: "450px" }}></img>
                </section>
            </div>
        </>
    )
}

export default About
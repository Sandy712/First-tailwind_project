import React from 'react'
import team from "../Images/pexels-ivan-samkov-8117438-1024x750.jpg.png"
import certi from "../Images/google-experts-1024x750.jpg.png";



function About() {
    return (
        <>
            <div className='bg-violet-200 p-4'>
                <section className='flex flex-col items-center'>
                    <h2 className='uppercase font-mono mb-3'>Numerique</h2>
                    <p className='font-medium text-xl text-center xl:text-4xl'>How our paid search marketing</p>
                    <p className='font-medium text-xl text-center xl:text-4xl'>service can help grow your</p>
                    <p className='font-medium text-xl text-center xl:text-4xl'>revenue</p>
                </section>
            </div>
            <div className='flex flex-col xl:justify-around  xl:flex-row bg-violet-200 p-4 xl:py-16'>
                <img src={team} alt='team work' className='xl:max-w-md' ></img>
                <article className='font-medium p-2 xl:px-20 xl:p-0 xl:w-1/2'>
                    <p className='font-bold text-2xl font-mono  inline '>
                        Combining Search  engine marketing with conversion rate optimiztaion(CRO)
                    </p>
                    <p className='font-normal text-sm pt-5 break-normal inline-block'>
                        The secret to a successful SEM campaign is much more than just making your wwebsite appear on Goggle.Other SEM agenices in Singapore would just set your ads ti appear on Goggle, and leave it there.These campaigns are not performing up to its optimal level.
                        <br />
                        <br />
                        The secret to achieving optimal SEM results lies in the abilit to get as many people as possible to call/contact you after they click on your ad and land on your website.Foe example, your current SEM ads are getting 2% conversion rate on your landing page.That means out of 1000 people   that visit your page, 2 people contact you.
                    </p>
                </article>
            </div>
            <div className="flex flex-col-reverse xl:justify-around xl:flex-row p-4 bg-violet-200 xl:py-16">
                <section className='font-sans items-center py-12 xl:w-1/2 xl:pr-20'>
                    <h3 className='font-bold text-3xl py-5'>Real certified Google Ads Professionals</h3>
                    <p className='font-normal mt-2'>Get a team of certified Google Adwards/SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.</p>
                </section>
                <section>
                    <img src={certi} alt='cert-img' className='xl:max-w-md'></img>
                </section>
            </div>
        </>
    )
}

export default About
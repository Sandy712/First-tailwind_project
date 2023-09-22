import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import ceo from "../Images/video-cover-1024x835.jpg.png"

export default function Review() {
  return (
    <div className='flex  flex-col xl:justify-around xl:flex-row p-4 xl:py-16 bg-violet-200'>

      <section className='font-mono items-center  py-10 xl:w-1/2 xl:pr-32'>
        <ImQuotesRight size={40} color='blue' />
        <p className='italic py-5 inline'>
          "Numerique PPc service is light years ahead of the competition because of their intelligent,specialized and courteous account managers."
        </p>
        <h5 className='font-bold pt-5'>DIRECTOR OF MARKETING</h5>
        <p className='font-sans '>Zarra Home</p>
      </section>

      <section >
        <img src={ceo} className='xl:max-w-md' alt="Zarra" />
        <div className='flex justify-between px-4  item-center bg-slate-50 rounded-tl-lg'>
          <p className=''>5000+ Client reviews</p>
          <p className='underline decoration-indigo-500'>VIEW ALL REVIEWS</p>
        </div>
      </section>
    </div>
  )
}

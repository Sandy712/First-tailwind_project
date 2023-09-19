import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import ceo from "../Images/video-cover-1024x835.jpg.png"

export default function Review() {
  return (
    <div className='flex justify-around p-16 bg-violet-200'>

      <section className='font-mono items-center py-20'>
        <ImQuotesRight size={40} color='blue' />
        <p className='italic py-5'>
          "Numerique PPc service is light years ahead of the<br /> competition because of their intelligent,<br />specialized and courteous account managers."
        </p>
        <h5 className='font-bold pt-5'>DIRECTOR OF MARKETING</h5>
        <p className='font-sans '>Zarra Home</p>
      </section>

      <section >
        <img src={ceo} className='z-0' alt="Zarra" style={{ height: "370px", width: "450px" }} />
        <div className='flex justify-between px-4  item-center bg-slate-50 rounded-tl-lg'>
          <p className=''>5000+ Client reviews</p>
          <p className='underline decoration-indigo-500'>VIEW ALL REVIEWS</p>
        </div>
      </section>
    </div>
  )
}

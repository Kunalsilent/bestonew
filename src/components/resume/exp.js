import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Exp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">The Problem</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">High application Drop</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Make it Exceptional!"
          
            des="Every interaction with your company contributes to candidates’ perception of your employer brand. And we all know how important first impressions are! It’s time to offer applicants an amazing introduction to you (possibly CandE-worthy!), including the option to apply without a resume on a device-agnostic platform."
          />
          <ResumeCard
            title="Reduce Applicant Effort"
           
            des="When in doubt, cut it out! Minimize both the number of steps and info required from your applicants. Plus, our AI-based candidate-to-job matching tech nudges ‘em to apply to the right job."
          />
          <ResumeCard
            title="Make the Login Process Frictionless"
       
            des="This is where ~40% of drop off happens. YIKES! By enabling social logins, or even allowing candidates to skip the registration process all together, you are looking at a dramatic improvement in completion rates. Goodbye painful account creation! "
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">The problem</p>
          <h2 className="text-3xl text-black md:text-4xl font-bold">Lagging on DE&I Sourcing?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Expand Your Reach"
          
            des="Plug into our huge network of job boards, including those specific to underrepresented groups, including women, LGBTQIA+, veterans, those who are differently abled, and people of color."
          />
          <ResumeCard
            title="Remove Bias From Your Job Ad Content"
          
            des="Kick bias to the curb. Our platform offers AI-backed content optimization to nix unconscious bias and gender-coded language from your reqs."
          />
          <ResumeCard
            title="Track and Optimize Your DE&I Outcomes"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="When in doubt, cut it out! Minimize both the number of steps and info required from your applicants. Plus, nudge ‘em to apply to the right job."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Exp
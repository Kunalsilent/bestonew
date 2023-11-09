import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
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
          <h2 className="text-3xl md:text-4xl text-black font-bold">High Cost Per Hire?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Real-Time Insights, Down the Funnel."
        
            des="One dashboard to rule all sources, and in the cloud bind them. Get a 360° view of your spend, CPC, CTA, CPA, and CPH (and all other costs you can imagine and care about!) by source, across all job sites, search engines, and social media. Yes, all in a single dashboard. We wouldn’t lie to you!"
          />
          <ResumeCard
            title="Target (and Retarget) the Right Candidates"                
          
            des="Kick off your campaign knowing you’ve got the best sources for your jobs, guaranteed to deliver hires. We’ve chosen the right sources for every job category and location combination, based on hundreds of millions of data points. What’s more, our AI automatically allocates (or re-allocates) your budget to sources that bring in the most qualified applicants. More bang, same buck."
          />
          <ResumeCard
            title="Reduce Drop Off"
          
            des="With our optimized job application experience you’ll see more conversions from the same budget… Or the same number of conversions with a reduced budget! In other words, lower CPA and CPH. Doing more with less, simplified."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">The Problem</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Missing Passive Candidates?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Distribution Across the World Wide Web"
            
            des="There are a lot of websites out there (like two million), where passive candidates spend their time. Meet them where they live and play, whether it’s shopping, news, social, or other sites.."
          />
          <ResumeCard
            title="Target Custom and Affinity Audiences, at a Job Level"
          
            des="Our AI-powered platform can help you intelligently target and attract the right candidates based on demographics, interests, and habits. You can also upload and target custom lists of great-fit candidates that have been qualified before or dropped off during the application process."
          />
          <ResumeCard
            title="Measure Against Active Candidate Sources"
         
            des="With a single dashboard to rule all sources, track and compare active and passive candidate activity. Let the data (and not guesswork) do the talking and decide where your spend should go. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience
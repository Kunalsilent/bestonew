import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Problem We solve</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Missing Passive Candidates?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Distribution Across the World Wide Web"
            subTitle="The solutions"
           
            des="There are a lot of websites out there (like two million), where passive candidates spend their time. Meet them where they live and play, whether it’s shopping, news, social, or other sites."
          />
          <ResumeCard
            title="Target Custom and Affinity Audiences, at a Job Level"
            subTitle="The Solutions"
           
            des="Our AI-powered platform can help you intelligently target and attract the right candidates based on demographics, interests, and habits. You can also upload and target custom lists of great-fit candidates that have been qualified before or dropped off during the application process"
          />
          <ResumeCard
            title="Measure Against Active Candidate Sources"
          
            des="With a single dashboard to rule all sources, track and compare active and passive candidate activity. Let the data (and not guesswork) do the talking and decide where your spend should go."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Get More Quantied applicants</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Not- Enough Great-Fit applicants</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Target (and Retarget) the Right Candidates."
          
            des="Kick off your campaign knowing you’ve got the best sources for your jobs, guaranteed to deliver hires. Our AI chooses the right sources for every job category and location combination, based on hundreds of millions of data points. What’s more, it automatically allocates (or re-allocates) your budget to sources that bring in the most qualified applicants. More bang, same buck ."
          />
          <ResumeCard
            title="No Starved Jobs"
        
            des="Narrow the field at the job level – not just campaign level, like those other folks – and ensure your budget is spent where it’s needed the most. What does that mean, you ask? Well, we won’t let those easy-to-fill openings run away with your budget, while your hard-to-fill reqs are left to starve. Heck no!"
          />
          <ResumeCard
            title="Don’t Pay for Bad Traffic"
           
            des="Spot the bots, nix the invalid clicks, and stop paying for bad traffic, thanks to our AI-powered traffic filters. Instead, pay only when actual humans in the right locations apply for your openings. That’s who you want in your hiring funnel."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
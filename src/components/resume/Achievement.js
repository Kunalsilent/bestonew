import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement = () => {
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
          <h2 className="text-3xl md:text-4xl text-black font-bold">Don’t Know Where You Stand?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="A Deeper Understanding of Your Market"
           
            des="We help you illuminate parts of the market you never knew existed. Get meaningful compensation analysis, a full scope of the diversity landscape, and a look at job-seeker supply and demand in your areas of top need."
          />
          <ResumeCard
            title="Multifaceted Competitor Analysis"
         
            des="See what the competition is doing, learn how to beat them, and revel in your victory. Find out how your talent acquisition stack sizes up against other hiring firms. Know exactly where you stand – from your career site content and capabilities, to CRM functionalities, to visibility in those hard-to-reach places on the World Wide Web"
          />
          <ResumeCard
            title="Probing Job Ad Analysis"
          
            des="Measure your ad performance against competition. Find out who’s outranking you on the job boards. Leverage our AI to get hard data on factors like geography, salary, and employer reputation, and understand how they impact your outcomes."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">The Problem </p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Too Many Platforms, Too Much Information?</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="One Partner"
         
            des="We are committed to your success, hands down. And we want to make your recruiting process as easy as possible. Whether it’s unifying your insights on one snazzy dashboard or figuring out how to fine tune your next campaign, your goals are our goals. Period."
          />
          <ResumeCard
            title="Take Control of Your Spend with Real-Time Insights, Down the Funnel."
           
            des="One dashboard to rule all sources, and in the cloud bind them. Get a 360* view of your spend, CPC, CTA, CPA, and CPH (and all other costs you can imagine and care about!) by source, across all job sites, search engines, and social media. Yes, all in a single dashboard. We wouldn’t lie to you!"
          />
          <ResumeCard
            title="One Invoice"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="Consolidate your invoicing and cut the complexity out of your billing routine. Purchase media across hundreds of publishers while working with just one entity – us."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement
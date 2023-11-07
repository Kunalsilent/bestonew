import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Security = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Delivering stellar experiences isn’t possible without data.</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Security</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Processes:"
            des="We ensure adequate control over all data we process, based on adherence to multiple international standards. This includes mechanisms such as encryption at rest and in transit, access control, data retention, anonymization, etc. We also maintain a record of processing activities (ROPA) for all data stored in our system.

"
          />
          <ResumeCard
            title="Training:"
            des="Our teams are trained to understand all vital aspects of security, including auditing, vulnerability tracking and resolution, secure coding practices, and data security, among others."
          />
         <ResumeCard
            title="Monitoring:"
            des="Monitoring tools assist our team in identifying and addressing sensitive events, 24/7/365. Among others, we use AWS GuardDuty, ZAP, Prowler, and kube-bench.

"
          />
           <ResumeCard
            title="Auditing:"
            des="We regularly conduct internal and third-party audits to ensure that our security policy and procedures are maintained and updated, as required."
          />
           <ResumeCard
            title="Penetration Testing:"
            des="We conduct penetration testing on an annual basis, to ensure our clients’ data is secured against external threats."
          />
        </div>
      </div>
      {/* part Two */}<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Certifications, Standards, and Regulations</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SOC 2 Type 2:"
           
            des="This is an independent assessment of our internal control environment, which reports on our controls system and its suitability with respect to protecting customer data"
          />
          <ResumeCard
            title="SOC 2 Type 2:"
           
            des="This is an independent assessment of our internal control environment, which reports on our controls system and its suitability with respect to protecting customer data"
          />
           <ResumeCard
            title="SOC 2 Type 2:"
           
            des="This is an independent assessment of our internal control environment, which reports on our controls system and its suitability with respect to protecting customer data"
          />
           <ResumeCard
            title="SOC 2 Type 2:"
           
            des="This is an independent assessment of our internal control environment, which reports on our controls system and its suitability with respect to protecting customer data"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Security
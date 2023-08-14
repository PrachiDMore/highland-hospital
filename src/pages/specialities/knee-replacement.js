import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const kneeReplacement = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen'>
          <Banner src={"/assets/specialities/knee-replacement/main.png"} category={"Specialities"} title={"Total Knee and Hip Replacement"} desc={"The knee is made up of the lower end of the thighbone (femur), the upper end of the shinbone (tibia), and the kneecap (patella). The ends of these three bones where they touch are covered with articular cartilage, a smooth substance that protects the bones and enables them to move easily."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Total Knee and Hip Replacement"} src={"/assets/specialities/knee-replacement/info.png"} paras={["Highland Hospital offers Hip and Knee replacement lead by trained surgeons who oversee the joint replacement care team including surgeons, surgical technicians, anaesthesiologists, nurse anaesthetists, physical and occupational therapists, therapy technicians, nurses, clinical pharmacists, a social worker, discharge care co-ordinators and clinic office staff. All our surgeons are highly experienced, rigorously trained and tremendously skilled in various aspects of joint replacement including revision joint replacement.", "Our goal is to help our patients return to full activity and the healthy lifestyle they are accustomed to. We offer a comprehensive range of services including diagnostics, surgical and non-surgical procedures, as well as rehabilitative physical and occupational therapy. Many patients can also take advantage of minimally invasive surgical techniques."]} />
        </div>
      </Layout>
    </>
  )
}

export default kneeReplacement
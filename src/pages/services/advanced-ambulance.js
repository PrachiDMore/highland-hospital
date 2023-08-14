import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const advancedAmbulance = () => {
  return (
    <>
    <Layout>
     <div className='h-auto w-screen flex flex-col'>
      <Banner src={"/assets/services/advanced-ambulance/main.png"} category={"Services"} title={"Advanced Life Support (ALS) Ambulance"}/>
      <Info category={"Services"} title={"Advanced Life Support (ALS) Ambulance"} src={"/assets/services/advanced-ambulance/info.png"} paras={["Highland Hospital provides round-the-clock Advanced Life Support Ambulance services as an integral part of its Emergency Medicine department. Manned by trained medical professionals well trained in managing emergencies, ambulances can provide patient care, right from the site of the accident, or impairment, with advance medical assistance prior to reaching the hospital. All necessary facilities including ventilator, defibrillator, oxygen, suction, scoop stretcher, spencer trolley stretcher, spine board, head immobilizer and vital lifesaving drugs are part of the support system.", "Our ALS Ambulances are operated by highly skilled and trained staff and carry the necessary medical equipment required to stabilize, treat and transport patients to the hospital emergency department, trauma centre or for an inter facility transfer. They are equipped with enhanced trauma service capabilities and also offer a versatile range of advanced life support medical supplies and apparatus to manage and care for critically ill or injured patients.", "Our Advanced Life Support (ALS) Ambulances are staffed with paramedics who meet training and certification requirements, and is available round-the-clock on +91 78 99 777 555"]}/>
     </div>
    </Layout>
    </>
  )
}

export default advancedAmbulance
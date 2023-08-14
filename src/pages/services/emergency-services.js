import React from 'react'
import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'


const emergencyServices = () => {
  return (
    <>
    <Layout>
     <div className='h-auto w-screen flex flex-col'>  
      <Banner src={"/assets/services/emergency-services/main.png"} category={"Services"} title={"Emergency 24-hour Services"}/>
      <Info category={"Services"} title={"Emergency 24-hour Services"} src={"/assets/services/emergency-services/info.png"} paras={["The Emergency department of our hospital is a state of the art unit comprising of highly skilled and efficient team of specialists, emergency doctors and well trained nursing and paramedical staff & equipment. Our 24-hour emergency and trauma care is geared to meet all medical and surgical emergencies. This round the clock service enjoys 24x7 accesses to modern Operation Theatres, Pharmacy, Imaging and Laboratory services for ensuring instant diagnosis and quick treatment of the patient's condition."]}/>
     </div>
    </Layout>
    </>
  )
}

export default emergencyServices
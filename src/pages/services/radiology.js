import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const radiology = () => {
  return (
    <>
     <div className='h-auto w-screen flex flex-col'>
      <Banner src={"/assets/services/radiology/main.png"} category={"Services"} title={"Radiology"}/>
      <Info category={"Services"} title={"Radiology"} src={"/assets/services/radiology/info.png"} paras={["The department of Radiology at Highland Hospital is highly equipped with the latest technological advancements and exceptionally skilled staff, committed to providing accurate diagnosis and radiological services to patients.", "The department provides a full range of radiology services including CT Scan, Ultrasound, Color Doppler, Fluoroscopy, X-Ray’s and intervention procedures. The radiology department comprises technologically advanced, state-of-the-art medical equipment to provide the best diagnostic output with excellent patient comfort. We focus on providing quality and efficient services at all levels with emphasis on accurate scan results and quick service. Flexible appointment timings and personalized care ensure a comfortable imaging experience for the patients."]}/>
     </div>
    </>
  )
}

export default radiology
import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const physiotherapy = () => {
  return (
    <>
     <div className='h-auto w-screen flex flex-col'>
      <Banner src={"/assets/services/physiotherapy/main.png"} category={"Services"} title={"Physiotherapy"}/>
      <Info category={"Services"} title={"Physiotherapy"} src={"/assets/services/physiotherapy/info.png"} paras={["Highland Hospital’s Physiotherapy and Rehabilitation centre helps develop, maintain and restore maximum movement and functional ability throughout a patient’s life, where movement and function are threatened by aging, injury, disease, lifestyle or environmental factors. The wellness centre treats conditions such as sports injury, back and neck pain, muscle and joint pain, arthritis, injuries among children and adolescents, postural and musculoskeletal problems and overuse injuries. It also provides paralysis/ stroke care, treatment for children with delayed milestones, asthma and COPD care and pre/postoperative rehabilitation for all types of surgeries.", "The department provides a comprehensive treatment programme comprising contravention of manual therapy, remedial exercises and modern electrotherapy equipment, to achieve optimum results thus improving the quality of life."]}/>
     </div>
    </>
  )
}

export default physiotherapy
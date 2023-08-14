import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const microvascularSurgery = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/microvascular-surgery/main.png"} category={"Specialities"} title={"Microvascular Surgery"} desc={"Microvascular surgery is a technique utilized for complex facial defects, deformities, and some cases of facial paralysis."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Microvascular Surgery"} src={"/assets/specialities/microvascular-surgery/info.png"} paras={["Highland Hospital's Microvascular Surgery unit has a team of highly specialized surgeons who have dedicated their careers to treating patients with complex wounds and tissue defects. We offer a wide range of microsurgery services, including limb salvage, replantation of severed body parts, reconstruction of complex trunk defects, repair of nerve injuries and reconstruction of the face.", "Microvascular Surgery is a surgical discipline that enables tissue to be transferred from one part of the body to another while ensuring that the transplanted tissue stays perfused. This is accomplished using specialized instruments and an operating microscope. These are used to correct complex facial defects, deformities, and some cases of facial paralysis. It involves the transplantation of a patient's own tissue from a distant body part into the face and neck area. To nourish the transplanted tissue, blood vessels from the neck must be routed into the transplanted tissue using microsurgery techniques."]}/>
      </div>
    </>
  )
}

export default microvascularSurgery
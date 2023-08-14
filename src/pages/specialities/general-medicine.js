import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const generalMedicine = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/general-medicine/main.png"} category={"Specialities"} title={"General Medicine"} desc={"General Medicine is the branch of medicine that deals with the diagnosis and nonsurgical treatment of diseases of the internal organs."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"General Medicine"} src={"/assets/specialities/general-medicine/info.png"} paras={["The Emergency department of our hospital is a state of the art unit comprising of highly skilled and efficient team of specialists, emergency doctors and well trained nursing and paramedical staff & equipment. Our 24-hour emergency and trauma care is geared to meet all medical and surgical emergencies. This round the clock service enjoys 24x7 accesses to modern Operation Theatres, Pharmacy, Imaging and Laboratory services for ensuring instant diagnosis and quick treatment of the patient's condition."]}/>
      </div>
    </>
  )
}

export default generalMedicine
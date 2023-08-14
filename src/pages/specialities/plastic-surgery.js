import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const plasticSurgery = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/plastic-surgery/main.png"} category={"Specialities"} title={"Plastic and Reconstructive Surgery"} desc={"Highland Hospital Plastic and Reconstructive Surgery offers cosmetic surgery, reconstructive services, burn injury care, hand surgery, facial trauma surgery, complex wound care and aesthetic services."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Plastic and Reconstructive Surgery"} src={"/assets/specialities/plastic-surgery/info.png"} paras={["Our Plastic and Reconstructive Surgery department offers a broad range of surgical and non-surgical services providing cutting-edge, multi-disciplinary approach to services tailored to meet individual needs. Highland Hospital Plastic and Reconstructive Surgery offers cosmetic surgery, reconstructive services, burn injury care, hand surgery, facial trauma surgery, complex wound care and aesthetic services such as non-surgical options to help rejuvenate skin’s appearance and create a more youthful appearance.", "Our specialists offer a wide range of services from head to toe, covering acute and chronic issues, and work to restore the form and function of all body parts.", "The department also offers burn, face trauma, hand trauma and general plastic surgery 24 hours a day, 7 days a week."]}/>
      </div>
    </>
  )
}

export default plasticSurgery
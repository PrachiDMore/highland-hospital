import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const pediatric = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/pediatric/main.png"} category={"Specialities"} title={"Pediatric and Pediatric Surgery"} desc={"The Highland Hospital Pediatric Centre offers comprehensive services for infants and children up to age 18, whether it's a well visit, illness, injury or follow-up care, Highland Hospital specialists want to help children stay healthy."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Pediatric and Pediatric Surgery"} src={"/assets/specialities/pediatric/info.png"} paras={["Highland Hospital's Pediatric Centre is a unique one stop healthcare facility for the needs of children and teenagers offering comprehensive services for children up to age 21. The department combines latest health facilities and eminent experts with years of experience and expertise ensure that children stay healthy. The centre is geared to deliver top quality medical service with great care and compassion. Services are available all through the week and during evening hours for patient convenience. In addition, a physician is always on call if patients need assistance."]}/>
      </div>
    </>
  )
}

export default pediatric
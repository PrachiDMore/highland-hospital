import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const nephrology = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/nephrology/main.png"} category={"Specialities"} title={"Nephrology"} desc={"The Nephrology Department at Highland Hospital is one of its kind in the Mangalore."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Nephrology"} src={"/assets/specialities/nephrology/info.png"} paras={["The department of Nephrology at Highland Hospital is equipped with advanced facilities for management of all kidney diseases, offering world-class infrastructure for all kidney related ailments such as Haemodialysis, Continuous Ambulatory Peritoneal Dialysis (CAPD), Intermittent Peritoneal Dialysis, Continuous VenoVenous Haemodialysis (CVVHD), Plasmapheresis and Haemoperfusion, Ultrasound-guided Renal Biopsies, Renal Angiograms and Stenting for Renal Artery Stenosis. An expert team of highly-qualified doctors and medical practitioners support the department. Highland Hospital is reputed for delivering high-quality routine nephrology services for evaluation of renal function in both inpatient as well as outpatient settings. The department is equipped with the most advanced dialysis equipment and offers round the clock services.", "The department of Nephrology has established a tie-up with SIMRAH Foundation to ensure the availability of all these facilities especially to the needy and economically weaker sections of the society."]}/>
      </div>
    </>
  )
}

export default nephrology
import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const urology = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/urology/main.png"} category={"Specialities"} title={"Urology and Andrology"} desc={"Highland Hospital Urology and Andrology offers world-class expertise in all aspects."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Urology and Andrology"} src={"/assets/specialities/urology/info.png"} paras={["The department of Urology at Highland Hospital is well equipped to deal with disorders of the Urinary System in both males and females. The surgical aspects of urinary system including kidney and bladder disease, such as urinary tract infection (UTI) are also treated here.", "On the other hand, the department of Andrology caters to the treatment of male reproductive health problems including erectile dysfunction, ejaculatory dysfunction, male infertility, prostate problems or testicular pain and testosterone deficiency."]}/>
      </div>
    </>
  )
}

export default urology
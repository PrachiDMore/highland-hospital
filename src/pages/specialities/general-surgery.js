import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const generalSurgery = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/general-surgery/main.png"} category={"Specialities"} title={"General Surgery"} desc={"The General and Laparoscopic Surgery Department at Highland Hospital is equipped with the latest technology and infrastructure, supported by an experienced team of Surgeons and Postoperative care."} button={{text :"Enquire Now", link : "asd"}}/>

        <Info category={"Specialities"} title={"General Surgery"} src={"/assets/specialities/general-surgery/info.png"} paras={["The department of General Surgery, at Highland Hospital, performs surgical interventions that focus on the Gastrointestinal Tract, Liver, Colon, Endocrine System, etcetera and other major parts of the human body. Some of the common procedures include appendisectomy, gallbladder removals, colonoscopies, thyroidectomies, hernia and bariatric surgeries. Our general surgeons have specialized knowledge and experience related to the diagnosis, preoperative, operative, and postoperative management, including the management of complications, in several components of surgery, as well as knowledge and skills for diseases requiring team-based interdisciplinary care.", "The department also offers proper management to the patients suffering from diseases involving skin, soft-tissue, breast, hernia, and trauma. It also specializes in laparoscopic and minimally invasive surgeries in the fields of gastroenterology, gynaecology and urology. These advanced techniques help in the speedy recovery of the patients with minimal amount of tissue damage, minimal blood loss, reduced risk of developing infection and hence, minimal pain and discomfort, while also reducing the hospital-stay period for patients."]}/>
      </div>
    </>
  )
}

export default generalSurgery
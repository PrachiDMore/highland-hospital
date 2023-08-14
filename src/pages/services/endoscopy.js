import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const endoscopy = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/services/endoscopy/main.png"} category={"Services"} title={"Endoscopy"} />
          <Info category={"Services"} title={"Endoscopy"} src={"/assets/services/endoscopy/info.png"} paras={["The department of Endoscopy at Highland Hospital treats various disorders of the Oesophagus, Stomach, Intestines, Liver, Gall Bladder and Pancreas. It also performs endoscopic procedures and therapeutic interventions such as stopping bleeding from ulcers, removal of polyps, removal of the stone from the bile duct and other similar operations. The department is equipped with endoscopy and colonoscopy units which help in diagnosis and biopsy of various gastrointestinal diseases and malignancies and also in therapeutic interventions. Our reputed team of experts are highly experienced and well versed with the latest in technological procedures.", "Core competencies:", "Diagnostic and therapeutic endoscopies.", "State-of-the-art treatment of liver disease.", "Advanced palliative and curative treatment of GI cancers.", "State-of-the-art endoscopic equipment."]} />
        </div>
      </Layout>
    </>
  )
}

export default endoscopy
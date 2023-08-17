import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const laparoscopicSurgery = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/services/laparoscopic-surgery/main.png"} category={"Services"} title={"General and Laparoscopic Surgery"} />
          <Info category={"Services"} title={"General and Laparoscopic Surgery"} src={"/assets/services/laparoscopic-surgery/info.png"} paras={["The General and Laparoscopic Surgery department at Highland Hospital is equipped with the latest technology and infrastructure, supported by an experienced team of surgeons and post-op care staff. The team works together to promote quick recovery, foster better mobility, and ensure overall wellness.", "All major surgeries involving abdomen, skin, breast, soft tissues, and hernia are carried out through Laparoscopic Surgery, which is also known as key-hole surgery or minimally invasive surgery. Patients receive specialised assessment, latest treatments along with clinical post-operative care, medications and a regular follow-up. This technique scores over traditional open surgery as it involves a shorter hospital stay and faster recovery time, less pain and bleeding after the procedure and reduced scarring."]} />
        </div>
      </Layout>
    </>
  )
}

export default laparoscopicSurgery
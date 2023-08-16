import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import Info from '@/components/Info'
import React from 'react'

const surgicalMedical = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/services/surgical/main.png"} category={"Services"} title={"Surgical and Medical ICU"} />
          <Info category={"Services"} title={"Surgical and Medical ICU"} src={"/assets/services/surgical/info.png"} paras={["Highland Hospital, Medical and Surgical Intensive Care Unit offers the most advanced treatments, multidisciplinary approach, sophisticated, seamless and comprehensive treatments that provide critical life sustaining support for patients of all ages. Our team is experienced, interdisciplinary, dedicated to exceptional service and strives to deliver efficient care with professionalism and compassion. Our well trained nurses and proficient support staff are totally committed to providing a better quality of life for the ailing. These services are available round the clock and rehabilitation services ensure complete recovery.", "The hospital is equipped with 12 Medical Intensive Care Units (MICU), specialized for critical care and 8 Surgical Intensive Care Units (SICU) for complicated surgical procedures. The MICU offer continuous surveillance and are highly specialized to render permanent and regulated care for patients in these units. The staffs of these units are highly professional and well trained to maintain effective checks for long and continuous time periods. The SICU is also headed by highly qualified surgeons and anaesthesiologists having significant experience in this field. The multidisciplinary team approach ensures that the highest quality of critical care is provided to the patient."]} />
        </div>
      </Layout>
    </>
  )
}

export default surgicalMedical
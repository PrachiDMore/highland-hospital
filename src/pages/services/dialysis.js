import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const dialysis = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/services/dialysis/main.png"} category={"Services"} title={"Dialysis"} />
          <Info category={"Services"} title={"Dialysis"} src={"/assets/services/dialysis/info.png"} paras={["An expert team of highly-qualified doctors and medical practitioners support the Dialysis unit at Highland Hospital, which is reputed for delivering high-quality routine nephrology services for evaluation of renal function in both inpatient as well as outpatient settings. The department is equipped with the most advanced dialysis equipment and offers round the clock services.", "The department of Nephrology at Highland Hospital is equipped with advanced facilities for management of all kidney diseases, offering world-class infrastructure for all kidney related ailments such as Haemodialysis, Continuous Ambulatory Peritoneal Dialysis (CAPD), Intermittent Peritoneal Dialysis, Continuous VenoVenous Haemodialysis (CVVHD), Plasmapheresis and Haemoperfusion, Ultrasound-guided Renal Biopsies, Renal Angiograms and Stenting for Renal Artery Stenosis.", "The department of Nephrology, is tied-up with SIMRAH Foundation to ensure the availability of all these facilities especially to the needy and economically weaker sections of the society."]} />
        </div>
      </Layout>
    </>
  )
}

export default dialysis
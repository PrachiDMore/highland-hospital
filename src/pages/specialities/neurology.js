import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const neurology = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen'>
          <Banner src={"/assets/specialities/neurology/main.png"} category={"Specialities"} title={"Neurology"} desc={"The Highland Hospital neurologists offer comprehensive services for evaluation, consultation and medical management of disorders of the nervous system."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Neurology"} src={"/assets/specialities/neurology/info.png"} paras={["Highland Hospital offers state-of-the-art facilities for investigation and treatment of diseases of the Brain, Spinal Cord, Muscles and Nerves. The department of Neurology at the hospital provides the full spectrum of services for evaluation, consultation and medical management of disorders of the nervous system as well as comprehensive care to patients with disorders of the nervous system.", "A wide array of specialized secondary and tertiary neurological consultative services are also provided. The latest evidence-based clinical practices are backed up by ultramodern equipment and a team of highly-qualified doctors."]} />
        </div>
      </Layout>
    </>
  )
}

export default neurology
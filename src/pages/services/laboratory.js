import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const laboratory = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/services/laboratory/main.png"} category={"Services"} title={"Laboratory"} />
          <Info category={"Services"} title={"Laboratory"} src={"/assets/services/laboratory/info.png"} paras={["Highland Hospital is supported by an ultra-modern 24x7 Laboratory well equipped with state-of-the-art fully computerized equipment to ensure accuracy and reliability in clinical Pathology, Haematology, Biochemistry and Microbiology investigations and also provides a comprehensive range of diagnostic testing, clinical and consultative services.", "The Laboratory services at Highland Hospital are focussed towards offering comprehensive and a safe and secure experience to our patients when it comes to scientific or clinical advice, and diagnostic testing services. We care about providing reliable results at an affordable cost while maintaining absolute transparency."]} />
        </div>
      </Layout>
    </>
  )
}

export default laboratory
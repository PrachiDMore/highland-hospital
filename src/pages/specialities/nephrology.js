import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import List from '@/components/List'
import React from 'react'

const nephrology = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen'>
          <Banner src={"/assets/specialities/nephrology/main.png"} category={"Specialities"} title={"Nephrology"} desc={"The Nephrology Department at Highland Hospital is one of its kind in the Mangalore."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Nephrology"} src={"/assets/specialities/nephrology/info.png"} paras={["The department of Nephrology at Highland Hospital is equipped with advanced facilities for management of all kidney diseases, offering world-class infrastructure for all kidney related ailments such as Haemodialysis, Continuous Ambulatory Peritoneal Dialysis (CAPD), Intermittent Peritoneal Dialysis, Continuous VenoVenous Haemodialysis (CVVHD), Plasmapheresis and Haemoperfusion, Ultrasound-guided Renal Biopsies, Renal Angiograms and Stenting for Renal Artery Stenosis. An expert team of highly-qualified doctors and medical practitioners support the department. Highland Hospital is reputed for delivering high-quality routine nephrology services for evaluation of renal function in both inpatient as well as outpatient settings. The department is equipped with the most advanced dialysis equipment and offers round the clock services.", "The department of Nephrology has established a tie-up with SIMRAH Foundation to ensure the availability of all these facilities especially to the needy and economically weaker sections of the society."]} />
          <List
            title={"Evaluation is offered for the following symptoms:"}
            centerTitle={true}
            grid={true}
            className={"pb-10"}
            list={[
              "Hypertension that has failed to respond to multiple forms of anti-hypertensive medication",
              "Chronic kidney disease, usually with an unavoidable rise in creatinine, phosphate in muscle, a break down product of creatinine",
              "Proteinuria, the loss of protein especially albumin in the urine",
              "Recurrent kidney stones",
              "Hematuria, blood in the urine",
              "Chronic or recurrent urinary tract infections",
              "Acute renal failure, a sudden loss of renal function",
              "Electrolyte disorders or acid/base imbalance conditions",
            ]}
          />
        </div>
      </Layout>
    </>
  )
}

export default nephrology
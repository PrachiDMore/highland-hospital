import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const gastroenterology = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/gastroenterology/main.png"} category={"Specialities"} title={"Gastroenterology"} desc={"Our goal is to provide a comprehensive gastroenterology service with the help of modern technology, human touch and care. The department deals with various medical problems in gastroenterology in the outpatient, inpatient, and emergency services setting."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Gastroenterology"} src={"/assets/specialities/gastroenterology/info.png"} paras={["The department of Gastroenterology at Highland Hospital offers comprehensive, sophisticated diagnosis and medical treatment for adults and children by skilled and experienced staff. The team of doctors have expertise in the management of the full spectrum of Gastrointestinal, Liver and Pancreatico-Biliary diseases, including, but not restricted to, disorders such as inflammatory bowel disease, irritable bowel syndrome, malabsorption syndrome, gastrointestinal bleed, chronic diarrhoea, constipation, peptic ulcer, reflux disease, acute liver failure, chronic liver disease (viral, alcoholic and others), portal hypertension, bilio-pancreatic disorders and malignancies. The department offers personalised gastroenterology services in outpatient, inpatient, and emergency services settings with a humane touch."]}/>
      </div>
    </>
  )
}

export default gastroenterology
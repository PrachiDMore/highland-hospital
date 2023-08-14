import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const endocrinology = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/endocrinology/main.png"} category={"Specialities"} title={"Endocrinology"} desc={"An endocrinologist can diagnose and treat hormone problems and the complications that arise from them. Hormones regulate metabolism, respiration, growth, reproduction, sensory perception, and movement."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Endocrinology"} src={"/assets/specialities/endocrinology/info.png"} paras={["Highland Hospital's division of Endocrinology provides specialised care in the area of endocrinology, diabetes, and metabolism. The department offers a multi-disciplinary team based patient centric approach backed by state-of-the-art diagnostic laboratory for advanced hormonal evaluation and dynamic testing for various endocrine and metabolic disorders. Our highly experienced team of endocrinologists diagnose and treat patients for endocrine and metabolic disorders, by evaluating the relationship between nutrition and human disease to improve and maintain health. We are equipped to treat a vast range of endocrine disorders and dysfunctions, while working closely with our specialists in ophthalmology, otolaryngology, surgery, obstetrics, transplantation and other specialty areas to provide a multidisciplinary approach to a person's medical problems."]}/>
      </div>
    </>
  )
}

export default endocrinology
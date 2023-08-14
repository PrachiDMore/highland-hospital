import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const maxillofacialSurgery = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/maxillofacial-surgery/main.png"} category={"Specialities"} title={"Maxillofacial Surgery"} desc={"The Highland Hospital Health system specializes in treating many diseases, injuries and defects in the head, neck, face, jaws and the hard and soft tissues of the Oral (mouth) and Maxillofacial (jaws and face) region."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"Maxillofacial Surgery"} src={"/assets/specialities/maxillofacial-surgery/info.png"} paras={["The Oral and Maxillofacial Surgery department at Highland Hospital deals with routine minor oral surgical procedures like surgical extractions, removal of impacted teeth, cyst enucleation, biopsies, preprosthetic surgeries, etc., which are performed under local anaesthesia as well as advanced laser surgeries and implantological procedures which are done in our OT. The department has a well-equipped surgical OT with all modern facilities. Major surgeries for maxillofacial trauma ranging from maxillary fractures, mandibular fractures to frontal bone reductions and craniofacial injuries are routinely under taken. Cosmetic surgeries like facial profile correction, rhinoplasties, secondary cleft correction and various kinds of reconstructive surgeries are also being performed.", "Our oral and maxillofacial surgeons often work alongside our specialists in other fields such as ENT surgeons, Clinical Oncologists, Plastic Surgeons, Orthodontists, Restorative Dentists, Radiologists and Neurosurgeons, in order to provide a multidisciplinary approach to patient treatment."]}/>
      </div>
    </>
  )
}

export default maxillofacialSurgery
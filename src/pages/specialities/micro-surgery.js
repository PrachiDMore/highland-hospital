import Banner from '@/components/Banner'
import Info from '@/components/Info'
import React from 'react'

const microSurgery = () => {
  return (
    <>
      <div className='h-auto w-screen'>
        <Banner src={"/assets/specialities/micro-surgery/main.png"} category={"Specialities"} title={"ENT Micro Surgery"} desc={"As in other surgical specialities microscopic surgery plays an essential and inseparable role in ENT operations."} button={{text :"Enquire Now", link : "asd"}}/>
        
        <Info category={"Specialities"} title={"ENT Micro Surgery"} src={"/assets/specialities/micro-surgery/info.png"} paras={["Microscopic surgery plays an essential and inseparable role in ENT operations, ear and laryngeal (throat) microsurgeries such as tympanoplasty, mastoidectomy, ossiculoplasty and stapedectomy have yielded excellent results for affected patients. Laryngeal microsurgery has been the standard treatment yielding unparalleled results in the treatment of voice disorders. Endoscopic Sinonasal Surgery (ESS) which is similar to micro surgery for nasal and sinus problem, has undergone advancements over the last three decades, and also gives good results in many sinus and skull base diseases, which were difficult or impossible to treat previously.", "Highland Hospital offers many such ENT Micro Surgery packages at very affordable rates and these are performed by a well experienced and expert surgical team. Some are day care and some are over night packages."]}/>
      </div>
    </>
  )
}

export default microSurgery
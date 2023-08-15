import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import List from '@/components/List'
import React from 'react'

const ophthalmology = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen'>
          <Banner src={"/assets/specialities/ophthalmology/main.png"} category={"Specialities"} title={"Ophthalmology"} desc={"Highland Hospital offers comprehensive eye care services from routine eye exams to leading edge ophthalmic diagnostic testing, advanced clinical treatments, laser and surgical procedures."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Ophthalmology"} src={"/assets/specialities/ophthalmology/info.png"} paras={["The department of Ophthalmology at Highland Hospital provides comprehensive preventive, diagnostic and treatment services for disorders of the eyes. Highland Hospital offers comprehensive eye care services from routine eye exams to leading edge ophthalmic diagnostic testing, advanced clinical treatments and surgical procedures. We have board-certified ophthalmologists including fellowship-trained sub-specialists in glaucoma, retina, cornea and external eye disease, ocular pathology, paediatric ophthalmology and cataract surgery. Advanced facility and investigative methods enable our specialists to choose the best approach for treatment of glaucoma, vitreo-retinal diseases, corneal problems, uveitis, diabetic retinopathy, tumours and other eye disorders.", "We utilize sophisticated ophthalmic imaging equipment and are assisted by a dedicated staff of certified technicians, ophthalmic assistants and nurses, who provide a team approach to eye care, whether you need emergency medical treatment for an eye injury or just have a few questions about your vision."]} />

          <List
            title={"Highland Hospital specialty eye care services include:"}
            centerTitle={true}
            grid={true}
            className={"py-10"}
            list={[
              "Cataract surgery",
              "Glaucoma",
              "Oculoplasties",
              "Corneal and external disease",
              "Macular diseases and conditions",
              "Diabetic eye disease",
              "Pediatric eye disease",
              "Diagnostic testing",
              "Retinal diseases and conditions",
            ]}
          />
        </div>
      </Layout>
    </>
  )
}

export default ophthalmology
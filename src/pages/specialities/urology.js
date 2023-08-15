import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import List from '@/components/List'
import React from 'react'

const urology = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen bg-light'>
          <Banner src={"/assets/specialities/urology/main.png"} category={"Specialities"} title={"Urology and Andrology"} desc={"Highland Hospital Urology and Andrology offers world-class expertise in all aspects."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Urology and Andrology"} src={"/assets/specialities/urology/info.png"} paras={["The department of Urology at Highland Hospital is well equipped to deal with disorders of the Urinary System in both males and females. The surgical aspects of urinary system including kidney and bladder disease, such as urinary tract infection (UTI) are also treated here.", "On the other hand, the department of Andrology caters to the treatment of male reproductive health problems including erectile dysfunction, ejaculatory dysfunction, male infertility, prostate problems or testicular pain and testosterone deficiency."]} />
          <List
            title={"Some of the more common problems treated by our experts include:"}
            centerTitle={true}
            grid={true}
            className={"pt-10"}
            list={[
              "Stones in the urinary tract",
              "Prostate issues",
              "Urinary tract obstruction",
              "Urinary incontinence",
              "Urinary tract infections",
              "Testicular issues",
            ]}
          />
          <List
          text={"On the other hand, the department of Andrology caters to the treatment of male reproductive health problems including erectile dysfunction, ejaculatory dysfunction, male infertility, prostate problems or testicular pain and testosterone deficiency."}
            grid={true}
            className={"pb-10"}
            list={[
              "Sexual dysfunctions (Erectile dysfunction, ejaculatory dysfunction, lack of libido etc.)",
              "Genital reconstruction - Penile lengthening and girth enhancement",
              "Surgical sperm retrieval by PESA/ TESA/ TESE/ microdissection TESE",
              "Male infertility",
              "Androgen deficiency",
            ]}
          />
        </div>
      </Layout>
    </>
  )
}

export default urology
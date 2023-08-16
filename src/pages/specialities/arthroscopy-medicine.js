import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import List from '@/components/List'
import React from 'react'

const arthroscopyMedicine = () => {
  return (
    <>
      <Layout>
        <div className='h-auto w-screen'>
          <Banner src={"/assets/specialities/arthroscopy-medicine/main.png"} category={"Specialities"} title={"Arthroscopy and Sports Medicine"} desc={"Arthroscopy is a surgical procedure orthopedic surgeons use to visualize, diagnose, and treat problems inside a joint."} button={{ text: "Enquire Now", link: "asd" }} />

          <Info category={"Specialities"} title={"Arthroscopy and Sports Medicine"} src={"/assets/specialities/arthroscopy-medicine/info.png"} paras={["The Arthroscopy & Sports Medicine unit at Highland Hospital regularly conducts knee, elbow and shoulder arthroscopy, revision, and replacement surgeries. Through our fully equipped Sports rehabilitation and physiotherapy unit we provide a line‐up of services ranging from sports injury management to fitness testing and exercise prescription for health and fitness, and sports performance enhancement.", "The department provides world class treatment for sports injuries and joint ailments at affordable costs to athletes and non‐athletic people of all ages. We understand the need for quick recovery and pain management in sports injuries and our sports medicine team works with surgeons to put our patient's health back on track. Using the latest minimally invasive surgical techniques and the latest imaging techniques, our specially trained doctors offer consultation, treatment and surgery for sports injuries without restricting the activity of the patient and reducing recovery time."]} />
          <List
            centerTitle={true}
            className={"pb-10"}
            grid={true}
            title={"Causes of arthroscopy"}
            list={[
              "Changing Direction Rapidly",
              "Stopping suddenly",
              "Slowing down while running",
              "Landing from a jump incorrectly",
              "Direct contact/collision, such as a football tackle"
            ]}
          />
        </div>
      </Layout>
    </>
  )
}

export default arthroscopyMedicine
import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const director = () => {
  return (
    <>
      <Layout>
        <Banner title={"Medical Director's Message"} src={"/assets/about-us/main.png"} />

        <Info title={"Medical Director's Message"} src={"/assets/about-us/director.png"} name={"Dr. C. P. Abdulla Yasser"} paras={["In this era of medical innovation, as new treatment procedures and technologies continue to unfold at a rapid pace, we at Highland Hospital are firm and resolute in our vision to bring quality, compassionate and affordable healthcare to the region. This after all, was the foundation on which the institution was envisioned, nearly three decades ago. Highland Hospital continually strives to be at the forefront of providing patient-centred and compassionate care, state-of-the-art technology and the highest quality clinical care. We are staffed with a dedicated and well designated team of nurses, paramedical teams, physicians, and administrative staff, all of whom are adept at delivering the simplest or most complex healthcare solutions in a caring and healing environment.", 'We have a highly qualified and dedicated team of medical and support staff. The Consultants in various departments are among the cream of specialists in the city. Plans are underway to constantly enhance the services and facilities that the Hospital offers, both in curative and preventive healthcare applications. In this resolve, our motto "Your health: Our care", also becomes our guiding philosophy.']} />
      </Layout>
    </>
  )
}

export default director
import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const ceo = () => {
  return (
    <>
      <Layout>
        <Banner title={"About Us"} src={"/assets/about-us/main.png"} />

        <Info title={"CEO's Message"} src={"/assets/about-us/ceo.png"} name={"Mr. Mohammed Yoonus"} paras={["Highland Hospital has witnessed a huge, albeit gradual, transformation since its inception in 1995. Several floors of the 130 bedded hospital have already undergone a welcome facelift and the rest are swiftly under process. These changes are a part of our constant endeavour to streamline our operations and bring a diverse gamut of healthcare services, all under a single roof, while primarily facilitating patient comfort, experience and convenience. The focus has and will remain on quality patient centric care and cost effective healthcare solutions.", "Our team of healthcare experts are the backbone of our credibility and our capabilities. Our growing infrastructure is befittingly complemented by our staff and their dedication towards selfless service. As we cross the 25th milestone in our journey towards excellence in healthcare delivery, we look forward to your continuing patronage and partnership as a TEAM - because indeed 'Together Everyone Achieves More'."]} />
      </Layout>
    </>
  )
}

export default ceo
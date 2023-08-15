import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'

const chairman = () => {
  return (
    <>
      <Layout>
        <Banner title={"About Us"} src={"/assets/about-us/main.png"} />

        <Info title={"Chairman's Message"} src={"/assets/about-us/chairman.png"} name={"Dr. C. P. Abdul Rahman"} paras={["The completion of 25 years is indeed a major milestone in the life of a healthcare institution. It is not merely an occasion for retrospection or introspection of the past but an opportunity to look forward to greater achievements in the future. I recall the words of Denis J. Hart, who said: “A Silver Jubilee is a time to pause and reflect on all the good work done”.As we celebrate 25 glorious years of a highly eventful, meaningful and endearing journey today, we recall with all humility the people behind the successful realization of this milestone achievement and the hard work and dedication of our entire team of doctors and staff.", "In the beautiful words of Henry Ford: “Coming together is a beginning; keeping together is progress; working together is success.” We have all worked very hard as a team - a united family - to foster innovation and strengthen our quest for quality healthcare. Our determination and endurance has propelled Highland Hospital to be in the forefront of the healthcare scenario, in the region and beyond. Like I said at the beginning of this message, a Silver Jubilee is not merely an occasion for retrospection or introspection of the past but an opportunity to look forward to greater achievements in the future."]} />
      </Layout>
    </>
  )
}

export default chairman
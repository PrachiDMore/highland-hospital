import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Card from '@/components/Card'
import axios from 'axios'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const news = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios("https://highland-hospital-backend.vercel.app/get-news", {
      method: "GET"
    })
      .then((res) => {
        console.log(res.data)
        setNews(res.data.response)
      })
  }, [])
  return (
    <>
      <Layout>
        <Banner title={"News"} src={"/assets/news/main.png"} />

        <div className='flex flex-col justify-center items-center w-screen w-max-screen lg:px-28 px-5 py-10 bg-light'>
          <h1 className={`text-4xl font-bold text-darkBlue ${lexend.className}`}>Latest News and Update</h1>
          <p className={`mt-1 ${poppins.className}`}>The followings are the latest news and updates about Highland Hospital Family</p>

          <div className='w-full mt-6 grid lg:grid-cols-3 grid-cols-1 gap-8'>
            {
              news?.map((value, index) => {
                return <Card src={value?.image} title={value?.title} desc={value?.description} />
              })
            }

            <Card src={'/assets/news/image2.png'} title={"Republic Day Celebrations"} desc={"You know what this wonderful week is all about, but when is it? The weeks of February 6-12, 2023, will be marked as Children's Mental Health Week. Children's Mental He"} />
            <Card src={'/assets/news/image3.png'} title={"ANTI SMOKING CAMP"} desc={"You know what this wonderful week is all about, but when is it? The weeks of February 6-12, 2023, will be marked as Children's Mental Health Week. Children's Mental He"} />
            <Card src={'/assets/news/image1.png'} title={"Children's Mental health awareness week"} desc={"You know what this wonderful week is all about, but when is it? The weeks of February 6-12, 2023, will be marked as Children's Mental Health Week. Children's Mental He"} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default news
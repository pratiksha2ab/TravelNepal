import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SpecialityList from '../Components/organism/SpecialityList'
import BestTripCard from '../Components/BestTripCard'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title> Travel Nepal</title>
      </Head>
      <SpecialityList/>
      <BestTripCard/>
      <Footer/>
    </div>
  )
}

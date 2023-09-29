

import React from 'react'
import Hero from './home-components/hero/hero'
import Section from './components/section/section'
import ImageGroup from './components/imageGroup/imageGroup'
import Gallery from './components/gallary/galarry'
import Card from './components/card/card'
import SectionServer from './section'
// import { metadata } from './layout'


export const metadata = {
  title: "home page",
  description: "home page home page home page home page"

}
const Page = () => {
  return (
    <main className=' '>
      <Hero />

      {/* section trends */}

      {/* section trends */}
      <Section />


      <section className='gallary py-20 px-20'>
        <Gallery />

      </section>

    </main>
  )
}

export default Page
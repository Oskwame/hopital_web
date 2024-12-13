import NavBar from "@/components/NavBar";
import ImageSwipe from "@/components/ImageSwipe"
import RecordCount from "@/components/RecordCount";
import About  from "@/components/About"
import OurServices from "@/components/OurServices";
import PartnersBar from "@/components/Partners";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";

import React from 'react'

export default function Page() {
  return (
    <div>
      {/* Render the NavBar */}
      <NavBar />
       {/* Render the ImageSlider */}
      <ImageSwipe/>

      {/* Render the RecordCount */}
      <RecordCount/>

       {/* Render the About */}
      <About/>
        {/* Render the OurServices*/}
        <OurServices/>

        {/* Render the Partners*/}
        <PartnersBar/>
        
        {/* Render the Footer*/}
        <Footer/>

    </div>
  );
}

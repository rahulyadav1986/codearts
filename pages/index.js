import CustomHead from '../components/Shared/CustomHead';
import Hero from '../components/Home/Hero';
import WhyChooseUs from '../components/Home/WhyChooseDetails/WhyChooseUs';
import WhatWeDo from '../components/Services/WhatWeDo';
import Marketing from '../components/Home/Marketing/Marketing';
import Video from '../components/Home/Video';
import Blogs from '../components/Blogs/Blogs';
import Brands from '../components/Home/Brands/Brands';
import Testimonials from '../components/Testimonials/Testimonials';
const Home = ()=> {
  return (
    <>
       <CustomHead
          title="Codearts Solution Pvt Ltd | Web Marketing | Web Design | App Development"
          metades="Codearts Solution Pvt Ltd is a digital marketing agency in Kolkata and Pune. We offer full web marketing solutions in Hyderabad &amp; Banglore. Contact us today."
       />
       <Hero />
       <WhyChooseUs />
       <WhatWeDo />
       <Marketing />
       <Video />
       <Blogs />
       <Brands />
       <Testimonials />
    </>
  )
}

export default Home

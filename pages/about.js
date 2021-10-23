import CustomHead from "../components/Shared/CustomHead";
import InnerHero from "../components/Shared/InnerHero";
import WhyChooseUsCards from '../components/Home/WhyChooseDetails/WhyChooseUsCards';
import WhyList from "../components/Home/WhyChooseDetails/WhyLists";
import WhyChooseusContent from "../components/Home/WhyChooseDetails/WhyChooseUsContent";
import SeoListDetails from "../components/About/SeoListDetails";
import WhatWeDo from "../components/Services/WhatWeDo";
import Testimonials from "../components/Testimonials/Testimonials"
import Team from "../components/Team/Team";
import Skills from "../components/Skills/Skills";
const About = ()=>{
    return(
        <>
            <CustomHead
                title="About Us"
                metades="This is About Us Content"
            />
            
            <InnerHero
                pageTitle="About us"
            />
            <div className="cs-why_choose_us_section inner pb">
                <div className="cs-container d-flex align-center justify-between">
                    <ul className="cs-why_option">
                        <WhyChooseUsCards />
                    </ul>
                </div>
            </div>

            <div className="cs-about_section pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-content_area">
                        <WhyChooseusContent />
                        <p>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. </p>
                        <ul className="cs-list d-flex align-center justify-between">
                            <WhyList />
                        </ul>
                    </div>
                    <div className="cs-right_section">
                        <img src="../images/about_us.jpg" alt="" />
                        <span className="cs-business_label">
                            <h4>Business label</h4>
                            <lord-icon
                                src="https://cdn.lordicon.com/qlbskwpn.json"
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                </div>
            </div>

            <div className="cs-about_section cs-seo_company pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-right_section">
                        <img src="../images/about_us.jpg" alt="" />
                        <span className="cs-business_label">
                            <h4>SEO</h4>
                            <lord-icon
                                src="https://cdn.lordicon.com/uqpazftn.json"
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                    <div className="cs-content_area">
                        <div className="cs-custom_heading">
                            <h4>WHY CHOOSE US</h4>
                            <h2>Work With A Dedicated SEO Company</h2>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry’s standard dummy text ever since the when an.</p>
                        <ul className="seo_list_back">
                            <SeoListDetails />
                        </ul>
                    </div>
                    
                </div>
            </div>

            <WhatWeDo />
            <Team />
            <Skills />
            <Testimonials />
        </>
    )
}

export default About
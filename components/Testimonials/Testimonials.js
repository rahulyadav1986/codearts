import TestimonialList from "./TestimonialList"
const Testimonials = ()=> {
    return(
        <div className="cs-testimonial_section pt pb">
            <div className="cs-container d-flex justify-between">
                <div className="cs-custom_heading">
                    <h4>TESTIMONIALS</h4>
                    <h2>What Our Clients Say</h2>
                    <p>Codearts Solution stays ahead of the curve with digital marketing trends.</p>
                    <lord-icon
                        src="https://cdn.lordicon.com/wgkjwucf.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#eff2f4,secondary:#eff2f4">
                    </lord-icon>
                </div> 
                <div className="cs-testimonial_main_area owl-carousel" id="testi-slider">
                    <TestimonialList />
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials
import CustomHead from "../components/Shared/CustomHead"
import InnerHero from "../components/Shared/InnerHero"
import TestimonialList from "../components/Testimonials/TestimonialList"

const Reviews = ()=>{
    return(
        <>
            <CustomHead
                title="Reviews"
                metades="This is About Us Content"
            />            
            <InnerHero
                pageTitle="Reviews"
            />
            <div className="cs-reviews_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>REVIEWS</h4>
                        <h2>Our Great Reviews</h2>
                    </div>
                    <div className="cs-main_reviews pt_small">
                        <TestimonialList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
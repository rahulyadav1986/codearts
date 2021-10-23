import BlogList from "../components/Blogs/BlogsList"
import CustomHead from "../components/Shared/CustomHead"
import InnerHero from "../components/Shared/InnerHero"

const Blogs = ()=>{
    return(
        <>
            <CustomHead
                title="Blogs"
                metades="This is About Us Content"
            />            
            <InnerHero
                pageTitle="Blogs"
            />
            <div class="cs-blogs_section inner pt pb">        
                <div class="cs-container">
                    <div class="cs-custom_heading center">
                        <h4>TRENDING NEWS</h4>
                        <h2>Our Latest Blogs And<br />Attractive News</h2>
                    </div>
                </div>
                <div class="cs-main_blog_section pt_small">
                    <div class="cs-container">
                        <div class="cs-blog_items">
                            <BlogList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs
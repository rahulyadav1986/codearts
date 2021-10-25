import WhatWeDoCards from "./WhatWeDoCards";

const WhatWeDo = ()=>{   
    return(
        <>
             <div className="cs-services_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>WHAT WE DO</h4>
                        <h2>What We Offer</h2>
                    </div>  
                    <div className="cs-main_section pt_small">
                        <WhatWeDoCards />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
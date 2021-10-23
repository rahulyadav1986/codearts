import CustomHead from "../../components/Shared/CustomHead";
import InnerHero from "../../components/Shared/InnerHero";
import WhatWeDo from "../../components/Services/WhatWeDo";
import Team from "../../components/Team/Team";
import Skills from "../../components/Skills/Skills";
const Services = ()=>{
    return (
        <>
             <CustomHead
                title="Services"
                metades="This is About Us Content"
            />
            <InnerHero
                pageTitle="Services"
            />
            <WhatWeDo />            
            <Skills />
            <Team />
        </>
    )
}

export default Services
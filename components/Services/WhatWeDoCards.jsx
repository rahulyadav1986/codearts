import WhatWeDoItem from "./WhatWeDoItem";
import { servicedata } from "../../data/servicedata";



const WhatWeDoCards = ()=> {
    return(
        <>
        {
            servicedata.map((item, i)=>{
                return(
                    <WhatWeDoItem key={i} 
                        img1={item.img1}
                        img2={item.img2}
                        title={item.title}
                        des={item.des}
                        slug={item.slug}
                    /> 
                )
            })
        }
            
            
        </>
    )
}





export default WhatWeDoCards
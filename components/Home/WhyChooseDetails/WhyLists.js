import { whylistdata } from "../../../data/whylistdata"
import WhyListItem from "./WhyListItem"
const WhyList = ()=> {
    return(
        <>
            {
                whylistdata.map((item,i)=>{
                    return(
                        <WhyListItem 
                            title={item.title}
                        />
                    )
                })
            }
            

            
        </>
    )
}

export default WhyList
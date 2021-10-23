import SeoListItem from "./SeoListItem"
import { seolistdata } from "../../data/seolistdata"
const SeoListDetails = ()=>{
    return(
        <>
            {
                seolistdata.map((item, i)=>{
                    return(
                        <SeoListItem
                            icon={item.icon}
                            title={item.title}
                            des={item.des}
                        />
                    )
                })
            }
            
        </>
    )
}

export default SeoListDetails
import TestimonialItem from "./TestimonialItem";
import { testimonialdata } from "../../data/testimonialdata";
const TestimonialList = ()=> {
    return(
        <>
            {
                testimonialdata.map((item, i)=>{
                    return(
                        <TestimonialItem key={i}
                            name={item.name}
                            img={item.img}
                            desig={item.desig}
                            des={item.des}
                        />
                    )
                })
            }
           
        </>
    )
}

export default TestimonialList
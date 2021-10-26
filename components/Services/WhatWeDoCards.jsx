import useSWR from 'swr';
import WhatWeDoItem from "./WhatWeDoItem";
import { servicedata } from "../../data/servicedata";


const fetcher = async()=>{
    const res = await fetch("http://localhost:3000/api/services");
    const data = await res.json();
    return data
}


const WhatWeDoCards = ()=> {
    const {data, error} = useSWR('service', fetcher);
    if(error) return "Error Occoured";
    if(!data) return "Loading...";
    return(
        <>
        {
            data.map((item, i)=>{
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
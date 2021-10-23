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
                    /> 
                )
            })
        }
            
            
        </>
    )
}



//import WhatWeDoItem from "./WhatWeDoItem"
//import { servicedata } from "../../data/servicedata"
//export async function getStaticProps(){
    //const res = await fetch('/api/services');
    //const data = await res.json();
    //return{
        //props:{
            //data
        //}
    //}
//}
//export default function WhatWeDoCards({ data }){
    //return(
        //<>
            //{
                //data.map((item, i)=>{
                    //return(
                        //<WhatWeDoItem key={i}
                            //img1={item.img1}
                            //img2={item.img2}
                            //title={item.title}
                            //des={item.des}
                        ///> 
                    //)
                //})
            //} 
        //</>
   //)
//}

export default WhatWeDoCards
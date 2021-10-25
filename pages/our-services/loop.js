import Link from 'next/link';
export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/services');
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}
const ServiceLoop = ({data})=>{
    return(
        <>
            {
                data.map((item,i)=>{
                    return(
                        <div className="cs-portion">
                            <Link href={"/services/"+ item.slug}>
                                <a className="cs-heading d-flex">
                                    <div className="cs-image_area">
                                        <img src={item.img1} />
                                        <img src={item.img2} className="hover" />                            
                                    </div>
                                    <h3>{item.title}</h3>
                                </a>
                            </Link>
                            <p>{item.des}</p>  
                        </div>
                    )
                })
            }
             
        </>
    )
}

export default ServiceLoop
import Link from 'next/link';
const WhatWeDoItem = (props)=>{
    return(
        <>
            <div className="cs-portion">
                <Link href={"/services/"+ props.slug}>
                    <a className="cs-heading d-flex">
                        <div className="cs-image_area">
                            <img src={props.img1} />
                            <img src={props.img2} className="hover" />                            
                        </div>
                        <h3>{props.title}</h3>
                    </a>
                </Link>
                <p>{props.des}</p>  
            </div>
        </>
    )
}

export default WhatWeDoItem
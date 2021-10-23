const WhatWeDoItem = (props)=>{
    return(
        <>
            <div className="cs-portion">
                <a href="#" className="cs-heading d-flex">
                    <div className="cs-image_area">
                        <img src={props.img1} />
                        <img src={props.img2} className="hover" />                            
                    </div>
                    <h3>{props.title}</h3>
                </a>
                <p>{props.des}</p>  
            </div>
        </>
    )
}

export default WhatWeDoItem
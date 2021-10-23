const TestimonialItem = (props)=>{
    return(
        <>
            <div className="cs-testi_item">
                <img src="../images/quote.svg" className="quote" />
                <p>{props.des}</p>
                <div className="cs-profile_area d-flex align-center">
                    <img src={props.img} alt="" />
                    <div className="cs-pro_del">
                        <div className="name">{props.name}</div>
                        <div className="deg">{props.desig}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialItem
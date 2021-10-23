const TeamItem = (props)=>{
    return(
        <div className="cs-team_item">
            <img src={props.img} alt="" />
            <div className="cs-content_area d-flex align-center justify-center">
                <h3>{props.desig}</h3> 
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default TeamItem
const SkillItem = (props)=>{
    const skill = {
        backgroundColor: props.color,
        width: props.level
    };
    return(
        <>
            <li>
                <div className="d-flex align-center justify-between">
                    <h4>{props.name}</h4> 
                    <span className="no">{props.level}</span>
                </div>
                <span className="cs-skill_bar">
                    <span className="cs-score" style={skill}></span>
                </span>
            </li>
        </>
    )
}

export default SkillItem
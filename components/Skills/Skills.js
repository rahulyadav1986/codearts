import SkillList from "./SkillList"
const Skills = ()=>{
    return(
        <>
            <div className="maximize_result pt pb">
                <div className="cs-container">
                    <div className="cs-head d-flex align-center justify-between">
                        <div className="cs-custom_heading">
                            <h2>Maximizing Your<br />Potentials With UVO<br />Service</h2>
                            <p>Praesent sollicitudin felis a ornare volutpat. Nullam males uada sem sit amet semper tristique. Donec nec neque lectus. Nunc lis a ornare volutpat. N mattis.</p>
                        </div>
                        <ul className="cs-skills_area">
                            <SkillList />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
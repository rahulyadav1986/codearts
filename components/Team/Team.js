import TeamMember from '../../components/Team/TeamMember';

const Team = ()=>{
    return(
        <>
            <div className="cs-team_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>WHAT WE ARE</h4>
                        <h2>Our Specialist Teams</h2>
                    </div>
                    <div className="cs-main_team_section pt_small owl-carousel" id="team-slider">
                        <TeamMember />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Team
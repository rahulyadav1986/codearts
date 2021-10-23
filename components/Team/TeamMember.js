import TeamItem from "./TeamItem";
import { teammemberdata } from "../../data/teammemberdata";

const TeamMember = ()=>{
    return(
        <>
        {
            teammemberdata.map((item, i)=>{
                return(
                    <TeamItem key={i}
                        img={item.img}
                        name={item.name}
                        desig={item.desig}
                    />
                )
            })
        }
            
            
        </>
    )
}

export default TeamMember
import SkillItem from "./SkillItem"

const SkillList = ()=>{
    return(
        <>
            <SkillItem
                name="Plugin customization"
                level="80%"
                color="#FD3D6B"
            />
            <SkillItem
                name="Web Development"
                level="70%"
                color="#FDB323"
            />
            <SkillItem
                name="App Development"
                level="60%"
                color="#2ECBFF"
            />
            <SkillItem
                name="Web Design"
                level="95%"
                color="#FDB323"
            />
            <SkillItem
                name="App Design"
                level="50%"
                color="#FD3D6B"
            />
            <SkillItem
                name="UI/UX Design"
                level="97%"
                color="#2ECBFF"
            />
         
        </>
    )
}

export default SkillList
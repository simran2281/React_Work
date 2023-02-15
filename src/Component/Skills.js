import React from "react";

// const Skill = ({skill : [tech,level]})=>{
//     <li> {tech} {level}</li>

// }
export default function Skills({skills}){ 
    const skilllist = skills.map((x)=> <Skill skill={x}/>)
    return(
        <div>
            {students.map((person)=>{
                return (
                    <div key={index}>
                    <h2>Name : {person.name}</h2>
                    <span>Skill :</span>
                    {person.skills.map((skill,index)=> {
                        return (
                            <h2> Skill : {skill}</h2>
                        )
                    })}
                    </div>
                )
            })}
        </div>
    )
}
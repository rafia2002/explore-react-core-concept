import { useState } from "react"

export default function Team()
{
    const [team,setTeam]=useState(11);
    const handleAdd=()=>{
      const newteam=team+1;
       setTeam(newteam);

    }
    const teamstyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'10px',
        borderRadius:'15px'
    }

    return(
        <div style={teamstyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
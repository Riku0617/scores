import React from 'react'
import { Props4 } from './Alies';


const Interception:React.FC<Props4> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {

  
    if ((value.pass_result === "Interception" || (value.result === "Fumble" && value.play_type ==="Run")) && (value.o_or_k  || value.play_type === "Punt" || value.play_type === "Kick Off")){
      return (
        <>
            <div className="mx-2 mt-2"><h5>Turnover Place</h5></div>
            <select {...register("turnover_place",{ setValueAs: (value) => Boolean(value), })} className="col-10 col-sm-3">
                    <option value="true">{homeTeamData?.team_name}</option>
                    <option value="">{awayTeamData?.team_name}</option>
            </select>
            <div className="mx-2 mt-2"><h5>Turnover Yards</h5></div>
            <input type="number" {...register("turnover_yards",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
        </>
      )
    }
    return null
  }

export default Interception

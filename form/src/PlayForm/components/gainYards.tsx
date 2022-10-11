import React from 'react'
import { Props8 } from './Alies';



const GainYards:React.FC<Props8> = ({register,value,homeTeam,awayTeam,ballPlace}) => {

  if ((value.o_or_k && value.play_type === "Run") || (value.o_or_k && (value.pass_result === "Complete" || value.pass_result === "Sacked")) ){
    return (
      <>
          <div className="mx-2 "><h5>Ball-Place Result</h5></div>
          <select {...register("ball_place_result",{ setValueAs: (value) => Boolean(value)})} className="col-10 col-sm-3">
                    <option key={1} value={ballPlace?"true":""}>{ballPlace?homeTeam:awayTeam}</option>
                    <option key={2} value={ballPlace?"":"true"}>{ballPlace?awayTeam:homeTeam}</option>
          </select>
          <div className="mx-2 "><h5>Ball-on Result</h5></div>
          <input type="number" {...register("ball_on_result",{ setValueAs: (value) => parseInt(value)})} className="col-10 col-sm-3"/>
      </>
    )
    
  }
  return null
}

export default GainYards

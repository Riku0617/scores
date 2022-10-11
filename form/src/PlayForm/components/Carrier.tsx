import React from 'react'
import { Props2, Props3 } from './Alies';
import OffensePlayerList from './OffensePlayerList';


const Runner:React.FC<Props3> = ({register,value,homeQB,awayQB,homeRB,awayRB,homeWR,awayWR,ballPossession}) => {

    if(value.play_type === "Run" && value.o_or_k){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Carrier</h5></div>
                  <select {...register("carrier")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homeRB}
                    {homeQB}
                    {homeWR}
                  </select>
          </>
        )
      }else{
        console.log("away Team Ball")
        return (
          <>
              <div className="mx-2 mt-2"><h5>Carrier</h5></div>
                  <select {...register("carrier")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayRB}
                    {awayQB}
                    {awayWR}
                  </select>
          </>
        )
      }
    }
  return null
}


export default Runner

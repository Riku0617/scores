import React from 'react'
import { Props, Props3 } from './Alies';
import OffensePlayerList from './OffensePlayerList';



const Passer:React.FC<Props3> = ({register,value,homeQB,awayQB,homeRB,awayRB,homeWR,awayWR,homeTE,awayTE,ballPossession}) => {


    if(value.play_type === "Pass" && value.o_or_k){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Rasser</h5></div>
                  <select {...register("passer")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homeQB}
                    {homeWR}
                    {homeRB}
                    {homeTE}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Passer</h5></div>
                  <select {...register("passer")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayQB}
                    {awayWR}
                    {awayRB}
                    {awayTE}
                  </select>
          </>
        )
      }
    }
  return null
}

export default Passer

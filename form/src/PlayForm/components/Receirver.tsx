import React from 'react'
import {  Props3 } from './Alies';


const Recierver:React.FC<Props3> = ({register,value,homeQB,awayQB,homeRB,awayRB,homeWR,awayWR,homeTE,awayTE,ballPossession})=> {


    if(value.play_type === "Pass" && value.pass_result === "Complete"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Receiver</h5></div>
                  <select {...register("receiver")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homeWR}
                    {homeRB}
                    {homeTE}
                    {homeQB}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Receiver</h5></div>
                  <select {...register("receiver")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayWR}
                    {awayRB}
                    {awayTE}
                    {awayQB}
                  </select>
          </>
        )
      }
      }
      return null     
    }
export default Recierver

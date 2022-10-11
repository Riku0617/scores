import React from 'react'
import { TFP_Props } from './Props'

const Carrier:React.FC<TFP_Props> = ({ value,register,homeTeamData,awayTeamData,ballPossession,}) => {
    
    const homePlayerList = homeTeamData?.OffensePositions?.map((position)=>
    position?.OffenseAthletes?.map((athlete,index)=>
        <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
        ))

    const awayPlayerList = awayTeamData?.OffensePositions?.map((position)=>
    position?.OffenseAthletes?.map((athlete,index)=>
    <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if(value.result_tfp === "Run"){
    if (ballPossession){
        return (
        <>
            <div className="mx-2 mt-2"><h5>TFP Carrier</h5></div>
                <select {...register("carrier_tfp")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePlayerList}
                </select>
        </>
        )
    }else{
        return (
        <>
            <div className="mx-2 mt-2"><h5>Carrier</h5></div>
                <select {...register("carrier_tfp")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPlayerList}
                </select>
        </>
        )
    }
    }
    return null
}

export default Carrier

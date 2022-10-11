import React from 'react'
import { TeamInfo } from '../../Alies'

const OffensePlayerList = (teamData:TeamInfo,positionName:string) => {

    const list = teamData.OffensePositions?.map((position)=>
      position.position_name === positionName ? position.OffenseAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ):null)

    const entireList = teamData.OffensePositions?.map((position)=>
    position.OffenseAthletes?.map((athlete,index)=>
    <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if (positionName === ""){
        return entireList
    }


  return list
}


export default OffensePlayerList

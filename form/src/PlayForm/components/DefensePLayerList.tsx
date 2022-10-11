import React from 'react'
import { TeamInfo } from '../../Alies'

const DefensePlayerList = (teamData:TeamInfo,positionName:string) => {

    const list = teamData.DefensePositions?.map((position)=>
      position.position_name === positionName ? position.DefenseAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ):null)
    
    const entireList = teamData.DefensePositions?.map((position)=>
    position.DefenseAthletes?.map((athlete,index)=>
    <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
    ))

    if (positionName === ""){
        return entireList
    }
  return list
  }
  
export default DefensePlayerList
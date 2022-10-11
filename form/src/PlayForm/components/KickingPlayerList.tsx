import React from 'react'
import { TeamInfo } from '../../Alies'

const KickingPlayerList = (teamData:TeamInfo,positionName:string) => {

    const list = teamData.KickingPositions?.map((position)=>
      position.position_name === positionName ? position.KickingAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ):null)

    const entireList = teamData.KickingPositions?.map((position)=>
      position.KickingAthletes?.map((athlete,index)=>
      <option key={index} value={athlete.full_name}>{athlete.jersey} {athlete.full_name}</option>
      ))
  
      if (positionName === ""){
          return entireList
      }
  
  
  return list
  }
  
export default KickingPlayerList
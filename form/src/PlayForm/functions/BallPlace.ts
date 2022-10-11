import React from 'react'
import { Game } from '../../Alies'
import { Play } from '../../Alies'


const BallPlace = (data:Play,ballPlace:boolean,ballPlaceResult:boolean,homeTeam:string,awayTeam:string) => {
    console.log(ballPlaceResult,"FInal")

    data.ball_place = ballPlace
    data.ball_place_result = ballPlaceResult
    
  return null
}

export default BallPlace

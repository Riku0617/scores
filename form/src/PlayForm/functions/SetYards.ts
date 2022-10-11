import React from "react"
import { Play } from '../../Alies'

type Props = {
    data:Play;
    ballPossession:boolean
    ballPlace:boolean
    ballOn:number
    gainYards:number
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    state : {
        BallPlaceResult:boolean
    }
}

const SetYards:React.FC<Props> = ({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state}) => {
    if (ballPossession && ballPlace){
        if (data.ball_place_result){
            setBallOn(data.ball_on_result)
            data.yards_gained = data.ball_on_result - ballOn
        }else{
            setBallOn(data.ball_on_result)
            data.yards_gained = (50-ballOn) + (50-data.ball_on_result)
            setBallPlace(data.ball_place_result)
            // state.BallPlaceResult = !state.BallPlaceResult
        }
    }
    else if (ballPossession && (!ballPlace)){
        setBallOn(data.ball_on_result)
        data.yards_gained = ballOn - data.ball_on_result
    }else if ((!ballPossession) && ballPlace){
        setBallOn(data.ball_on_result)
        data.yards_gained = ballOn - data.ball_on_result
    }else{
        if (!data.ball_place_result){
            setBallOn(data.ball_on_result)
            data.yards_gained = data.ball_on_result - ballOn
        }else{
            setBallOn(data.ball_on_result)
            data.yards_gained = (50-ballOn) + (50-data.ball_on_result)
            setBallPlace(data.ball_place_result)
            // state.BallPlaceResult = !state.BallPlaceResult
        }
    }
  return null
}

export default SetYards

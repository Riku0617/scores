import React from 'react'
import { Play } from '../../Alies'
import SetYards from './SetYards'

type Props = {
    data:Play
    ballPlace:boolean
    ballPossession:boolean
    setBallPlace:React.Dispatch<React.SetStateAction<boolean>>
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
    setBallOn:React.Dispatch<React.SetStateAction<number>>
    state : {
        BallPlaceResult:boolean
    }
}

const Interception:React.FC<Props> = ({data,ballPlace,ballPossession,setBallPlace,setBallPossession,setBallOn,state}) => {
    if (ballPossession == true){ballPossession=false}
    else{ballPossession=true}
    ballPlace = data.turnover_place
    // setBallOn(data.turnover_yards)
    var gainYards = data.turnover_return_yards
    var ballOn = data.turnover_yards
    SetYards({data,ballPossession,ballPlace,ballOn,gainYards,setBallOn,setBallPlace,state})
  return null
}

export default Interception

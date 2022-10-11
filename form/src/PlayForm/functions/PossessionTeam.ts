import React from 'react'
import { Game } from '../../Alies'
import { Play } from '../../Alies'

const PossessionTeam = (data:Play,ballPossession:boolean,homeTeam:string,awayTeam:string) => {
    if (ballPossession){
        data.possession_team_name = homeTeam
    }else{
        data.possession_team_name = awayTeam
    }
    data.ball_possession = ballPossession
}

export default PossessionTeam

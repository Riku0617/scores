import { UseFormRegister } from "react-hook-form"
import { Play, TeamInfo } from "../../../Alies"

export type TFP_Props = {
    value:Play
    register :UseFormRegister<Play>
    homeTeamData: TeamInfo
    awayTeamData: TeamInfo
    ballPossession:boolean
}

export {}
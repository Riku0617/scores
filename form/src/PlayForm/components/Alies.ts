import {useForm, UseFormRegister} from "react-hook-form"
import { TeamInfo } from "../../Alies"
import { Play } from "../../Alies" 


export type Props = {
    register :UseFormRegister<Play>
}

export type Props2 = Props & {
    value: Play
}

export type Props8 = Props2 & {
    homeTeam:string
    awayTeam:string
    ballPlace:boolean
}
export type Props3 = Props2 & {
    homeQB:(JSX.Element[] | null)[]
    awayQB:(JSX.Element[] | null)[]
    homeRB:(JSX.Element[] | null)[]
    awayRB:(JSX.Element[] | null)[]
    homeWR:(JSX.Element[] | null)[]
    awayWR:(JSX.Element[] | null)[]
    homeTE:(JSX.Element[] | null)[]
    awayTE:(JSX.Element[] | null)[]
    ballPossession:boolean
}

export type Props4 = Props2 & {
    homeTeamData:TeamInfo
    awayTeamData:TeamInfo
    ballPossession:boolean
}

export type Props5 = Props2 & {
    homePunter:(JSX.Element[] | null)[]
    awayPunter:(JSX.Element[] | null)[]
    homeKicker:(JSX.Element[] | null)[]
    awayKicker:(JSX.Element[] | null)[]
    ballPossession:boolean
}

export type Props6 = Props2 & {
    homePuntReturner:(JSX.Element[] | null)[]
    awayPuntReturner:(JSX.Element[] | null)[]
    homeKickReturner:(JSX.Element[] | null)[]
    awayKickReturner:(JSX.Element[] | null)[]
    ballPossession:boolean
}

export type Props7 = Props2 & {
    homeDefense:(JSX.Element[] | null)[]
    awayDefense:(JSX.Element[] | null)[]
    ballPossession:boolean
}
export{}
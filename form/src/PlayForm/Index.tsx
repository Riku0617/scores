import React from 'react'
import { UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form'
import { Game, Play, TeamInfo } from '../Alies'
import DefensePlayerList from './components/DefensePLayerList'
import { Carrier, GainYards, KickDistance, Kicker, KickIsGood, KickResult, OorK, Passer, PassResult, PlayType, PuntDistance, Punter, Receiver, Result, Returner, ReturnYards, Tackler, TOReturnYards, TurnOver } from './components/EntryPoint'
import KickingPlayerList from './components/KickingPlayerList'
import OffensePlayerList from './components/OffensePlayerList'
import { TFP } from './components/TFP/EntryPoint'
import { AllProcessor } from './functions/EntryPoint'


type Props = {
    visible:boolean
    homeTeam:string
    awayTeam:string
    register:UseFormRegister<Play>
    handleSubmit:UseFormHandleSubmit<Play>
    watch:UseFormWatch<Play>
    reset:UseFormReset<Play>
    homeTeamData: TeamInfo[]
    setHomeTeamData: React.Dispatch<React.SetStateAction<TeamInfo[]>>
    awayTeamData: TeamInfo[]
    setAwayTeamData: React.Dispatch<React.SetStateAction<TeamInfo[]>>
    driveId:number
    setDriveId: React.Dispatch<React.SetStateAction<number>>
    playAmount:number
    setPlayAmount:React.Dispatch<React.SetStateAction<number>>
    yardsDrived:number
    setYardsDrived:React.Dispatch<React.SetStateAction<number>>
    ballOn: number
    setBallOn: React.Dispatch<React.SetStateAction<number>>
    ballPlace:boolean
    setBallPlace: React.Dispatch<React.SetStateAction<boolean>>
    down:number
    setDown:React.Dispatch<React.SetStateAction<number>>
    distance:number
    setDistance:React.Dispatch<React.SetStateAction<number>>
    homePoints:number
    setHomePoints:React.Dispatch<React.SetStateAction<number>>
    awayPoints:number
    setAwayPoints:React.Dispatch<React.SetStateAction<number>>
    gameData:Game[]
    ballPossession:boolean
    setBallPossession:React.Dispatch<React.SetStateAction<boolean>>
}

const Index:React.FC<Props> = ({visible,homeTeam,awayTeam,register,handleSubmit,watch,reset,
                                homeTeamData,setHomeTeamData,awayTeamData,setAwayTeamData,
                                driveId,setDriveId,playAmount,setPlayAmount,yardsDrived,setYardsDrived,
                              ballOn,setBallOn,ballPlace,setBallPlace,
                              down,setDown,distance,setDistance,
                            homePoints,setHomePoints,awayPoints,setAwayPoints,
                            gameData,ballPossession,setBallPossession,}) => {

  const homeRB = OffensePlayerList(homeTeamData[0],"Running Back")
  const awayRB = OffensePlayerList(awayTeamData[0],"Running Back")

  const homeQB = OffensePlayerList(homeTeamData[0],"Quarterback")
  const awayQB = OffensePlayerList(awayTeamData[0],"Quarterback")

  const homeWR = OffensePlayerList(homeTeamData[0],"Wide Receiver")
  const awayWR = OffensePlayerList(awayTeamData[0],"Wide Receiver")

  const homeTE = OffensePlayerList(homeTeamData[0],"Tight End")
  const awayTE = OffensePlayerList(awayTeamData[0],"Tight End")

  const homeOffense = OffensePlayerList(homeTeamData[0],"")
  const awayOffense = OffensePlayerList(awayTeamData[0],"")

  const homeKicker = KickingPlayerList(homeTeamData[0],"Place kicker")
  const awayKicker = KickingPlayerList(awayTeamData[0],"Kicker")

  const homePunter = KickingPlayerList(homeTeamData[0],"Punter")
  const awayPunter = KickingPlayerList(awayTeamData[0],"Punter")

  const homePuntReturner = KickingPlayerList(homeTeamData[0],"Punt Returner")
  const awayPuntReturner = KickingPlayerList(awayTeamData[0],"Punt Returner")

  const homeKickReturner = KickingPlayerList(homeTeamData[0],"Kick Returner")
  const awayKickReturner = KickingPlayerList(awayTeamData[0],"Kick Returner")

  const homeSNP = KickingPlayerList(homeTeamData[0],"Long Snapper")
  const awaySNP = KickingPlayerList(awayTeamData[0],"Long Snapper")

  const homeDefense = DefensePlayerList(homeTeamData[0],"")
  const awayDefense = DefensePlayerList(awayTeamData[0],"")

  return (
    <div className="">
        <div  className="bg-dark text-white d-flex justify-content-center">
            <h1>Football Game Cast</h1>
        </div>
        <div className='m-4'>
            <div className="mt-4">
                <div>
                    <h4>Possession :{ballPossession?homeTeam:awayTeam}</h4>
                </div>
                <div>
                    <h4>Ball Place :{ballPlace?homeTeam:awayTeam} {ballOn}</h4>
                </div>
                <div>
                    <h4>Play記録フォーム</h4>
                </div>
                <form onSubmit={handleSubmit(async(data) => {
                    // Initializer(plays,games,setGames);


                    setPlayAmount(prevPlays => prevPlays + 1)
                    setYardsDrived(prev => prev + data.yards_gained)

                    AllProcessor({ data,homeTeam,awayTeam, ballPlace,setBallPlace,ballPossession, ballOn, down, distance,setPlayAmount,setYardsDrived, gameData,  setBallPossession, setBallOn, setDriveId, setDown, setDistance, setHomePoints, setAwayPoints })

                    data.drive_id = driveId
                    data.ball_on = ballOn
                    data.down = down
                    data.distance = distance

                    await fetch("http://localhost:9091/drives/latest",{
                      method:"PUT",
                      headers:{"Content-Type":"application/json"},
                      body: JSON.stringify({
                          ball_possession:ballPossession?homeTeam:awayTeam,
                          amount_of_play: playAmount+1,
                          yards_drived: yardsDrived + data.yards_gained,
                      })
                    }).then(() => {
                        console.log(yardsDrived,"update drive!")
                    })

                    await fetch("http://localhost:9091/plays",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(data)
                    }).then(() => {
                        if ( data.play_type === "FG" || data.result === "TD"){
                            setDriveId(prevId => prevId + 1)}
                    })
                    reset();
                    })}>
                    <OorK register={register}/>
                    <PlayType register={register} value={watch()}/>
                    <Passer register={register}  value={watch()} homeQB={homeQB} awayQB={awayQB} homeWR={homeWR} awayWR={awayWR} homeRB={homeRB} awayRB={awayRB} homeTE={homeTE} awayTE={awayTE} ballPossession={ballPossession}/>
                    <PassResult register={register} value={watch()}/>
                    <Receiver register={register} value={watch()} homeQB={homeQB} awayQB={awayQB} homeWR={homeWR} awayWR={awayWR} homeRB={homeRB} awayRB={awayRB} homeTE={homeTE} awayTE={awayTE} ballPossession={ballPossession}/>
                    <Carrier register={register} value={watch()} homeQB={homeQB} awayQB={awayQB} homeWR={homeWR} awayWR={awayWR} homeRB={homeRB} awayRB={awayRB} homeTE={homeTE} awayTE={awayTE} ballPossession={ballPossession} />
                    <GainYards register={register} value={watch()} homeTeam={homeTeam} awayTeam={awayTeam} ballPlace={ballPlace}/>
                    <Result register={register} value={watch()}/>
                    <TurnOver register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <TFP register={register} value={watch()} homeTeamData={homeTeamData[0]} awayTeamData={awayTeamData[0]} ballPossession={ballPossession}/>
                    <Kicker register={register} value={watch()} homeKicker={homeKicker} awayKicker={awayKicker} homePunter={homePunter} awayPunter={awayPunter} ballPossession={ballPossession}/>
                    <Punter register={register} value={watch()} homeKicker={homeKicker} awayKicker={awayKicker} homePunter={homePunter} awayPunter={awayPunter} ballPossession={ballPossession}/>
                    <KickDistance register={register} value={watch()}/>
                    <PuntDistance register={register} value={watch()}/>
                    <ReturnYards register={register} value={watch()}/>
                    <KickIsGood register={register} value={watch()}/>
                    <KickResult register={register} value={watch()}/>
                    <Returner register={register} value={watch()} homePuntReturner={homePuntReturner} awayPuntReturner={awayPuntReturner} homeKickReturner={homeKickReturner} awayKickReturner={awayKickReturner} ballPossession={ballPossession}/>
                    <Tackler register={register} value={watch()} homeDefense={homeDefense} awayDefense={awayDefense} ballPossession={ballPossession}/>
                    <TOReturnYards register={register} value={watch()}/>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-lg btn-primary'>完了</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Index

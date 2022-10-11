import React from 'react'
import Kicker from '../Kicker'
import Passer from '../passer'
import { CarrierTFP, ForceTurnOverTFP, KickerTFP, PasserTFP, PlayTypeTFP, ReceiverTFP, ResultTFP, } from './EntryPoint'
import { TFP_Props } from './Props'



const Index:React.FC<TFP_Props> = ({register,value,homeTeamData,awayTeamData,ballPossession}) => {
  return (
    <>
        <PlayTypeTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <KickerTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <CarrierTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <PasserTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <ReceiverTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <ForceTurnOverTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
        <ResultTFP register={register} value={value} homeTeamData={homeTeamData} awayTeamData={awayTeamData} ballPossession={ballPossession}/>
    </>

  )
}

export default Index

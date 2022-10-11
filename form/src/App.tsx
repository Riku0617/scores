import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { Drive, Game, Play, TeamInfo } from './Alies';
import { GameForm } from './GameForm/EntryPoint';
import { PlayForm } from './PlayForm/EntryPoint';

function App() {

  const { register ,handleSubmit,watch,reset} = useForm<Play>();

  const [visible,setVisible] = useState<boolean>(true);
  const [awayTeam,setAwayTeam] = useState<string>("")
  const [homeTeam,setHomeTeam] = useState<string>("")
  const [reception,setReception] = useState<boolean>(true)

  const [teamList,setTeamListteamList] = useState<TeamInfo[]>([])
  const [driveId,setDriveId] = useState<number>(1);
  const [gameId,setGameId] = useState<number>(1);

  const [ballOn,setBallOn]=useState<number>(35);

  const [gaemData,setGameData] = useState<Game[]>([]);
  const [driveData,setDriveData] =useState<Drive[]>([])

  const [homePoints,setHomePoints] = useState<number>(0);
  const [awayPoints,setAwayPoints] = useState<number>(0);

  const [yardsDrived,setYardsDrived] = useState<number>(0);
  const [playAmount,setPlayAmount] = useState<number>(0);

  const [homeTeamData,setHomeTeamData] = useState<TeamInfo[]>([])
  const [awayTeamData,setAwayTeamData] = useState<TeamInfo[]>([])

  const [down,setDown] = useState<number>(1);
  const [distance,setDistance] = useState<number>(10);

  useEffect(() => {
      fetch('http://localhost:9091/teaminfo', {
      method: 'GET'})
      .then(res => res.json())
      .then(data => {
      setTeamListteamList(data["Value"])
  })
  },[])

  useEffect(() => {
    if (homeTeam != ""){
      fetch("http://localhost:9091/teaminfo/"+homeTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
                    .then(res => res.json())
                    .then(async data => {
                        setHomeTeamData(data["Value"])
                        console.log(data["Value"],"a")
                    }).then(() => console.log("fetch home"))
        }
    fetch("http://localhost:9091/games/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
        .then(res => res.json())
        .then(async data => {
            setGameData(data["Value"])
            console.log(data["Value"]["awayteam"])
        }).then(() => console.log("fetch gamedata")).then(() => { 
        })
    fetch("http://localhost:9091/drives/latest", {method: 'GET',headers:{"Content-Type":"application/json"},})
        .then(res => res.json())
        .then(async data => {
            setDriveData(data["Value"])
        }).then(() => console.log("fetch drivedata")).then(() => { 
        })
  },[homeTeam])

  useEffect(() => {
    if (awayTeam != ""){
      fetch("http://localhost:9091/teaminfo/"+awayTeam, {method: 'GET',headers:{"Content-Type":"application/json"},})
                    .then(res => res.json())
                    .then(async data => {
                        setAwayTeamData(data["Value"])
                        console.log(data["Value"],"a")
                    }).then(() => console.log("fetch home"))
        }
  },[awayTeam])

  const [ballPossession,setBallPossession]=useState<boolean>(reception);
  const [possessionTeamName,setPossessionTeamName]=useState<string>("")
  const [ballPlace,setBallPlace]=useState<boolean>(reception);

  useEffect(() => {
    setBallPossession(reception)
    setBallPlace(reception)
  },[reception])



  
  if(visible){
    return (
      <div className="">
        <GameForm visible={visible} setVisible={setVisible} 
        awayTeam={awayTeam} setAwayTeam={setAwayTeam}
        homeTeam={homeTeam} setHomeTeam={setHomeTeam}
        reception={reception} setReception={setReception}
        teamList={teamList}  gameId={gameId} setGameId={setGameId}/>
      </div>
    );
  }
  return (
    <div className="">
      <PlayForm visible={visible} homeTeam={homeTeam} awayTeam={awayTeam}
      register={register} handleSubmit={handleSubmit} watch={watch} reset={reset}
      homeTeamData={homeTeamData} setHomeTeamData={setHomeTeamData} awayTeamData={awayTeamData} setAwayTeamData={setAwayTeamData}
      driveId={driveId} setDriveId={setDriveId}
      playAmount={playAmount} setPlayAmount={setPlayAmount}
      yardsDrived={yardsDrived} setYardsDrived={setYardsDrived}
      ballOn={ballOn} setBallOn={setBallOn}
      ballPlace={ballPlace} setBallPlace={setBallPlace}
      down={down} setDown={setDown} distance={distance} setDistance={setDistance}
      homePoints={homePoints} setHomePoints={setHomePoints}
      awayPoints={awayPoints} setAwayPoints={setAwayPoints}
      gameData={gaemData} ballPossession={ballPossession} setBallPossession={setBallPossession}
      />
    </div>
  );
}

export default App;

import React from 'react'
import { TeamInfo } from '../Alies'
import { AwayTeam,HomeTeam,Cointos } from './EntryPoint'

type Props = {
    visible:boolean
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
    awayTeam:string
    setAwayTeam:React.Dispatch<React.SetStateAction<string>>
    homeTeam:string
    setHomeTeam:React.Dispatch<React.SetStateAction<string>>
    reception:boolean
    setReception:React.Dispatch<React.SetStateAction<boolean>>
    teamList:TeamInfo[]
    gameId:number
    setGameId:React.Dispatch<React.SetStateAction<number>>
}

const Index:React.FC<Props> = ({visible,setVisible,awayTeam,setAwayTeam,homeTeam,setHomeTeam,reception,setReception,teamList,gameId,setGameId}) => {

    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(false)
        fetch("http://localhost:9091/games",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                hometeam:homeTeam,
                awayteam:awayTeam,
                cointos_result: reception,
            })
        }).then(() => {
            console.log("success!")
        })
        fetch("http://localhost:9091/drives",{
        method:"POST",
        body: JSON.stringify({
            game_id:gameId,
            ball_possession:reception?homeTeam:awayTeam
        })
        }).then(() => {
        console.log("Post initial drive!")
        setGameId(prev => prev + 1)
        })
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(false);
        
    }

    return (
        <div className="">
            <div  className="bg-dark text-white d-flex justify-content-center">
                <h1>Football Game Cast</h1>
            </div>
            <div className='m-4'>
                <div className="mt-4">
                    <div>
                        <h4>Play記録フォーム</h4>
                    </div>
                    <form onSubmit={(e) => handleSubmit1(e)}>
                        <HomeTeam teamList={teamList} setHomeTeam={setHomeTeam}/>
                        <AwayTeam teamList={teamList} setAwayTeam={setAwayTeam}/>
                        <Cointos homeTeam={homeTeam} awayTeam={awayTeam} setReception={setReception} />
                        <div className='mt-2'>
                            <button type='submit' className='btn btn-lg btn-primary'>完了</button>
                        </div>
                    </form>
                    <form onSubmit={(e) => handleSubmit2(e)}>
                        <div className='mt-2'>
                            <button type='submit' className='btn btn-lg btn-primary'>PlayFormへ</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Index

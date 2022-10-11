import { Props2, Props3, Props5 } from './Alies';
import KickingPlayerList from './KickingPlayerList';



const Kicker:React.FC<Props5> = ({register,value,homeKicker,awayKicker,homePunter,awayPunter,ballPossession}) => {

  console.log(homeKicker,homePunter)
    if(value.play_type === "Kick Off" || value.play_type==="FG"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kicker</h5></div>
                  <select {...register("kicker")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homeKicker}
                    {homePunter}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Kicker</h5></div>
                  <select {...register("kicker")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayKicker}
                    {awayPunter}
                  </select>
          </>
        )
      }
    }
  return null
}

export default Kicker

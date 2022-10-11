import { Props2, Props3, Props6 } from './Alies';


const Returner:React.FC<Props6> = ({register,value,homePuntReturner,awayPuntReturner,homeKickReturner,awayKickReturner,ballPossession}) => {

    if(value.play_type === "Kick Off" || value.play_type==="Punt" || value.play_type==="Safety Punt"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Returner</h5></div>
                  <select {...register("returner")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePuntReturner}
                    {homeKickReturner}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Returner</h5></div>
                  <select {...register("returner")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPuntReturner}
                    {awayKickReturner}
                  </select>
          </>
        )
      }
    }
  return null
}



export default Returner

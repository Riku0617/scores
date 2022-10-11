import { Props2, Props3, Props5 } from './Alies';



const Punter:React.FC<Props5> = ({register,value,homeKicker,awayKicker,homePunter,awayPunter,ballPossession}) => {


    if(value.play_type === "Punt" || value.play_type==="Safety Punt"){
      if (ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Punter</h5></div>
                  <select {...register("punter")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homePunter}
                    {homeKicker}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Punter</h5></div>
                  <select {...register("punter")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayPunter}
                    {awayKicker}
                  </select>
          </>
        )
      }
    }
  return null
}


export default Punter

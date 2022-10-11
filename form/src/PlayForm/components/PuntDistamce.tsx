import { Props2 } from './Alies';



const PuntDistamce :React.FC<Props2> = ({register,value}) => {
    if (value.play_type === "Punt" || value.play_type ==="Safety Punt"){
      return (
        <>
            <div className="mx-2 mt-2"><h5>Punt Distance</h5></div>
            <input type="number" {...register("punt_distance",{ setValueAs: (value) => parseInt(value), })} className="col-10 col-sm-3"/>
        </>
      )
    }
    return null
  }

export default PuntDistamce

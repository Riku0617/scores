import React from 'react'
import { Props } from './Alies';


const OorK:React.FC<Props> = ({register}) => {

  return (
    <>
        <div className="mx-2 "><h5>O or K</h5></div>
        <select {...register("o_or_k",{ setValueAs: (value) => Boolean(value), })} className="col-10 col-sm-3">
            <option value="-">-</option>
            <option value="Offense">Offense</option>
            <option value="">Kick</option>
        </select>
    </>
  )
}

export default OorK

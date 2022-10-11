import React from 'react'

import { Props, Props3, Props7 } from './Alies';

const Tackler:React.FC<Props7> = ({register,value,homeDefense,awayDefense,ballPossession}) => {

      if (!ballPossession){
        return (
          <>
              <div className="mx-2 mt-2"><h5>Tackler</h5></div>
                  <select {...register("tackler")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {homeDefense}
                  </select>
          </>
        )
      }else{
        return (
          <>
              <div className="mx-2 mt-2"><h5>Tackler</h5></div>
                  <select {...register("tackler")} className="col-10 col-sm-3">
                    <option key={0} value="-">-</option>
                    {awayDefense}
                  </select>
          </>
        )
      }

  return null
}


export default Tackler

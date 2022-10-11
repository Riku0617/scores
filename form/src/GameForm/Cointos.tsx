import React from 'react'

type Props = {
    homeTeam:string
    awayTeam:string
    setReception:React.Dispatch<React.SetStateAction<boolean>>
}

const Conitos:React.FC<Props> = ({homeTeam,awayTeam,setReception}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setReception(Boolean(e.target.value))
        console.log(Boolean(e.target.value),"conintos")
    }

    return (
    <div>
        <div className="mx-2 mt-2"><h5>First Receiving Team</h5></div>
        <select onChange={(e) => handleChange(e)} className="col-10 col-sm-3">
            <option value="true">{homeTeam}</option>
            <option value="">{awayTeam}</option>
        </select>
    </div>
    )
  }

export default Conitos

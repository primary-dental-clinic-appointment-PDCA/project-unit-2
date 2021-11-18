import React from 'react'
import { useParams } from 'react-router'

export default function Listofclinic({data}) {
    const {id} = useParams()
    console.log(data)
    return (
        <div className="fullcard">

        {data.filter((building) => building.building == id)
             .map((clinic) => (

          <div className="card_c">
          <h3>Dr.<span>{clinic.doctor}</span></h3>

          <h3>Clinic Number:<span>{clinic.clinic_num}.</span> </h3>
          
          <h3>Floor Number:<span>{clinic.floor}.</span></h3>

          </div>  
        ))
        }
            
        </div>
    )
}
 
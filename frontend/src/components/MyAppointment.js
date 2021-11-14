import { useSelector , useDispatch} from "react-redux";
import { deleteAppointment } from "../reducers/appointment";

function MyAppointment() {
    const dispatch = useDispatch()

    const state = useSelector((state) =>{
        return{
            apList: state.appointment.list
        }
    })

    return (

        <div>

            {state.apList.length ? (
                state.apList?.map((ele, key) =>(
                    <div key={key}>
                    <h3>{ele.Clinic}</h3>
                     <p>{ele.day}</p>
                     <p>{ele.time}</p>
                     <button onClick={()=>dispatch(deleteAppointment(ele))}>Delete</button>
                    </div>
                    ))):(<h1>No Appointment </h1>) }

        </div>
    )
    
}

export default MyAppointment
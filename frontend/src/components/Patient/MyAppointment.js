import { useSelector , useDispatch} from "react-redux";
import { remove } from "../../Reducers/PatientAppointment";
import swal from 'sweetalert'
import './login.css'

function MyAppointment() {
    const dispatch = useDispatch()

    const state = useSelector((state) =>{
        return{
            Mylist:state.PatientAppointment.patientPage
        }
    })

    function deleteAppoint(ele){
        swal("successfully deleted","","error")
        dispatch(remove(ele))

    }

    return (

        <div className="myBigcontainer">

            {state.Mylist.length ? (
                state.Mylist?.map((ele, key) =>(
                    <div key={key} className="myCard">
                    <h3>{ele.Clinic}</h3>
                     <p>{ele.day}</p>
                     <p>{ele.time}</p>
                     <button onClick={()=>{deleteAppoint(ele)}} className='Delete' >Delete</button>
                    </div>
                    ))):(<h3 className="nothing">No Appointment </h3>) }

        </div>
    )
    
}

export default MyAppointment
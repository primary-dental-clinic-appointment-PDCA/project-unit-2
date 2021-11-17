
const initState = {

    patientPage: []
}

const PatientAppointment = (state = initState, { type, payload }) => {

    switch (type) {
        case 'ADDTOLIST':
            return {
                patientPage: [...state.patientPage, payload]
            }
        case 'REMOVE':
            return {
                patientPage: state.patientPage.filter((elm) => {
                    return elm.id !== payload.id
                })

            }
        default:
            return state
    }
}
export default PatientAppointment;

/////////////////////////////
export const myAppointment = (data) => {
    return {
        type: 'ADDTOLIST',
        payload: data
    }
}

export const remove = (data) => {
    return {
        type: 'REMOVE',
        payload: data
    }
}
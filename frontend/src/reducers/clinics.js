const initialState = {
    list: []
}

const clinics = (state = initialState, {type}) => {
    switch (type) {
        case "LIST_CLINICS":
            
            return { list: [...state.list] }

        default:
            return state;
    }
    
}
export default clinics

export const clinicslist = () => {
    return {
        type: "LIST_APPOINTMENT"
    };
}
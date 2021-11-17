const initialState = {
    list: [],
};

const appointment = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LIST_APPOINTMENT":
            return { list: [...state.list, payload] };

        case "DELETE_APPOINTMENT":
            return {
                list: state.list.filter((element) => {
                    return element.id !== payload.id;
                }),
            };

        default:
            return state;
    }
};
export default appointment;

export const addAppointment = (data) => {
    return {
        type: "LIST_APPOINTMENT",
        payload: data,
    };
};
export const deleteAppointment = (data) => {
    return {
        type: "DELETE_APPOINTMENT",
        payload: data,
    };
};

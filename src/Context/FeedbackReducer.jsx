// Reducer Function
const FeedbackReducer = (state,action) =>{

switch(action.type){

case "REMOVE_FEEDBACK":
    return{
        ...state,
        feedbacks: state.feedbacks.filter((item)=>item.id !== action.payload)
    }

    case "ADD_FEEDBACK":
        return{
            ...state,
            feedbacks : [action.payload, ...state.feedbacks]
        }

        case "EDIT_FEEDBACK":
            return{
                ...state,
                edit: {feedback :action.payload, isEdit :true}
            }

            case "UPDATE_FEEDBACK":
            return{
                ...state,
                feedbacks : state.feedbacks.map((item => item.id === action.payload.id  ? action.payload : item)),
                edit: {feedback :{}, isEdit :false}
            } 

    default:
        return state;
}
}

export default FeedbackReducer
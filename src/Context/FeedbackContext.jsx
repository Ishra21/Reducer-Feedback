import { createContext, useReducer} from "react";
import FeedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext()

// Provider
export const FeedbackProvider = ({children}) =>{

// Initial Function
const initialState = {
    feedbacks : [{id: 1, rating : 4, review : "Excellent"},
        {id: 2, rating : 4, review : "Nice"},
        {id: 3, rating : 2, review : "Not Good"},
        {id: 4, rating : 3, review : "Average"},
    ],
    edit : {feedback :{}, isEdit : false}
}



// Reducer
const [state,dispatch] = useReducer(FeedbackReducer, initialState) 


    return (
        <FeedbackContext.Provider value={{state, dispatch, edit : state.edit}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../Context/FeedbackContext'

const ListGroup = () => {
const {state} = useContext(FeedbackContext)

    return (
        <div className='mt-5 p-5'>
            <ul>
            {
                state.feedbacks.map((feedback) => <ListItem key={feedback.id} feedback = {feedback}/>  )
            }
            </ul>
        </div>
    )
}

export default ListGroup
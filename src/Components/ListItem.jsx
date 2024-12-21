import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const ListItem = ({feedback}) => {
    
const {dispatch} = useContext(FeedbackContext)

const handleRemove = (id) =>{
    dispatch ({
        type : "REMOVE_FEEDBACK",
        payload : id
    })
}

const handleEdit =(feedback) =>{
    dispatch({
        type: "EDIT_FEEDBACK",
        payload : feedback
    })
}

    return (
        <li className='border-b border-black'>
            <h1 className='font-semibold text-lg tracking-wider'>Rating : {feedback.rating}</h1>
            <h2 className='font-bold text-xl tracking-wide'>Review : {feedback.review} </h2>
            <span className='flex justify-end mb-2'>
                <button className='bg-cyan-900 hover:bg-cyan-700 text-white px-4 py-1 rounded-sm mx-2' onClick={()=>handleEdit(feedback)} >Edit</button>
                <button className='bg-teal-600 hover:bg-teal-800 text-white px-4 py-1 rounded-sm' onClick={()=> handleRemove(feedback.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem
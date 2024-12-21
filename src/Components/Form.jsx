import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const Form = () => {

    const { dispatch, edit } = useContext(FeedbackContext)


    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        !edit.isEdit ?  dispatch({
            type: "ADD_FEEDBACK",
            payload: { id: crypto.randomUUID(), rating, review }
        }): 
        dispatch({
            type: "UPDATE_FEEDBACK",
            payload: { id: edit.feedback.id, rating, review }
        })
        setRating(1)
        setReview("")
    }

    useEffect(() => {
        setRating(edit.feedback.rating)
        setReview(edit.feedback.review)
    }, [edit])


    return (
        <div>
            <form className='w-full flex flex-col' onSubmit={(e) => handleSubmit(e)} >
                <select className='bg-[#FBF8EF] mx-5 p-3 mt-6  font-semibold text-xl outline-none' onChange={(e) => setRating(e.target.value)} value={rating} required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className='p-3 mx-5 mt-3 placeholder-black-400 text-lg font-semibold outline-none placeholder:text-md placeholder:font-normal' type="text" placeholder='Enter Review here...' required onChange={(e) => setReview(e.target.value)} value={review} />
                <div className='mx-5 mt-5 flex justify-center'>
                    <button className='text-white bg-orange-700 inline-block px-5 py-2 rounded-lg hover:bg-orange-600'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
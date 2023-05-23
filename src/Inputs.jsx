import { useState } from "react";

function Input({ addThisStudent }) {


    const [initial, setInitial] = useState({
        firstname: '',
        lastname: '',
        batchname: ''
    })

    const handleFirst = (text) => {
        setInitial((prevState) => ({
            ...prevState,
            firstname: text.target.value
        }))
    }

    const handleLast = (text) => {
        setInitial((prevState) => ({
            ...prevState,
            lastname: text.target.value
        }))
    }

    const handleBatch = (text) => {
        setInitial((prevState) => ({
            ...prevState,
            batchname: text.target.value
        }))
    }

    const addThis = () => {

        addThisStudent(initial)
    }

    return (
        <>
            <div className="col-md-9">
                <input type="text" className="form-control border-dark" placeholder="Enter your firstname" id="firstname" onChange={handleFirst} /><br />
                <input type="text" className="form-control border-dark" placeholder="Enter your lastname" id="lastname" onChange={handleLast} /><br />
                <input type="text" className="form-control border-dark" placeholder="Enter your batchname" id="batchname" onChange={handleBatch} />

            </div>
            <div className="col-md-3">
                <button class="btn btn-dark" onClick={addThis}>Submit</button>
            </div>
        </>
    )
}

export default Input
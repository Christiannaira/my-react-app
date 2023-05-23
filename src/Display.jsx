function Display({ firstname, lastname, batchname }) {
    return (
        <>
            <div className="card mt-5 p-5">
                <p>Firstname: {firstname}</p>
                <p>Lastname: {lastname}</p>
                <p>Batchname: {batchname}</p>
            </div>

        </>
    )
}

export default Display;
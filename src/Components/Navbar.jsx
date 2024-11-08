

const Navbar = ({ addEvent }) => {
    return (
        <div className="navbar">
            <h1>Event Timer</h1>
            <button className="navBtn" onClick={addEvent}>Add Event</button>
        </div>
    )
}

export default Navbar

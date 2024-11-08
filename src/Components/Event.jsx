import { useState } from 'react'

const Event = ({ data }) => {

    const [start, setStart] = useState(false);
    const [name, setName] = useState('');
    const [time, setTime] = useState(null);

    const handelTimer = () => {

        if (time > 0) {
            setStart(true);
            let rem = time;

            let timer = setInterval(() => {
                rem--;
                setTime(rem);
                if (rem == 0) {
                    clearInterval(timer);
                    alert(`${name} event has ended`);
                    setStart(false);
                    setName("");
                    setTime("");
                }
            }, 1000);
        }
    }

    return (
        <div className='event'>
            <h2>Event Number : {data}</h2>
            <div className='eventItems'>
                <div>
                    <label htmlFor="name">Event Name:</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time">Event Time:</label>
                    <input type="number" id='time' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button onClick={handelTimer}>Start</button>
            </div>
            {
                start && <div >
                    <hr />
                    <p className='eventText'><b>{name}</b> event ends in {time} seconds</p>
                </div>
            }
        </div>
    )
}

export default Event

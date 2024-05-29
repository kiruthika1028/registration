import React from 'react'

function Home({location}) {
  const { state } = location || {}; // Destructure state from location, or provide an empty object if location is undefined
const { name, startTime, endTime } = state || {};
console.log(name)
  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
    <div className="vh-10 d-flex justify-content-center align-items-center" style={{ background: '#f8f9fa' }}>
    <div className="text-center p-5" style={{ background: '#ffffff', borderRadius: '1rem' }}>
    <p className="lead">
          Welcome, {name}! Your schedule has been allocated for the trial room.
        </p>
        <p>
          Your time slot is booked.
        </p>
    </div>
  </div>
  </div>
  )
}

export default Home
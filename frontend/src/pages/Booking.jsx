import "../assets/css/booking.css"

const Booking = () => {
  return (
    <div className="booking-container">
      <h1 style={{ color: "blue" }}>TEST</h1>
      <h2 style={{ color: "blue" }}>Another TEST</h2>
      <form onSubmit={() => alert("Functionality to be added in a later update")}>
        <h3 style={{ color: "blue" }}>Test</h3>
        <label htmlFor="book" style={{color: "red"}}>Add your date</label>
        <input type="text" id="book" style={{ background: "blue" }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Booking
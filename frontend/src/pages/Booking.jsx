

const Booking = () => {
  return (
    <div style={{ color: "black" }}>
      <h1>TEST</h1>
      <form onSubmit={() => { alert("Feature to be added in a later update") }}>
          <label style={{ color: "blue" }}>
            Enter your reservation
            <input style={{ background: "black", color: "red" }} type="text" />
          </label>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default Booking
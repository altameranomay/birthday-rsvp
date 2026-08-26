const Welcome = () => {
  
  return (
    <div className="welcome-wrapper">
      <div className="balloon -top" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
      <div className="text-container">
        <h1 className="celebrant-name" data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Abraham's</h1>
        <h3 className="celebrant-age" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">70th</h3>
        <h5 className="birthday-title" data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Birthday Party</h5>
        <h5 className="birthday-place" data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">D'ONE RESORT</h5>
        <p className="birthday-address" data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">MAHARLIKA RD. BRGY. SAN SALVADOR, <br/>BARAS RIZAL</p>
      </div>

      <img data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" alt="birthday celebrant" src={process.env.PUBLIC_URL + '/images/abraham-wife.png'} className="celebrant-img"/>

      <div className="date-time-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <p className="day">FRIDAY</p>
        <p className="month-date-text">
          <span className="month">OCTOBER</span>
          <span className="date">09</span>
        </p>
        <p className="time"> 04:00PM</p>
      </div>

      <div className="text-container">
        <p className="birthday-subtitle" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">WE RESERVED <span>2</span> SEATS FOR YOU.</p>
      </div>

      {/* <div className="balloon -bottom"/> */}
    </div>
  )
}

export default Welcome
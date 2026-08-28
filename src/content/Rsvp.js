const Rsvp = () => {
  
  return (
    <div className="rsvp-wrapper">
      <img data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="teddy-moon" alt="teddy bear in the moon" src={process.env.PUBLIC_URL + '/images/cheers.png'}/>
      <p className="txt" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Hello</p>
      <h1 className="txt-rsvp" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Friends</h1>
      <h1 className="txt-big" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">RS<br/>VP</h1>
      <p className="txt-description" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">before September 30</p> 
      <p className="description" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Please click the rsvp button and kindly let us know if you can make it</p> 
      <a className="lnk-rsvp" href="https://docs.google.com/forms/d/e/1FAIpQLSfvRnp3B1rXWxO8xOkREo5yLGK7vKAGS8LJ5vscJ4grkILfCw/viewform?usp=publish-editor" target="_blank" rel="noreferrer" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">RSVP</a>


    </div>
  )
}

export default Rsvp
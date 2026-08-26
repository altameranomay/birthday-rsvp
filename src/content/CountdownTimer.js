import Countdown from "./Countdown";

const CountdownTimer = () => {
  return (
    <div className="countdown-wrapper" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <Countdown targetDate="2026-10-01T16:00:00+08:00"/>
    </div>
  )
}
  
  export default CountdownTimer
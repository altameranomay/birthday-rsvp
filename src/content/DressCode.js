const DressCode = () => {
  
  return (
    <div className="dresscode-wrapper">
      <h1 className="title" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >Dresscode</h1>
      <h2 className="sub-title" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >note</h2>

      <div className="attire-container">
        <img data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="casual-attire" alt="men smart casual" src={process.env.PUBLIC_URL + '/images/men.png'}/>
        <img data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="casual-attire women" alt="women smart casual" src={process.env.PUBLIC_URL + '/images/women.png'}/>
      </div>
      
      <p className="text"> Anything that makes you feel polished comfortable, look good, feel confident, keep it effortless ♡ </p>
    </div>
  )
}

export default DressCode
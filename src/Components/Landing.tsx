import heroImage from '../assets/images/heroImage.jpg'

function Landing(): JSX.Element {
  return (
    <div>
      <div>
        <h2>SINC Partners is a service incubation company </h2>
        <p>Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</p>
      </div>
      <div>
        <img src={heroImage} alt="photo of people clapping " />
        <img src="" alt="slider icon" />
      </div>
    </div>
  )
}

export default Landing

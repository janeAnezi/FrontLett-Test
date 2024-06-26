import heroImage from '../assets/images/heroImage.jpg'

function Landing(): JSX.Element {
  return (
    <div className='flex w-full pl-20'>
      <div className='pt-20 pl-10 mr-20'>
        <h2 className='text-3xl font-semibold pb-3'>SINC Partners is a service <br />incubation company </h2>
        <p className='w-96 text-lg mb-10'>Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</p>
        <button className=" bg-secondary text-white px-3 rounded-3xl py-2 font-semibold">SINC With Us</button>
      </div>
      <div>
        <img src={heroImage} alt="photo of people clapping " />
        <img src="" alt="slider icon" />
      </div>
    </div>
  )
}

export default Landing

import rightarrow from "../assets/icons/down-right-1.jpg"

function Network(): JSX.Element {
  return (
    <div className="bg-slate-50 ">
        <div className="text-center">
            <h1 className="font-bold text-4xl mb-20">Network of builders helping <br /> startup scale</h1>
            <div className="flex mx-20 pb-20">
                <div className="bg-white mr-4 p-10 rounded-2xl text-left">
                    <p className="font-semibold">Work with Service Incubators to expedite your time-to-market</p>
                    <p className="">Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building</p>
                    <p className="font-semibold py-3">For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
                    <p className="flex"><a href="http://" className="underline font-semibold mr-2">Learn More</a> <img className="pt-1" src={rightarrow} alt="right arrow" /></p>
                </div>
                <div className="bg-white ml-4 p-10 rounded-2xl text-left">
                    <p className="font-semibold pb-3">Access funding after your mvp is validated</p>
                    <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.</p>
                    <p className="font-semibold py-3">Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p>
                    <p className="flex"><a href="http://" className="underline font-semibold mr-2">Learn More</a> <img className="pt-1" src={rightarrow} alt="right arrow" /></p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Network

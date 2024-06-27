

function Focus(): JSX.Element {
  return (
    <div className="bg-slate-50 text-center pb-20">
      <h3 className="font-bold text-4xl pb-3">Our Area of Focus</h3>
      <p className="w-2/4 m-auto">In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>

      <div className="flex mt-10 mx-20">
        <div className="p-3 text-left bg-secondary text-white">
            <p className="pb-5">01</p>
            <p>Business Support & Incubation</p>
        </div>
        <div className="p-3 text-left bg-orange-500 text-white">
            <p className="pb-5">02</p>
            <p>On-Demand & As-A-Service</p>
        </div>
        <div className="p-3 text-left bg-pink-400 text-white">
            <p className="pb-5">03</p>
            <p>Marketplace & Crowdsourcing</p>
        </div>
        <div className="p-3 text-left bg-primary text-white">
            <p className="pb-5">04</p>
            <p>Aggregation & Shared Economy</p>
        </div>
        <div className="p-3 text-left bg-pink-400 text-white">
            <p className="pb-5">05</p>
            <p>Decentralized Economy &<br /> Digital Assets</p>
        </div>
      </div>
    </div>
  )
}

export default Focus

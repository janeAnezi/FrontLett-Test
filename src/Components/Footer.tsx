

function Footer() {
  return (
    <div className="bg-secondary text-white pb-20">
        <div className="mx-20">
            <h3 className="font-bold text-4xl pb-3 pt-10">Newsletter</h3>
            <p className="text-sm ">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>

            <div className="border inline-block rounded-full pl-2 mt-10">
                <input className="bg-transparent outline-none pl-5 pr-4 py-2 mr-10" type="email" placeholder="Enter Your Email Address"/>
                <input className="bg-white px-4 py-2 text-slate-900 rounded-full" type="button" value="subscribe" />
            </div>
        </div>
    </div>
  )
}

export default Footer

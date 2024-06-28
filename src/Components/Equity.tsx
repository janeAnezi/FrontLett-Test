import Card from "./Card"
import rightarrow from "../assets/icons/down-right-1.jpg"
import eq1 from '../assets/images/eq1.png'
import eq2 from '../assets/images/eq2.jpg'
import eq3 from '../assets/images/eq3.jpg'
import eq4 from '../assets/images/eq4.jpg'

function Equity() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-4xl pb-3 pt-10">Equity jobs</h3>
        <p className="w-3/4 m-auto">See companies and startups offering equity or a mix of cash and equity for very important position in their company.</p>
  
        <div className="flex mt-10 mx-20 text-left"> 
            <Card title="">
                <img src={eq1} alt="company logo" />
                <p className=" py-4">This company is a SAAS Startup that builds AI copy generator...</p>
                <p className="font-semibold mb-2">Chief Executive Officer</p>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">LOCATION</p>
                        <p>Abuja, Nigeria</p>
                    </div>
                    <div>
                        <p className="text-slate-500">INDUSTRY</p>
                        <p>On-Demand Pring</p>
                    </div>
                </div>
                <div className="flex justify-between my-4 text-sm">
                    <div>
                        <p className="text-slate-500">EQUITY</p>
                        <p>12%</p>
                    </div>
                    <div>
                        <p className="text-slate-500">STIPEND</p>
                        <p>NGN 200,000/mth</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">DEADLINE</p>
                        <p>24th, January 2024</p>
                    </div>
                    <div>
                        <p className="text-slate-500">ROLE TYPE</p>
                        <p>Full-time</p>
                    </div>
                </div>
                <button className=" bg-secondary text-white px-3 rounded-3xl py-2 font-semibold mt-6 mb-4 text-sm">View Details</button>
            </Card>
            <Card title="">
                <img src={eq2} alt="company logo" />
                <p className=" py-4">This company is a SAAS Startup that builds AI copy generator...</p>
                <p className="font-semibold mb-2">UX Strategist</p>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">LOCATION</p>
                        <p>Abuja, Nigeria</p>
                    </div>
                    <div>
                        <p className="text-slate-500">INDUSTRY</p>
                        <p>E-commerce</p>
                    </div>
                </div>
                <div className="flex justify-between my-4 text-sm">
                    <div>
                        <p className="text-slate-500">EQUITY</p>
                        <p>12%</p>
                    </div>
                    <div>
                        <p className="text-slate-500">STIPEND</p>
                        <p>NGN 200,000/mth</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">DEADLINE</p>
                        <p>24th, January 2024</p>
                    </div>
                    <div>
                        <p className="text-slate-500">ROLE TYPE</p>
                        <p>Full-time</p>
                    </div>
                </div>
                <button className=" bg-secondary text-white px-3 rounded-3xl py-2 font-semibold mt-6 mb-4 text-sm">View Details</button>
            </Card>
            <Card title="">
                <img src={eq3} alt="company logo" />
                <p className=" py-4">This company is a SAAS Startup that builds AI copy generator...</p>
                <p className="font-semibold mb-2">CTO & Head of innovations</p>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">LOCATION</p>
                        <p>Abuja, Nigeria</p>
                    </div>
                    <div>
                        <p className="text-slate-500">INDUSTRY</p>
                        <p>Fintech</p>
                    </div>
                </div>
                <div className="flex justify-between my-4 text-sm">
                    <div>
                        <p className="text-slate-500">EQUITY</p>
                        <p>12%</p>
                    </div>
                    <div>
                        <p className="text-slate-500">STIPEND</p>
                        <p>NGN 200,000/mth</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">DEADLINE</p>
                        <p>24th, January 2024</p>
                    </div>
                    <div>
                        <p className="text-slate-500">ROLE TYPE</p>
                        <p>Full-time</p>
                    </div>
                </div>
                <button className=" bg-secondary text-white px-3 rounded-3xl py-2 font-semibold mt-6 mb-4 text-sm">View Details</button>
            </Card>
            <Card title="">
                <img src={eq4} alt="company logo" />
                <p className=" py-4">This company is a SAAS Startup that builds AI copy generator...</p>
                <p className="font-semibold mb-2">Backend Developer</p>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">LOCATION</p>
                        <p>Abuja, Nigeria</p>
                    </div>
                    <div>
                        <p className="text-slate-500">INDUSTRY</p>
                        <p>Transportation</p>
                    </div>
                </div>
                <div className="flex justify-between my-4 text-sm">
                    <div>
                        <p className="text-slate-500">EQUITY</p>
                        <p>12%</p>
                    </div>
                    <div>
                        <p className="text-slate-500">STIPEND</p>
                        <p>NGN 200,000/mth</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="text-slate-500">DEADLINE</p>
                        <p>24th, January 2024</p>
                    </div>
                    <div>
                        <p className="text-slate-500">ROLE TYPE</p>
                        <p>Full-time</p>
                    </div>
                </div>
                <button className=" bg-secondary text-white px-3 rounded-3xl py-2 font-semibold mt-6 mb-4 text-sm">View Details</button>
            </Card>
            
        </div>
        <p className="flex hover:text-primary mt-10 justify-center items-center"><a href="http://" className="underline font-semibold mr-2 ">See More Equity Jobs</a> <img className="pt-1" src={rightarrow} alt="right arrow" /></p>
    </div>
  )
}

export default Equity

import ft1 from "../assets/images/ft1.jpg"
import ftlogo from "../assets/images/ft-lgo.jpg"

function Feature() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-xl pb-10">As Featured In</h3>

        <div className="flex overflow-x-auto space-x-2 hide-scrollbar">
            <div className="flex">
                <img src={ft1} alt="feature image" />
                <div className="text-left px-10 pt-5">
                    <img className="mb-3" src={ftlogo} alt="feature logo" />
                    <p className="font-semibold text-lg w-64 mb-3">SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p className="w-60 mb-10">SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ...</p>
                    <p>REPORTED BY: <br /> Rema Viel</p>
                </div>
            </div>
        </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}

export default Feature

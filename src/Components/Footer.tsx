import FooterCard from "./FooterCard"
import footersc from "../assets/images/footersc.png"
import whatsapp from "../assets/images/whatsapp.png"
import footersc2 from "../assets/images/footersc2.png"

function Footer() {
  return (
    <div className="bg-slate-800 text-white pb-20">
        <div className="mx-10">
          <h3 className="font-bold text-4xl pb-3 pt-10">Newsletter</h3>
          <p className="text-sm ">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>

          <div className="border inline-block rounded-full pl-2 mt-10">
            <input className="bg-transparent outline-none pl-5 pr-4 py-2 mr-10" type="email" placeholder="Enter Your Email Address"/>
            <input className="bg-white px-4 py-2 text-slate-900 rounded-full" type="button" value="subscribe" />
          </div>
          <div className="flex mt-10 py-4 border-t border-b">
            <FooterCard title="">
              <p>
                <span className="text-4xl tracking-widest border">SINC</span><span className=" block">PARTNERS</span> 
              </p>
              <p className="py-4 text-sm w-32">SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <div className="border-l">
              <FooterCard title="">
                <p className="font-semibold">Platforms</p>
                <ul className="py-4 text-sm">
                  <li>Kofoundme</li>
                  <li>Kofoundme</li>
                  <li>Kofoundme</li>
                </ul> 
                <div className="flex mt-20">
                  <div>
                    <img src={footersc} alt="footer sticker" />
                    <p className="text-sm">Trusted Buisness</p>
                  </div>
                  <div>
                    <img className="w-9 h-9 mt-8 ml-5" src={whatsapp} alt="whatsapp icon" />
                    <p className="text-sm">Chat with us</p>
                  </div>
                  
                </div>
                
              </FooterCard>
            </div>
            
          </div>
          <div className="flex justify-between mt-6">
            <p className="text-sm mt-4">Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
            <div className="flex">
              <img className="w-24 h-16 mr-3" src={footersc2} alt="company logo" />
              <p className="text-sm mt-1">We are a business built on the <br /> foundation of Christian values and belief</p>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        
    </div>
  )
}

export default Footer

import { useState } from 'react';
import Card from "./Card";
import rightarrow from "../assets/icons/down-right-1.jpg";
import ent1 from '../assets/images/ent1.jpg';
import ent2 from '../assets/images/ent2.jpg';
import ent3 from '../assets/images/ent3.jpg';
import ent4 from '../assets/images/ent4.jpg';
import arrowright from '../assets/images/arrowright.jpg';
import arrowleft from '../assets/images/arrowleft.jpg';

function Enterpreneur() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: ent1,
      title: "Application and Selection",
      description: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application."
    },
    {
      image: ent2,
      title: "Alignment Meeting and Proposal Submission",
      description: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal."
    },
    {
      image: ent3,
      title: "Negotiation and Agreemen",
      description: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement."
    },
    {
      image: ent4,
      title: "Alignment Meeting and Proposal Submission",
      description: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture. terms are agreed upon, we'll draft a formal agreement of your EIR engagement"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 3));
  };

  return (
    <div className="bg-slate-50 text-center pb-20">
      <h3 className="font-bold text-4xl pb-4 pt-10 w-2/4 m-auto">
        Join Our Entrepreneur In Residence (EIR) Program
      </h3>
      <p className="w-2/4 m-auto">
        Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
      </p>

      <div className="relative flex mt-10 text-left pb-10 ml-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)`, width: `${cards.length * 33.333}%` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-1/3 px-2">
              <Card title=''>
                <img src={card.image} alt="gallery" />
                <p className="font-bold py-4 text-xl">{card.title}</p>
                <p className='text-sm'>{card.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <p className="flex hover:text-primary mt-6 justify-center items-center">
        <a href="http://" className="underline font-semibold mr-2 ">Build Your Dream</a>
        <img className="pt-1" src={rightarrow} alt="right arrow" />
      </p>

      <div className="mt-10">
        <button onClick={handlePrev} className="border rounded-full bg-white p-2 mr-6">
          <img src={arrowleft} alt="left arrow" />
        </button>
        <button onClick={handleNext} className="border rounded-full bg-white p-2">
          <img src={arrowright} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default Enterpreneur;

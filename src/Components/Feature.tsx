import ft1 from "../assets/images/ft1.jpg";
import ft2 from "../assets/images/ft2.jpg";
import ftlogo from "../assets/images/ft-lgo.jpg";

function Feature() {
    const cards = [
        {
          image: ft1,
          title: "SINC Partners invests over 200 million naira in 5 startups",
          description: "SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in ...",
          reporter: "Rema Viel"
        },
        {
          image: ft2,
          title: "Another investment story",
          description: "Another investment story with different details. Another investment story with different details. Another investment story with different details ...",
          reporter: "Jane Doe"
        },
        {
          image: ft1,
          title: "SINC Partners invests over 200 million naira in 5 startups",
          description: "SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in ...",
          reporter: "Rema Viel"
        }
      ];
  return (
    <div className="bg-slate-50 text-center pb-20">
      <h3 className="font-bold text-xl pb-10">As Featured In</h3>

      <div className="flex overflow-x-auto space-x-4 hide-scrollbar px-4">
      {cards.map((card, index) => (
          <div key={index} className="flex flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={card.image} alt="feature image" className="w-2/3 object-cover" />
            <div className="text-left px-6 py-4 w-1/3">
              <img className="mb-3" src={ftlogo} alt="feature logo" />
              <p className="w-60 font-semibold text-lg mb-3">{card.title}</p>
              <p className="w-60 mb-10">{card.description}</p>
              <p>REPORTED BY: <br /> <br /> {card.reporter}</p>
            </div>
          </div>
        ))}
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
  );
}

export default Feature;

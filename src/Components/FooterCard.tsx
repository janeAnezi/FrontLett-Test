// import sinclogo from '../assets/images/sinclogo_black.jpg'

// function FooterCard() {
//   return (
//     <div>
//       <img src={sinclogo} alt="SINC logo" />
//       <p>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
//     </div>
//   )
// }

// export default FooterCard

import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, children }) => {
  return (
    <div className=" p-4 mr-4">
        {image ? (
        <img src={image} alt={title} className="w-full h-auto mb-2 rounded" />
      ) : (
        <h5 className="text-xl font-medium mb-2">{title}</h5>
      )}
      {children}
    </div>
  );
};

export default Card;


import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mr-4">
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

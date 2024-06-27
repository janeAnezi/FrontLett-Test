import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mr-4">
      <h5 className="text-xl font-medium mb-2">{title}</h5>
      {children}
    </div>
  );
};

export default Card;

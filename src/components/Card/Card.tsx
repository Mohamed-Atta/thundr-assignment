import './Card.css';

export interface CardProps {
  title: string;
  description: string;
}

const Card = ({title, description}: CardProps) => {
  return (
    <div className="app-card">
      <h1 className="app-card-title">{title}</h1>
      <p className="app-card-description">{description}</p>
    </div>
  );
};

export default Card;

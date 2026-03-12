import type { ReactNode } from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description?: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="service-card">
            <div className="service-icon-wrapper">
                {icon}
            </div>
            <h3 className="service-title">{title}</h3>
            {description && <p className="service-description">{description}</p>}
        </div>
    );
};

export default ServiceCard;

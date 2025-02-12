import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Properties/PropertyGrid.css';
import StarRating from "../StarRating";

const PropertyCard = ({ property }) => {
    return (
        <Link to={`/property/${property.id}`} className="property-card-link">
            <div className="property-card">
                <img src={property.mediaUrl} alt={property.type} className="property-image" />
                <div className="property-info">
                    <h3 className="property-name">{property.type}</h3>
                    <div className="property-location">
                        <span>{property.lga}, {property.state}</span>
                    </div>
                    <div className="property-details">
                        <div>{property.noOfApartments} apartments</div>
                    </div>
                    <StarRating rating={property.averageRating} />
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;

import React from 'react'
import{
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from 'react-icons/fa';

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="service"/>,
        title: 'Free Shipping',
        description: 'Free shipping on all orders ',
    },
    {
        id: 2,
        icon: <FaCheckCircle className='service'/>,
        title: 'Safe Money',
        description: '30 Days Money back guarantee',
    },
    {
        id: 3,
        icon: <FaWallet className="service"/>,
        title: ' All Secure Payment',
        description: 'Secure payment with SSL encryption',
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="service"/>,
        title: 'Online Support 24/7',
        description: 'Technical support 24/7',
    }
];

const Services = () => {
  return (
   <div>
  <div className="service-container">
    <div className="service-grid">
      {ServiceData.map((data, index) => (
        <div className="service-item" key={index}>
          <div className="service-icon">{data.icon}</div>
          <div className="service-text">
            <h1 className="service-title">{data.title}</h1>
            <h1 className="service-description">{data.description}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Services;
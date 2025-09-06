import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Personalized Profile Assessment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: "Applying to Institutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Admission Letter Acceptance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 15l4-4 4 4"></path>
          <path d="M12 12V8"></path>
        </svg>
      ),
    },
    {
      title: "Education Loan Guidance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 1v22"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Visa Preparation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="2" width="18" height="20" rx="2"></rect>
          <path d="M7 6h10"></path>
          <path d="M7 10h10"></path>
          <circle cx="12" cy="16" r="2"></circle>
        </svg>
      ),
    },
    {
      title: "Pre-departure Briefing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17.5 19.5L9.5 12l8-7.5"></path>
          <path d="M2 12h7.5"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-text">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

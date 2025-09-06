import React from "react";
import { useParams, Link } from "react-router-dom";
import countryData from "./CountryDetail.js";
import "./CountryDetail.css";

export default function CountryDetail() {
  const { slug } = useParams();
  const data = countryData[slug];

  if (!data) {
    return (
      <div className="country-detail-container">
        <h2>Country not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="country-detail-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>{data?.title}</h1>
        <p className="hero-sub">{data?.hero}</p>
      </div>

      {/* Overview */}
      <section className="section overview">
        <h2>Overview</h2>
        <p>{data?.overview}</p>
        <p>{data?.intro}</p>
      </section>

      {/* Highlights */}
      <section className="section">
        <h2>Highlights</h2>
        <ul>
          {data?.highlights?.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="section">
        <h2>Benefits</h2>
        <ul>
          {data?.benefits?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Cost of Study */}
      <section className="section">
        <h2>Cost of Study</h2>
        <p>{data?.costOfStudy}</p>
      </section>

      {/* Visa Info */}
      <section className="section">
        <h2>Visa Info</h2>
        <p>{data?.visa}</p>
      </section>

      {/* Scholarships */}
      <section className="section">
        <h2>Scholarships</h2>
        <ul>
          {data?.scholarships?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Intakes */}
      <section className="section">
        <h2>Intakes</h2>
        <ul>
          {data?.intakes?.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </section>

      {/* Top Courses */}
      <section className="section">
        <h2>Top Courses</h2>
        <ul>
          {data?.topCourses?.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Top Universities */}
      <section className="section">
        <h2>Top Universities</h2>
        <ul>
          {data?.topUniversities?.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </section>

      {/* Job Prospects */}
      <section className="section">
        <h2>Job Prospects</h2>
        <p>{data?.jobProspects}</p>
      </section>

      {/* Cost of Living */}
      <section className="section">
        <h2>Cost of Living</h2>
        <p>{data?.costOfLiving}</p>
      </section>

      {/* FAQs */}
      {data?.faqs?.length > 0 && (
        <section className="section">
          <h2>FAQs</h2>
          <div className="faqs">
            {data.faqs.map((f, i) => (
              <div key={i} className="faq">
                <strong>{f.q}</strong>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back Button */}
      <div className="actions">
        <Link className="back-btn" to="/">
          ← Back
        </Link>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { FaRegSquare, FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const getJobs = async () => {
    try {
      const request = await fetch(url).then();
      const response = await request.json();
      setJobs(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <h1>...Loading</h1>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {/* Btn Container */}
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}>
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {/* job Desc */}
          {duties.map((duty, index) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p key={index}>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;

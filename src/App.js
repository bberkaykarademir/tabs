import React, { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="content">
      <h1>Experience</h1>
      <div className="in">
        <div className="buttonsec">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="info">
          <h3>{title}</h3>
          <p className="date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <p className="duty">+{duty}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

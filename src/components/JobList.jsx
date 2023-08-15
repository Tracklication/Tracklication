import React, {useState} from 'react';
import JobCard from './JobCard';
import JobForm from './JobForm';

function JobList() {
  const [showForm, setShowForm] = useState(false);
  function toggleForm() {
    setShowForm(!showForm);
  }
  return (
    <div className='job-list'>
      <button className='btn' onClick={toggleForm}>
        Add New Job
      </button>
      {showForm && <JobForm toggleForm={toggleForm} type='Add New' />}
      <JobCard />
    </div>
  );
}

export default JobList;

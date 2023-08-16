import React, { useState } from 'react';
import Note from './Note';
import JobForm from './JobForm';
import axios from 'axios';
const dummyData = {
  name: 'Google',
  salary: 200000,
  position: 'Senior Software Developer',
  contact: {
    name: 'John Smith',
    email: 'jsmith@google.com',
    phone: '(123) 456 7890',
    title: 'Hiring Manager',
  },
  location: {
    headquarters: 'Mountain View, California',
    type: 'remote',
    address: 'Mountain View, California',
  },
  lastHeard: false,
  note: 'The company is very dope',
};

function JobCard({ jobData, setAllList, userID, deleteJob }) {
  const [dropdown, setDropdown] = useState({});
  const [noteOpen, setNoteOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [job, setJob] = useState(jobData);

  const typeArr = ['', 'remote', 'onsite', 'hybrid'];
  function formatSalary(salary) {
    const newSalary = [];
    const salArr = salary.split('').reverse();
    for (let i = 0; i < salArr.length; i++) {
      if (!(i % 3) && i !== 0) newSalary.push(',');
      newSalary.push(salArr[i]);
    }
    newSalary.push('$');
    return newSalary.reverse().join('');
  }

  function toggleNote(bol) {
    setNoteOpen(bol);
    return;
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  async function updateJob(updatedJob) {
    console.log(updatedJob);
    setJob({
      ...job,
      name: updatedJob.company,
      position: updatedJob.position,
      salary: updatedJob.salary,
    });
    const response = await axios.patch(
      `http://localhost:3000/${updatedJob.id}`,
      updatedJob
    );
    if (response.status === 201) return response.data;
  }

  function deleteThisJob() {
    axios.delete(`http://localhost:3000/${job.id}`);
    console.log(job, 'DELETING THIS JOB');
    deleteJob(job.id);
  }
  return (
    <div className='job-card'>
      <div className='job-card-header'>
        <p>
          <b>Company:</b> {job.company_name}
        </p>
        <p>
          <b>Salary:</b> {formatSalary(job.salary.toString())}
        </p>
        <p>
          <b>Location:</b> {job.address} ({typeArr[job.location]})
        </p>
        <button onClick={deleteThisJob}>Delete</button>
      </div>
      <div className='job-card-details'>
        <h4>Position: </h4> <p>{job.position}</p>
        <h4>Date:</h4> <p>{new Date().toDateString()}</p>
        <button className='btn' onClick={toggleForm}>
          Update
        </button>
        {showForm && (
          <JobForm
            type='Update'
            userID={userID}
            job={job}
            toggleForm={toggleForm}
            submit={(updatedJob) => updateJob(updatedJob)}
            updateState={(updatedJob) => setJob(updatedJob)}
          />
        )}
        <h4>Contact:</h4> <p>{job.contact}</p>
        <h4>Last Heard:</h4> <p>{job.last_heard || 'no contact'}</p>
        <button
          className='btn'
          onClick={() => {
            noteOpen ? setNoteOpen(false) : setNoteOpen(true);
          }}
        >
          Notes
        </button>
      </div>
      <Note noteOpen={noteOpen} toggleNote={toggleNote} notes={job.notes} />
    </div>
  );
}

export default JobCard;

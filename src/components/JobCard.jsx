import React, {useState} from 'react';
import Note from './Note';
import JobForm from './JobForm';
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
};

function JobCard(props) {
  const [dropdown, setDropdown] = useState({});
  const [noteOpen, setNoteOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [job, setJob] = useState(dummyData);

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

  function updateJob(updatedJob) {
    console.log(updatedJob);
    setJob({
      ...job,
      name: updatedJob.company,
      position: updatedJob.position,
      salary: updatedJob.salary,
    });
  }
  return (
    <div className='job-card'>
      <div className='job-card-header'>
        <p>
          <b>Company:</b> {job.name}
        </p>
        <p>
          <b>Salary:</b> {formatSalary(job.salary.toString())}
        </p>
        <p>
          <b>Location:</b> {job.location.address} ({job.location.type})
        </p>
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
            job={job}
            toggleForm={toggleForm}
            submit={(updatedJob) => updateJob(updatedJob)}
          />
        )}
        <h4>Contact:</h4> <p>{job.contact.name}</p>
        <h4>Last Heard:</h4> <p>{job.lastHeard || 'no contact'}</p>
        <button
          className='btn'
          onClick={() => {
            noteOpen ? setNoteOpen(false) : setNoteOpen(true);
          }}
        >
          Notes
        </button>
      </div>
      <Note noteOpen={noteOpen} toggleNote={toggleNote} />
    </div>
  );
}

export default JobCard;

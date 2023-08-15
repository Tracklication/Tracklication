import React from 'react';

function JobForm({toggleForm, type, job, submit}) {
  function submitForm(e) {
    e.preventDefault();

    const job = {
      company: e.target.company.value,
      salary: Number(e.target.salary.value),
      location: e.target.location.value,
      contact: e.target.contact.value,
    };

    submit(job);
    toggleForm();
  }
  return (
    <div className='job-form-modal'>
      <div className='job-form'>
        <h2>{type + ' Job'}</h2>
        <form className='job-form-form' onSubmit={submitForm}>
          <input
            id='company'
            placeholder='Company...'
            defaultValue={job && job.name}
          />
          <input
            id='salary'
            placeholder='Salary...'
            defaultValue={job && job.salary}
          />
          <input
            id='position'
            placeholder='Position...'
            defaultValue={job && job.position}
          />
          <h4>Location</h4>
          <input
            id='headquarters'
            placeholder='HQ...'
            defaultValue={job && job.location.headquarters}
          />
          <input
            id='address'
            placeholder='Address...'
            defaultValue={job && job.location.address}
          />
          <div className='job-form-radio'>
            <input
              type='radio'
              id='remote'
              name='type'
              defaultChecked={job && job.location.type === 'remote'}
            />
            <label for='remote'>Remote</label>
            <input
              type='radio'
              id='hybrid'
              name='type'
              defaultChecked={job && job.location.type === 'hybrid'}
            />
            <label for='hybrid'>Hybrid</label>
            <input
              type='radio'
              id='office'
              name='type'
              defaultChecked={job && job.location.type === 'office'}
            />
            <label for='office'>Office</label>
          </div>
          <h4>Contact</h4>
          <input
            id='contactName'
            placeholder='Contact name...'
            defaultValue={job && job.contact.name}
          />
          <input
            id='contactTitle'
            placeholder='Contact title...'
            defaultValue={job && job.contact.title}
          />
          <input
            id='contactEmail'
            placeholder='Contact email...'
            defaultValue={job && job.contact.email}
          />
          <input
            id='contactPhone'
            placeholder='Contact phone number...'
            defaultValue={job && job.contact.phone}
          />
          <div className='job-form-buttons'>
            <button className='btn'>Submit</button>
            <button className='btn' onClick={toggleForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;

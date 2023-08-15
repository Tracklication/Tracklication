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
          <div className='job-form-row'>
            <p className='job-form-label'>Company: </p>
            <input
              className='job-form-input'
              id='company'
              placeholder='Company...'
              defaultValue={job && job.name}
            />
          </div>

          <div className='job-form-row'>
            <p className='job-form-label'>Salary: </p>
            <input
              className='job-form-input'
              id='salary'
              placeholder='Salary...'
              defaultValue={job && job.salary}
            />
          </div>
          <div className='job-form-row'>
            <p className='job-form-label'>Position: </p>
            <input
              className='job-form-input'
              id='position'
              placeholder='Position...'
              defaultValue={job && job.position}
            />
          </div>
          <h4>Location</h4>
          <div className='job-form-row'>
            <p className='job-form-label'>Headquarters: </p>
            <input
              className='job-form-input'
              id='headquarters'
              placeholder='HQ...'
              defaultValue={job && job.location.headquarters}
            />
          </div>
          <div className='job-form-row'>
            <p className='job-form-label'>Address:</p>
            <input
              className='job-form-input'
              id='address'
              placeholder='Address...'
              defaultValue={job && job.location.address}
            />
          </div>
          <div className='job-form-radio'>
            <div className='job-form-radio-option'>
              <input
                type='radio'
                id='remote'
                name='type'
                defaultChecked={job && job.location.type === 'remote'}
              />
              <label for='remote'>Remote</label>
            </div>
            <div className='job-form-radio-option'>
              <input
                type='radio'
                id='hybrid'
                name='type'
                defaultChecked={job && job.location.type === 'hybrid'}
              />
              <label for='hybrid'>Hybrid</label>
            </div>
            <div className='job-form-radio-option'>
              <input
                type='radio'
                id='office'
                name='type'
                defaultChecked={job && job.location.type === 'office'}
              />
              <label for='office'>Office</label>
            </div>
          </div>
          <h4>Contact</h4>
          <div className='job-form-row'>
            <p className='job-form-label'>Name:</p>
            <input
              className='job-form-input'
              id='contactName'
              placeholder='Contact name...'
              defaultValue={job && job.contact.name}
            />
          </div>
          <div className='job-form-row'>
            <p className='job-form-label'>Title:</p>
            <input
              className='job-form-input'
              id='contactTitle'
              placeholder='Contact title...'
              defaultValue={job && job.contact.title}
            />
          </div>
          <div className='job-form-row'>
            <p className='job-form-email'>Email:</p>
            <input
              className='job-form-input'
              id='contactEmail'
              placeholder='Contact email...'
              defaultValue={job && job.contact.email}
            />
          </div>
          <div className='job-form-row'>
            <p className='job-form-email'>Phone:</p>
            <input
              className='job-form-input'
              id='contactPhone'
              placeholder='Contact phone number...'
              defaultValue={job && job.contact.phone}
            />
          </div>
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

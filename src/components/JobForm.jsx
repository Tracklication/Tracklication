import React from 'react';

function JobForm({ toggleForm, type, job, submit, userID, updateState }) {
  async function submitForm(e) {
    e.preventDefault();
    const newJob = {
      user_id: userID,
      id: job?.id,
      company_name: e.target.company.value,
      salary: Number(e.target.salary.value),
      location: (e.target.location.value -= 0),
      address: e.target.address.value,
      contact: e.target.contactName.value,
      notes: e.target.note.value,
      status: e.target.status.value,
      last_heard: 'no contact',
      position: e.target.position.value,
    };
    // if (type === 'Update') newJob.id = job.id;
    const returnedJob = await submit(newJob);
    if (returnedJob) updateState(returnedJob);
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
              defaultValue={job && job.company_name}
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
            <p className='job-form-label'>Address:</p>
            <input
              className='job-form-input'
              id='address'
              placeholder='Address...'
              defaultValue={job && job.address}
            />
          </div>

          {/* <div className='job-form-radio'>
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
          </div> */}
          <div className='job-form-row'>
            <select
              name='location'
              id='select-location'
              defaultValue={job && job.location}
            >
              <option value='1'>Remote</option>
              <option value='2'>Onsite</option>
              <option value='3'>Hybrid</option>
            </select>
            <select name='status' id='select-status'>
              <option value='no updates'>no updates</option>
              <option value='heard from'>heard from</option>
              <option value='interview'>interview</option>
              <option value='offer'>offer</option>
            </select>
          </div>

          <h4>Contact</h4>
          <div className='job-form-row'>
            <p className='job-form-label'>Name:</p>
            <input
              className='job-form-input'
              id='contactName'
              placeholder='Contact name...'
              defaultValue={job && job.contact}
            />
          </div>

          <div className='job-form-row'>
            <p className='job-form-email'>Phone:</p>
            <input
              className='job-form-input'
              id='contact-phone'
              placeholder='Contact phone number...'
              defaultValue={job && job.phone}
            />
          </div>

          <div className='job-form-row'>
            <p className='job-form-email'>Note:</p>
            <textarea
              className='job-form-input'
              id='note'
              placeholder='notes'
              defaultValue={job && job.notes}
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

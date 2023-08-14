import React, {useState} from 'react';

const dummyData = {
  name: 'Google',
  salary: 2000000,
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

  return (
    <div className='job-card'>
      <div className='job-card-header'>
        <p>
          <b>Name:</b> {dummyData.name}
        </p>
        <p>
          <b>Salary:</b> {formatSalary(dummyData.salary.toString())}
        </p>
        <p>
          <b>Location:</b> {dummyData.location.address} (
          {dummyData.location.type})
        </p>
      </div>
      <div className='job-card-details'>
        <h4>Position: </h4> <p>{dummyData.position}</p>
        <h4>Date:</h4> <p>{new Date().toLocaleString()}</p>
        <button>Update</button>
        <h4>Contact:</h4> <p>{dummyData.contact.name}</p>
        <h4>Last Heard:</h4> <p>{dummyData.lastHeard || 'no contact'}</p>
        <button>Notes</button>
      </div>
    </div>
  );
}

export default JobCard;

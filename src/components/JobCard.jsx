import React, {useState} from 'react';

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
    type: 'Remote',
    address: 'Mountain View, California',
  },
  lastHeard: false,
};

function JobCard(props) {
  const [dropdown, setDropdown] = useState({});
  return (
    <div className='job-card'>
      <div className='job-card-header' style={{display: 'flex'}}>
        <p>Name: {dummyData.name}</p>
        <p>Salary: {dummyData.salary}</p>
        <p>
          Location: {dummyData.location.address} ({dummyData.location.type})
        </p>
      </div>
      <div className='job-card-details'></div>
    </div>
  );
}

export default JobCard;

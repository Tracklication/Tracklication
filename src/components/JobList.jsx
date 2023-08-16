import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobForm from './JobForm';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

function JobList(props) {
  const [showForm, setShowForm] = useState(false);
  const [allList, setAllList] = useState([]);
  const [userID, setUserID] = useState('');

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (user?.sub) setUserID(user.sub.split('').slice(-6, -1).join(''));
    async function getAllJob() {
      const response = await axios.get('http://localhost:3000/');
      const jobs = response.data;
      setAllList([...jobs]);
      // console.log('get all job', jobs);
    }
    getAllJob();
  }, [isAuthenticated]);

  console.log(allList);
  function toggleForm() {
    setShowForm(!showForm);
  }

  function deleteJob(id) {
    setAllList(allList.filter((job) => job.id != id));
  }

  const jobCardArray = allList.map((job, i) => {
    return (
      <JobCard
        key={uuid()}
        jobData={job}
        deleteJob={(id) => deleteJob(id)}
        setAllList={(data) => setAllList([...allList, data])}
      />
    );
  });

  console.log(jobCardArray);
  async function submit(job) {
    const response = await axios.post('http://localhost:3000/post', job);
    console.log(response, 'this is the response');
    if (response.status === 201) return response.data;
  }
  return (
    <div className='job-list'>
      <button className='btn' onClick={toggleForm}>
        Add New Job
      </button>
      {showForm && (
        <JobForm
          toggleForm={toggleForm}
          type='Add New'
          userID={userID}
          updateState={(data) => setAllList([...allList, data])}
          allList={allList}
          submit={(job) => submit(job)}
        />
      )}
      {jobCardArray}
    </div>
  );
}

export default JobList;

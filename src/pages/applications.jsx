import React, {useState , useEffect} from 'react'
import Navbar from '../components/navbar'
import { useLocation } from 'react-router-dom'
import { jobsDetails } from '../components/jobs'

const applications = () => {
  const location = useLocation();
  const {name} = location.state?.name;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [apply, setApply] = useState([]);
  
  const appliedJobs = jobsDetails.filter((job) => {
    return job.jobName == name
  })

  useEffect(() => {
    const allJobs = Object.keys(localStorage).flatMap((id) => {
      return JSON.parse(localStorage.getItem(id)) || [];
    });
    setApply(allJobs);
  }, [name]);


return (
    <div>
      <Navbar/>
      <div className='flex flex-row justify-center bg-gray-100 min-h-screen w-full py-4'>
        <div className='border-gray-200 flex-col bg-white border-2 h-auto gap-4 flex rounded-xl w-[80vw] p-3'>
          <h1 className='font-bold text-4xl pb-2'>Applications</h1>
            {apply.map((job) => (
              <div className='flex flex-col gap-3 border-2 border-gray-300 p-2 rounded-xl' key={job.id}>
                <div className='flex flex-row gap-3'>
                  <img className='h-[5vw] w-[5vw]' src={job.companySrc}></img>
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold'>{job.jobName}</h2>
                    <div className='flex flex-row gap-5  '>
                      <p className='text-gray-600   '>{job.location}</p>
                      <p className='text-gray-600 flex shrink-0  ' >{job.salaryRange}</p>
                    
                      <div className='flex flex-row justify-between w-[55vw] '>
                        <p className='text-gray-600 flex shrink-0  '>{job.jobType}</p>
                        <p className='flex text-center justify-center p-2 w-[10vw] bg-blue-500 text-white rounded-xl'>Applied</p>
                      </div>
                      

                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      
    </div>
  )
}

export default applications

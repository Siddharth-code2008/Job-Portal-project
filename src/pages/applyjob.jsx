import React, { useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { jobsDetails } from '../components/jobs'


const applyjob = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const {id} = useParams();

  const apply = jobsDetails.filter((job) => {
    return job.id == {id}.id
  })

  const[save,setSave] = useState("Save")

  const navigate = useNavigate()
  

  return (
    <div>
      <Navbar/>
      
      <div className='flex justify-center bg-gray-100 h-screen  w-full py-4'>
        {apply.map((details) =>(
          <div className='border-gray-200 flex-col bg-white border-2 flex rounded-2xl w-[80vw] p-3'key={details.id}>

            <div className='flex  flex-row  w-full'>
              <img className='h-[5vw] w-[5vw]' src={details.companySrc}></img>

              <div className='flex gap-3 ml-4 flex-col'>
                <h2 className='text-2xl font-semibold'>{details.jobName}</h2>
                <div className='flex flex-row gap-5'>
                  <p className='text-gray-600  '>{details.location}</p>
                  <p className='text-gray-600  ' >{details.salaryRange}</p>
                  <p className='flex justify-center items-center bg-green-500 text-ms w-[10vw] text-white rounded-xl py-1 '>{details.jobType}</p>
                </div>
              
              </div>
            
              <div className='flex ml-[35vw] flex-col gap-2'>
                <button onClick={()=>{localStorage.setItem(details.jobName , JSON.stringify(apply));
                  navigate("/applications",{state:{name: details.jobName}}) 
                }} className='flex justify-center cursor-pointer items-center bg-blue-500 text-ms text-white w-[10vw] px-4 py-2 rounded-xl'>Apply Now</button>
                <button  onClick={()=>{setSave("Saved");
                  localStorage.setItem(details.id , JSON.stringify(apply));
                  navigate("/savedjobs",{state:{id: details.id}}) 
                }}className='flex justify-center items-center bg-gray-400 cursor-pointer text-ms text-white py-1 px-4   rounded-xl '>{save}</button>
              </div>
            </div>
            
            <div className='p-3  mt-3 flex flex-col border-2 rounded-2xl border-gray-100'>
              <h2 className='font-semibold my-2  text-xl ' >Description </h2>
              <p className='text-gray-600'>{details.description} </p>
              <h2 className='font-semibold text-xl my-2 ' >Requirements </h2>
              <p className='text-gray-600 '>{details.requirements[0]}</p>
              <p className='text-gray-600 '>{details.requirements[1]}</p>
              <p className='text-gray-600 '>{details.requirements[2]}</p>
              <p className='text-gray-600 '>{details.requirements[3]}</p>
              <p className='text-gray-600 '>{details.requirements[4]}</p>
              <h2 className='font-semibold my-2 text-xl ' >Responsibilities </h2>
              <p className='text-gray-600 '>{details.responsibilities}</p>
              
            </div>


          </div>  
          ))}
        </div>    
      
      
    </div>
  )
}

export default applyjob

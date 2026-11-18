
import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'

const SavedJobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [saveditems, setSaveditems] = useState([]);

  useEffect(() => {
    const allJobs = Object.keys(localStorage).flatMap((id) => {
      return JSON.parse(localStorage.getItem(id)) || [];
    });

    setSaveditems(allJobs);
  }, []);

  const removeJob = (id) => {
    localStorage.removeItem(id);

    setSaveditems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <Navbar />

      <div className='flex flex-row justify-center bg-gray-100 min-h-screen w-full py-4'>
        <div className='border-gray-200 flex-col bg-white border-2 h-auto gap-4 flex rounded-xl w-[80vw] p-3'>

          <h1 className='font-bold text-3xl pb-3'>Saved Jobs</h1>

          {saveditems.length === 0 ? (
            <p className='text-gray-500'>No saved jobs yet.</p>
          ) : (

            saveditems.map((item) => (
              <div
                className='p-3 border-gray-300 flex  flex-row border-2 w-full rounded-xl'
                key={item.id}
              >

                <img
                  className='w-[4vw] h-[4vw]'
                  src={item.companySrc}
                  alt={item.company}
                />

                <div className='flex ml-4 flex-col'>

                  <div className='flex flex-row w-[70vw] justify-between'>

                    <h2 className='font-bold text-2xl'>
                      {item.jobName}
                    </h2>

                    <button
                      onClick={() => removeJob(item.id)}
                      className='flex justify-center items-center border-2 hover:scale-103 bg-blue-500 text-white cursor-pointer text-sm py-1 px-4 rounded-xl'
                    >
                      Remove
                    </button>

                  </div>

                  <p className='text-gray-600'>{item.company}</p>
                  <p className='text-gray-600'>{item.location}</p>

                  <div className='flex flex-row gap-5'>
                    <p className='text-gray-600'>{item.jobType}</p>
                    <p className='text-gray-600'>{item.salaryRange}</p>
                  </div>

                </div>

              </div>
            ))

          )}

        </div>
      </div>
    </div>
  )
}

export default SavedJobs

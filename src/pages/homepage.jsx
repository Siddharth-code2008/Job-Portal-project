import React from 'react'
import Navbar from '../components/navbar'
import Searchbar from '../others/searchbar'
import Categories from '../others/categories'
import JobFilter from '../others/jobFilter'
import Jobs from "../components/jobs";
import { useState } from 'react';

const homepage = () => {
    const[info,setInfo] = useState("Others")
    const[type,newType] = useState("Full-time")

  return (
    <div>

      <Navbar/>
      <Searchbar/>

      <h2 className='font-bold ml-4 py-4 text-3xl'> Select Your Category</h2>
      <div className='flex flex-row  h-auto w-full gap-10 p-4 justify-between'>
        <Categories onClick={() => {setInfo("Development")}}  para = "Development" src = "https://img.icons8.com/?size=100&id=1FdYDpqhZ86g&format=png&color=000000 "/>
        <Categories onClick={() => {setInfo("Design")}}  para = "Design" src = "https://img.icons8.com/?size=100&id=NqIEh7lsvFS8&format=png&color=000000"/>
        <Categories onClick={() => {setInfo("Marketing")}} para = "Marketing" src = "https://img.icons8.com/?size=100&id=MQiz3TkEm0h6&format=png&color=000000"/>
        <Categories onClick={() => {setInfo("Data & AI")}}  para = "Data & AI" src = "https://img.icons8.com/?size=100&id=ywKOa8qNRVyK&format=png&color=000000"/>
        <Categories onClick={() => {setInfo("Sales")}}  para = "Sales" src = "https://img.icons8.com/?size=100&id=VuY5fIs6FPtt&format=png&color=000000"/>
        <Categories onClick={() => {setInfo("Others")}}  para = "Others" src = "https://img.icons8.com/?size=100&id=HxVfMN75sZaC&format=png&color=000000"/>
      </div>

      <div className='flex flex-col px-4  bg-gray-100  h-auto w-auto rounded py-4 '>
        <h2 className='font-bold py-3  text-2xl'>Filter Jobs</h2>
        <div className='flex gap-10 flex-row '>
          <JobFilter onClick = {() => {newType("Full-time")}} text = "Full-time"/>
          <JobFilter onClick = {() => {newType("Part-time")}} text = "Part-time"/>
          <JobFilter onClick = {() => {newType("Internship")}} text = "Internship"/>
        </div>
      </div>
  
      <div className='flex flex-col gap  justify-between'>
        <h2 className='font-bold my-4 ml-3  text-3xl '>Recommended Jobs</h2>
        <Jobs category = {info} type = {type} />
      </div>

    </div>
  )
}

export default homepage

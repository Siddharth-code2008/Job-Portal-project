import React from 'react'
import Navbar from './components/navbar'
import Searchbar from './others/searchbar'
import Categories from './others/categories'

import Jobs from "./components/jobs";



function App() {
  return (
    <div>
      <Navbar/>
      <Searchbar/>


      <h2 className='font-bold ml-4 py-4 text-3xl'>Popular Categories</h2>
      <div className='flex flex-row  h-auto w-full gap-10 p-4 justify-between'>
        <Categories para = "Development" src = "https://img.icons8.com/?size=100&id=1FdYDpqhZ86g&format=png&color=000000"/>
        <Categories para = "Design" src = "https://img.icons8.com/?size=100&id=NqIEh7lsvFS8&format=png&color=000000"/>
        <Categories para = "Marketing" src = "https://img.icons8.com/?size=100&id=MQiz3TkEm0h6&format=png&color=000000"/>
        <Categories para = "Data & AI" src = "https://img.icons8.com/?size=100&id=ywKOa8qNRVyK&format=png&color=000000"/>
        <Categories para = "Sales" src = "https://img.icons8.com/?size=100&id=VuY5fIs6FPtt&format=png&color=000000"/>
        <Categories para = "other" src = "https://img.icons8.com/?size=100&id=HxVfMN75sZaC&format=png&color=000000"/>
      </div>

      <h2 className='font-bold ml-4 pt-4 text-3xl'>Recommended Jobs</h2>
      
      <div className='flex flex-row  h-auto w-full p-2 justify-between'>
        <Jobs/>
        <Jobs/>
        <Jobs/>
        <Jobs/>
        
        
        


      </div>






    </div>
  
  )
}



export default App

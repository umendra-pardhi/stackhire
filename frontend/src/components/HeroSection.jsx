import React, { useState,useEffect } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch,useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate,Link } from 'react-router-dom';
import { setCompanies} from '@/redux/companySlice'
import { COMPANY_API_END_POINT,JOB_API_END_POINT,USER_API_END_POINT} from '@/utils/constant'
import axios from 'axios'


const HeroSection = () => {

  const [jobsCount,setJobsCount]=useState(0);
  const [usersCount,setUsersCount]=useState(0);
 const [companiesCount,setCompaniesCount]=useState(0);


  useEffect(()=>{
    const fetchCompanies = async () => {
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/count`,{withCredentials:true});

            const res2=await axios.get(`${JOB_API_END_POINT}/count`,{withCredentials:true});
            const res3=await axios.get(`${USER_API_END_POINT}/count`,{withCredentials:true});

            console.log('called');
            if(res.data.success && res2.data.success && res3.data.success){
                setCompaniesCount(res.data.count);
              setJobsCount(res2.data.count);
              setUsersCount(res3.data.count);

            }


        } catch (error) {
            console.log(error);
        }
    }
    fetchCompanies();
},[])



    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
       
        <section id="hero" class="bg-blue-50 min-h-[70vh]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate__animated animate__fadeInDown">
              <span class="block">Find Your Dream Job</span>
              <span class="block text-blue-600">or Perfect Candidate</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate__animated animate__fadeInUp">
              Connect with thousands of employers and job seekers. Your next opportunity is just a search away.
            </p>
    
            <div class="mt-10 max-w-xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              <div class="relative">
                <input type="text" onChange={(e) => setQuery(e.target.value)} id="job-search" class="w-full px-8 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:ring-blue-500 focus:outline-none shadow-lg text-gray-900 placeholder-gray-400" placeholder="Search jobs, companies, or locations..."/>
                <button onClick={searchJobHandler} class="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                  Search
                </button>
              </div>
              <div id="search-suggestions" class="hidden absolute z-10 w-full bg-white rounded-lg shadow-lg mt-2"></div>
            </div>
    
  
            <div class="mt-10 sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
              
                         
{/*               
                                      <Link to="/signup"> <button class="px-8 py-3 mr-1 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1">
                For Job Seekers
              </button></Link>
              <Link to="/signup"> <button class="px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1">
                For Employers
              </button></Link> */}
            </div>
    

            <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 animate__animated animate__fadeInUp animate__delay-3s">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <p class="text-3xl font-bold text-blue-600">{jobsCount}</p>
                <p class="text-gray-600">Active Jobs</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <p class="text-3xl font-bold text-blue-600">{companiesCount}</p>
                <p class="text-gray-600">Companies</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <p class="text-3xl font-bold text-blue-600">{usersCount}</p>
                <p class="text-gray-600">Job Seekers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection
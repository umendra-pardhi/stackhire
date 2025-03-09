import React from 'react'



const InfoSection = () => {
  
    return (
        <>

<section id="jobseekers" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          For Job Seekers
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Find your dream job with powerful tools and resources
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Search Jobs</h3>
          <p class="text-gray-600">Access thousands of job listings with our advanced search features. Filter by location, salary, and more.</p>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Track Applications</h3>
          <p class="text-gray-600">Keep track of your job applications and stay organized throughout your job search journey.</p>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Profile Builder</h3>
          <p class="text-gray-600">Create a professional profile that stands out to employers and showcases your skills.</p>
        </div>
      </div>

      {/* <div class="mt-12 text-center animate__animated animate__fadeInUp animate__delay-3s">
        <button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Create Your Profile
          <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div> */}
    </div>
  </section>

  
  <section id="employers" class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          For Employers
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Find the perfect candidates and streamline your hiring process
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Post Jobs</h3>
          <p class="text-gray-600">Create detailed job listings and reach thousands of qualified candidates instantly.</p>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Manage Applications</h3>
          <p class="text-gray-600">Efficiently review and manage applications with our intuitive dashboard.</p>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
          <div class="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Find Candidates</h3>
          <p class="text-gray-600">Search our extensive database of qualified candidates using advanced filters.</p>
        </div>
      </div>

      {/* <div class="mt-12 text-center animate__animated animate__fadeInUp animate__delay-3s">
        <button class="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Start Hiring Today
          <svg class="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div> */}
        
     </div>
  </section>


        </>
    )
}

export default InfoSection
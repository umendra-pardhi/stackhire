import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { Briefcase } from 'lucide-react';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8 sm:my-12 lg:my-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                {/* <Briefcase className="w-8 h-8 text-blue-600" /> */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    <span className="text-blue-600">Latest & Top </span> 
                    Job Openings
                </h1>
            </div>

            {allJobs.length <= 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-lg">No Job Available</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {allJobs?.slice(0, 6).map((job) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default LatestJobs;
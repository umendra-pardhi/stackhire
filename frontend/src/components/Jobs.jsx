import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
      
            <div className='max-w-7xl mx-auto mt-5'>
                {/* Mobile Filter Button */}
                <div className='md:hidden px-4 mb-4'>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button 
                                variant="outline" 
                                className="w-full flex items-center gap-2"
                            >
                                <Filter className="h-4 w-4" />
                                Filter Jobs
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Filter Jobs</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                                <FilterCard onApply={() => setIsDialogOpen(false)} />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className='flex gap-5'>
                    {/* Desktop Filter Card */}
                    <div className='w-1/4 hidden md:block'>
                        <FilterCard />
                    </div>

                    {/* Jobs Grid */}
                    <div className='flex-1'>
                        {filterJobs.length <= 0 ? (
                            <div className="flex items-center justify-center h-[50vh]">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-gray-900">No jobs found</h3>
                                    <p className="text-gray-500 mt-1">Try adjusting your search or filter criteria</p>
                                </div>
                            </div>
                        ) : (
                            <div className='h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-2'>
                                    {filterJobs.map((job) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            key={job?._id}
                                        >
                                            <Job job={job} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
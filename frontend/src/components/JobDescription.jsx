import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT,COMPANY_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { 
    Briefcase, 
    MapPin, 
    Clock, 
    IndianRupee, 
    Users, 
    Building2, 
    CalendarDays 
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Navbar from './shared/Navbar';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);
    const [isLoading, setIsLoading] = useState(false);

    const [companyDetails,setCompanyDetails]=useState([]);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            
            if(res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = {
                    ...singleJob, 
                    applications: [...singleJob.applications, { applicant: user?._id }]
                };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if(res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));

                   
                    const res2 = await axios.get(`${COMPANY_API_END_POINT}/get/${res.data.job.company}`, { withCredentials: true });

                    if(res2.data.success) {
                        setCompanyDetails(res2.data.company);
                        // console.log(res2.data.company)
                    }

                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch job details");
            } finally {
                setIsLoading(false);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
       
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                {singleJob?.title}
                            </CardTitle>
                            <p className='text-blue-600 mt-0 pt-0'>{companyDetails.name}</p>
                            <img src={companyDetails.logo} width={100} alt='company_logo' />
                            <hr/>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge className="bg-blue-100 border-0 text-blue-600 hover:bg-blue-200 font-medium">
                                    {singleJob?.position} Positions
                                </Badge>
                                <Badge className="bg-red-100 border-0 text-red-500 hover:bg-red-200 font-medium">
                                    {singleJob?.jobType}
                                </Badge>
                                <Badge className="bg-green-100 border-0 text-green-700 hover:bg-green-200 font-medium">
                                ₹{singleJob?.salary}
                                </Badge>
                            </div>
                        </div>
                        <Button
                            onClick={isApplied ? null : applyJobHandler}
                            disabled={isApplied || isLoading}
                            className={`w-full sm:w-auto ${
                                isApplied 
                                    ? 'bg-gray-600 hover:bg-gray-600 cursor-not-allowed' 
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                            {isLoading ? 'Processing...' : isApplied ? 'Already Applied' : 'Apply Now'}
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">
                            Job Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Briefcase className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Role</p>
                                        <p className="text-gray-900">{singleJob?.title}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-gray-900">{singleJob?.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Experience</p>
                                        <p className="text-gray-900">{singleJob?.experienceLevel} years</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                <IndianRupee className='w-5 h-5' />
                                    <div>
                                        <p className="font-medium">Salary</p>
                                        <p className="text-gray-900">₹{singleJob?.salary}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Total Applicants</p>
                                        <p className="text-gray-900">{singleJob?.applications?.length}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <CalendarDays className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Posted Date</p>
                                        <p className="text-gray-900">{singleJob?.createdAt?.split("T")[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">
                            Job Description
                        </h2>
                        <p className="text-gray-600 whitespace-pre-line">
                            {singleJob?.description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default JobDescription;
import React from 'react';
import { Button } from './ui/button';
import { Bookmark, MapPin, Clock, Building2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    };

    return (
        <div className="p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-500">
                        {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                    </p>
                </div>
                <Button 
                    variant="ghost" 
                    className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                    size="icon"
                >
                    <Bookmark className="h-4 w-4" />
                </Button>
            </div>

            {/* Company Info Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                {/* <Avatar className="h-12 w-12 border border-gray-200">
                    <AvatarImage src={job?.company?.logo} alt={job?.company?.name} />
                    <AvatarFallback>
                        <Building2 className="h-6 w-6 text-gray-400" />
                    </AvatarFallback>
                </Avatar> */}



                <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-900">
                        {job?.company?.name}
                    </h2>
                    <div className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">India</span>
                    </div>
                </div>

                <img src={job?.company?.logo} alt={job?.company?.name} className='w-[50%]' />
            </div>

            {/* Job Details Section */}
            <div className="mb-4">
                <h1 className="font-bold text-xl mb-2 text-gray-900">{job?.title}</h1>
                <p className="text-sm text-gray-600 line-clamp-2">{job?.description}</p>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mb-4">
                <Badge 
                    className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-0 font-medium"
                    variant="secondary"
                >
                    {job?.position} Positions
                </Badge>
                <Badge 
                    className="bg-red-50 text-red-500 hover:bg-red-100 border-0 font-medium"
                    variant="secondary"
                >
                    {job?.jobType}
                </Badge>
                <Badge 
                    className="bg-green-50 text-green-600 hover:bg-green-100 border-0 font-medium"
                    variant="secondary"
                >
                    ₹{job?.salary}
                </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button 
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    View Details
                </Button>
                {/* <Button 
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                    Save For Later
                </Button> */}
            </div>
        </div>
    );
};

export default Job;
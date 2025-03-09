import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)}
            className="group p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100 cursor-pointer"
        >
            {/* Company Info */}
            <div className="flex items-start justify-between mb-3">
                <div>
                <h2 className="font-bold text-xl mb-0 text-gray-900">
                    {job?.title}
                </h2>
                    <h6 className="  text-blue-500 group-hover:text-blue-600 transition-colors">
                        {job?.company?.name}
                    </h6>
                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">India</span>
                    </div>
                </div>
                {/* <Briefcase className="w-8 h-8 text-blue-600 opacity-75" /> */}
            </div>

            {/* Job Details */}
            <div className="mb-4">
                
                <p className="text-sm text-gray-600 line-clamp-2">
                    {job?.description}
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
                <Badge 
                    className="bg-blue-100 border-0 text-blue-600 hover:bg-blue-200 font-medium px-3 py-1"
                    variant="ghost"
                >
                    {job?.position} Positions
                </Badge>
                <Badge 
                    className="bg-red-100 border-0 text-red-500 hover:bg-red-200 font-medium px-3 py-1"
                    variant="ghost"
                >
                    {job?.jobType}
                </Badge>
                <div className="flex items-center gap-1">
                  
                    <Badge 
                        className="bg-green-100 border-0 text-green-700 hover:bg-green-200 font-medium px-3 py-1"
                        variant="ghost"
                    >
                        ₹{job?.salary}
                    </Badge>
                </div>
            </div>

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
              Apply Now
            </button>
        </div>
    );
};

export default LatestJobCards;
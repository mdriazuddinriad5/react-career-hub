import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { PiSubtitlesLight } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleAppliedJob=()=>{
        toast('Applied successfully');
    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2><span className="text-xl font-bold">Job Description: </span>{job.job_description}</h2>
                    <h2><span className="text-xl font-bold">Job Responsibility: </span>{job.job_responsibility}</h2>
                    <h2 className="text-xl font-bold">Educational Requirements:</h2>
                    <p>{job.educational_requirements}</p>
                    <h2 className="text-xl font-bold">Experiences:</h2>
                    <p>{job.experiences}</p>
                </div>
                <div className="border">

                    <div className="bg-gradient-to-r from-rgba(126, 144, 254, 10) to-rgba(152, 115, 255, 10) rounded-xl p-4">
                        <h2 className="text-xl font-bold">Job Details</h2>
                        <hr />
                        <div className="flex gap-2 items-center">
                            <AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>
                            <h3><span className="text-xl font-bold">Salary:</span>{job.salary}</h3>
                        </div>
                        <div className="flex gap-2 items-center">
                            <PiSubtitlesLight className="text-xl"></PiSubtitlesLight>
                            <h3><span className="text-xl font-bold">Job Title:</span>{job.job_title}</h3>
                        </div>
                        <hr />
                        <h2 className="text-xl font-bold">Contact Information</h2>

                        <div className="flex gap-2 items-center">
                            <BsTelephone className="text-xl"></BsTelephone>
                            <h3><span className="text-xl font-bold">Phone:</span>{job.contact_information.phone}</h3>
                        </div>

                        <div className="flex gap-2 items-center">
                            <AiOutlineMail className="text-xl"></AiOutlineMail>
                            <h3><span className="text-xl font-bold">Email:</span>{job.contact_information.email}</h3>
                        </div>

                        <div className="flex gap-2 items-center">
                            <CiLocationOn className="text-2xl"></CiLocationOn>
                            <h3><span className="text-xl font-bold">Address:</span>{job.contact_information.address}</h3>
                        </div>

                    </div>

                    <button onClick={handleAppliedJob} className="btn btn-primary w-full">Apply Now</button>

                </div>

            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;
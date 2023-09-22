import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);

    // This is not the best way 

    const [dataLength, setDataLength]= useState(2);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])

    return (
        <div>

            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job=> <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={`flex justify-center ${dataLength=== jobs.length && 'hidden'}`} onClick={()=>setDataLength(jobs.length)}>
                <button className="btn btn-primary ">Show All</button>
            </div>
          
        </div>
    );
};

export default FeaturedJobs;
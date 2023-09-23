const getStoredJobApplication=()=>{
    const storedJobApplication= localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveToLocalStorage=(id)=>{
    const storedJobApplications= getStoredJobApplication();
    const exists= storedJobApplications.find(jobId=> jobId===id);
    if(!exists){
        storedJobApplications.push(id);
        const jobApplicationsStringified= JSON.stringify(storedJobApplications);
        localStorage.setItem('job-applications',jobApplicationsStringified);
    }
}


export {getStoredJobApplication, saveToLocalStorage}
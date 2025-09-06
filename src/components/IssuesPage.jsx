import React, { useEffect } from 'react'
import { useVerify } from '../contexts/verifyContext'
import Login from './Login'
import AddIssues from './AddIssues'
import SuccessSubmit from './SuccessSubmit'

const IssuesPage = () => {
    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);
    const [isVerified, setIsVerified] = useVerify(true)
    if(isVerified){
        return <Login />
    }
    return <AddIssues />
    // return <SuccessSubmit />
}

export default IssuesPage
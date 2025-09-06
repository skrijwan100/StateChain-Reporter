import React from 'react'
import { useVerify } from '../contexts/verifyContext'
import Login from './Login'
import AddIssues from './AddIssues'
import SuccessSubmit from './SuccessSubmit'

const IssuesPage = () => {
    const [isVerified, setIsVerified] = useVerify()
    if(isVerified){
        return <Login />
    }
    return <AddIssues />
    // return <SuccessSubmit />
}

export default IssuesPage
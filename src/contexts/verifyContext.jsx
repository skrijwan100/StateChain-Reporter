import React, { createContext, useContext, useState } from 'react'

export const VerifyContext = createContext()

const VerifyContextProvider = ({ children }) => {
    const [isVerified, setIsVerified] = useState(true)
    return (
        <VerifyContext.Provider value={[isVerified, setIsVerified]}>
            {children}
        </VerifyContext.Provider>
    )
}
export default VerifyContextProvider

export function useVerify() {
    return useContext(VerifyContext)
} 
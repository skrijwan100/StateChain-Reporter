import { Moon, Sun, Zap } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="bg-blue-800 dark:bg-slate-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className='h-8 w-8'>
                            <img src={logo} alt="StateChain Reporter Logo" className="h-full w-full object-contain" />
                        </div>
                        <h1 className="text-xl font-bold">StateChain Reporter</h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className="hover:text-teal-300 transition-colors">Home</NavLink>
                        <NavLink to="/analytics" className="hover:text-teal-300 transition-colors">Analytics</NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Blockchain Connected</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
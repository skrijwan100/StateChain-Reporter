import React, { useEffect, useState } from 'react';
import {
    Building,
    Mountain,
    TreePine,
    Waves,
    Sun,
    Factory,
    Star,
    Shield,
    Zap,
    Flag,
    Landmark,
    Globe,
    Map,
    Moon, // Added for dark mode toggle
    BadgeAlert
} from 'lucide-react'; // White background logo
import gu from "../assets/guj.png"
import bh from "../assets/bh.png"
import ke from "../assets/ke.png"
import mh from "../assets/mh.png"
import rj from "../assets/rj.png"
import nl from "../assets/nl.png"
import od from "../assets/od.png"
import ka from "../assets/ka.png"
import ap from "../assets/ap.png"
import ar from "../assets/ar.png"
import as from "../assets/as.png"
import ga from "../assets/ga.png"
import ch from "../assets/ch.png"
import pb from "../assets/pb.png"
import har from "../assets/har.png"
import hima from "../assets/hima.png"
import jhar from "../assets/jhar.png"
import mp from "../assets/mp.png"
import mani from "../assets/mani.png"
import me from "../assets/me.png"
import mi from "../assets/mi.png"
import sik from "../assets/sik.png"
import tn from "../assets/tn.png"
import tl from "../assets/tl.png"
import tr from "../assets/tr.png"
import up from "../assets/up.png"
import uk from "../assets/uk.png"
import wb from "../assets/wb.png"
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

// Main Component
const StateDashboard = () => {
    // State for selected state and theme
    const [selectedState, setSelectedState] = useState(null);
    const [theme, setTheme] = useState('light'); // 'light' or 'dark'

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navigate = useNavigate();

    // Indian States data with theme-aware icons
    const states = [
      { id: 1, name: "Andhra Pradesh", icon: ap, code: "AP" },
      { id: 2, name: "Arunachal Pradesh", icon: ar, code: "AR" },
      { id: 3, name: "Assam", icon: as, code: "AS" },
      { id: 4, name: "Bihar", icon: bh, code: "BR" },
      { id: 5, name: "Chhattisgarh", icon: ch, code: "CG" },
      { id: 6, name: "Goa", icon: ga, code: "GA" },
      { id: 7, name: "Gujarat", icon: gu, code: "GJ" },
      { id: 8, name: "Haryana", icon: har, code: "HR" },
      { id: 9, name: "Himachal Pradesh", icon: hima, code: "HP" },
      { id: 10, name: "Jharkhand", icon: jhar, code: "JH" },
      { id: 11, name: "Karnataka", icon: ka, code: "KA" },
      { id: 12, name: "Kerala", icon: ke, code: "KL" },
      { id: 13, name: "Madhya Pradesh", icon: mp, code: "MP" },
      { id: 14, name: "Maharashtra", icon: mh, code: "MH" },
      { id: 15, name: "Manipur", icon: mani, code: "MN" },
      { id: 16, name: "Meghalaya", icon: me, code: "ML" },
      { id: 17, name: "Mizoram", icon: mi, code: "MZ" },
      { id: 18, name: "Nagaland", icon: nl, code: "NL" },
      { id: 19, name: "Odisha", icon: od, code: "OD" },
      { id: 20, name: "Punjab", icon: pb, code: "PB" },
      { id: 21, name: "Rajasthan", icon: rj, code: "RJ" },
      { id: 22, name: "Sikkim", icon: sik, code: "SK" },
      { id: 23, name: "Tamil Nadu", icon: tn, code: "TN" },
      { id: 24, name: "Telangana", icon: tl, code: "TS" },
      { id: 25, name: "Tripura", icon: tr, code: "TR" },
      { id: 26, name: "Uttar Pradesh", icon: up, code: "UP" },
      { id: 27, name: "Uttarakhand", icon: uk, code: "UK" },
      { id: 28, name: "West Bengal", icon: wb, code: "WB" },
    ];

    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

    // Handle click on a state card
    const handleStateClick = (state) => {
        setSelectedState(state);
        // In a real app, this would navigate to the state's issue reporting page
        console.log(`Navigating to ${state.name} issue reporting page`);
        // Removed alert as it's not ideal for modern web apps.
    };

    // The main div has a conditional class based on the theme state
    return (
        <div className={`${theme}`}>
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col transition-colors duration-500">
                {/* Navbar */}
                <Navbar theme={theme} toggleTheme={toggleTheme} />

                {/* Main Content */}
                <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">State Issue Reporting System</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">Select your state to report issues securely on the blockchain</p>
                        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Network Status: Active</span>
                            </div>
                            <span>•</span>
                            <span>Smart Contract: Verified</span>
                            <span>•</span>
                            <span>Last Updated: Just now</span>
                        </div>
                    </div>

                    {/* Search and Filter Bar */}

                    {/* State Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {states.map((state) => (
                            <div
                                key={state.id}
                                onClick={() => handleStateClick(state)}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-teal-500/20 border-2 border-transparent hover:border-teal-500 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="py-6 px-4">
                                    {/* State Icon */}
                                    <div className="flex justify-center mb-4">
                                       <img src={state.icon} className='w-full h-full object-contain' alt="" srcset="" />
                                    </div>
                                    
                                    {/* State Info */}
                                    <div className="text-center flex items-center flex-col">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                                            {state.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                                            {state.code}
                                        </p>
                                        
                                        {/* Action Button */}
                                        <div onClick={() => navigate(`/allIssues/${state.name}`)} className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg group-hover:bg-teal-600 hover:bg-teal-500 transition-colors">
                                            <Flag className="w-4 h-4 mr-2" />
                                            All Issue
                                        </div>

                                        <div onClick={() => navigate(`/issues/${state.name}`)} className="inline-flex items-center mt-2 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg group-hover:bg-teal-600 hover:bg-teal-500 transition-colors">
                                            {/* <Flag className="w-4 h-4 mr-2" /> */}
                                            <BadgeAlert className="w-4 h-4 mr-2" />
                                            Report Issue
                                        </div>

                                    </div>
                                </div>
                                
                                {/* Bottom accent */}
                                {/* <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500">
                            <div className="flex items-center">
                                <div className="p-2 bg-teal-100 dark:bg-teal-900/50 rounded-lg">
                                    <Map className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total States</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{states.length}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Reports</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">342</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                            <div className="flex items-center">
                                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolved Issues</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">1,847</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                            <div className="flex items-center">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                    <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Network Gas</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Low</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recent State Activity</h3>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="font-medium text-gray-900 dark:text-gray-100">Maharashtra</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Infrastructure Issue Resolved</span>
                                        </div>
                                        <span className="text-sm text-gray-400 dark:text-gray-500">2 min ago</span>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <span className="font-medium text-gray-900 dark:text-gray-100">Karnataka</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">New Issue Reported</span>
                                        </div>
                                        <span className="text-sm text-gray-400 dark:text-gray-500">5 min ago</span>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="font-medium text-gray-900 dark:text-gray-100">Uttar Pradesh</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Issue Under Review</span>
                                        </div>
                                        <span className="text-sm text-gray-400 dark:text-gray-500">12 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default StateDashboard;
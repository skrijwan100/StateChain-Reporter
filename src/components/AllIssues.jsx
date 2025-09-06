import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import issuecontract from "../contracts/Issue.sol/AllIssue.json"
import { ethers } from 'ethers';
import { Calendar } from 'lucide-react';
// Data for the issues - in a real app, this would come from an API
const issuesData = [
    {
        id: 1,
        title: "Food Quality is not good",
        hash: "QmafFgpSLfKWGbKQUU8ivMrnNXdSDh9Z4atZM7kpUtp5Ek",
        user: "0xe9...117d",
        timestamp: "8/8/2025, 2:10:24 AM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Staff+Behavior",
        altText: "Food Quality Issue"
    },
    {
        id: 2,
        title: "Staff behavior is not good",
        hash: "Qmah21x69YzfDMvfDHZFuWyj12L8T3ZV9wa8EttCp8Vk1",
        user: "0x44...6CCf",
        timestamp: "8/8/2025, 2:39:24 AM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Staff+Behavior",
        altText: "Staff Behavior Issue"
    },
    {
        id: 3,
        title: "Electricity very bad",
        hash: "QmcBaKWjXwiWWxaHdKK2wwAH1bBVr32KjnyELnyZgPXudcr",
        user: "0x77...E5dc",
        timestamp: "8/8/2025, 5:24:48 PM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Electricity",
        altText: "Electricity Issue"
    },
    {
        id: 4,
        title: "Internet connection is slow",
        hash: "QmZdF9aWjL8fK...Vz3pQ7rT8uW2nX5yG1cRb",
        user: "0xAb...3dE4",
        timestamp: "8/9/2025, 9:15:11 AM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Internet+Slow",
        altText: "Internet Slow Issue"
    },
    {
        id: 5,
        title: "Water leakage in restroom",
        hash: "QmTpS5nKcV7aR...Jg8hF4dZ9wX3rY6eN2m",
        user: "0xCd...9fA2",
        timestamp: "8/9/2025, 11:45:30 AM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Water+Leakage",
        altText: "Water Leakage Issue"
    },
    {
        id: 6,
        title: "Parking space is full",
        hash: "QmRzV2pL9jB7x...G4hW5eY8fD1mN6kC3q",
        user: "0x98...bC1D",
        timestamp: "8/9/2025, 1:20:05 PM",
        imageUrl: "https://placehold.co/600x400/111827/9ca3af?text=Parking+Full",
        altText: "Parking Full Issue"
    }
];

// Reusable SVG Icon Components
const LogoIcon = () => (
    <svg className="h-8 w-auto text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
);


// Issue Card Component
const IssueCard = ({ issue }) => {
    const navigate = useNavigate();
    const { stateName } = useParams();
    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/10 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
            <img className="w-full h-48 mt-6 object-contain" src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${issue.args.img}`} alt="This is our issue" />
            <div className="p-5">
                <h2 className="text-xl font-bold text-white mb-2">{issue.args.title}</h2>
                <p className="text-x text-gray-400 truncate mb-4">Address:{issue.args.issueaddress}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(parseInt(issue.args.time) * 1000).toLocaleString()}</span>
                </div>
                <button onClick={() => navigate(`/allIssues/${stateName}/${issue.args.issueaddress}`)} className="w-full cursor-pointer bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                    View Details
                </button>
            </div>
        </div>
    );
};


// Main App Component
export default function AllIssues() {
    const { stateName } = useParams();
    const [issuedata, setIssuedata] = useState([])
    const [fecthloder,setfecthloder]=useState(false)
    useEffect(() => {
        const fecthblockdata = async () => {
            setfecthloder(true)
            const infuraProvider = new ethers.JsonRpcProvider(
                import.meta.env.VITE_INFURA_URL
            )
            const issuecontratcget = new ethers.Contract(
                import.meta.env.VITE_CONTRACT_DEPOLY_ADDRESS,
                issuecontract.abi,
                infuraProvider
            )
            const depocontract = await issuecontratcget.filters.saveIssue(null, null, null, stateName)
            const event = await issuecontratcget.queryFilter(depocontract)
            setIssuedata(event)
            console.log(event)
            setfecthloder(false)
        }
        fecthblockdata()
    }, [])
    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);
    return (
        <div className="bg-gray-900 text-gray-300 font-sans">
            <div className="flex flex-col min-h-screen">
                <Navbar />

                {fecthloder?<div className='w-full h-[85vh] flex justify-center items-center '><div className='bigloder'></div></div>:<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-24 py-8 md:py-12">
                    <div className="mb-12 flex items-center flex-col justify-center">
                        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">State Issue Reporting System</h1>
                        <p className="text-lg text-gray-400 mb-4">Select your state to report issues securely on the blockchain</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Network Status: <span className="font-semibold text-green-400">Active</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Smart Contract: <span className="font-semibold text-green-400">Verified</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Last Updated: <span className="font-semibold text-blue-400">Just now</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {issuedata.map((issue, index) => (
                            <IssueCard key={index} issue={issue} />
                        ))}
                    </div>
                </main>
}
                <Footer />
            </div>
        </div>
    );
}


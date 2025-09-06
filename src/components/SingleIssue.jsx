import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router';
import { BrowserProvider, ethers } from 'ethers';
import contractofissue from "../contracts/Issue.sol/Issue.json"
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { keccak256, toUtf8Bytes } from "ethers";
// --- Helper Data ---
const agreeData = [
    { address: '0xa44F4...6CCf', date: '8/8/2025, 2:40:12 AM' },
    { address: '0x7711...E5dc', date: '8/8/2025, 5:26:00 PM' },
    { address: '0xb2dE...9aB1', date: '8/9/2025, 10:15:30 AM' },
];

const disagreeData = [
    { address: '0xe695a...117d', date: '8/8/2025, 2:43:24 AM' },
];


// --- SVG Icons ---
// Using functional components for SVG icons for easy customization
const AlertTriangleIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <path d="M12 9v4"></path><path d="M12 17h.01"></path>
    </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ImageIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
    </svg>
);

const ListIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="8" x2="21" y1="6" y2="6"></line>
        <line x1="8" x2="21" y1="12" y2="12"></line>
        <line x1="8" x2="21" y1="18" y2="18"></line>
        <line x1="3" x2="3.01" y1="6" y2="6"></line>
        <line x1="3" x2="3.01" y1="12" y2="12"></line>
        <line x1="3" x2="3.01" y1="18" y2="18"></line>
    </svg>
);

const LogoIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10 5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const GlobeIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const ZapIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const LockIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

// --- Reusable Components ---
const InfoCard = ({ children }) => (
    <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 mb-8">
        {children}
    </div>
);

const CardTitle = ({ icon, text }) => (
    <div className="flex items-center text-xl font-semibold text-gray-200 mb-4">
        {icon}
        <h2 className="ml-3">{text}</h2>
    </div>
);


const ReportDetails = () => {
    const { id } = useParams()
    const { ethereum } = window;
    const [lodedata, setlodedata] = useState(true)
    const [alldetlis, setalldetlis] = useState({ title: "", story: "", img: "", Owner: "" })
    const [vote, setvote] = useState([])
    const [Tnxload, setTnxload] = useState(false)
    const [dTnxload, setdTnxload] = useState(false)
    const [reload, setreload] = useState(false)
    const [votedone, setvotedone] = useState(false)
    useEffect(() => {
        const alldetiles = async () => {
            if (!ethereum) {
                return alert('Install Window');
            }
            const account = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            const fulladdress = account[0]
            const showaddress = `${fulladdress.slice(0, 4)}...${fulladdress.slice(-4)}`
            const infuraProvider = new ethers.JsonRpcProvider(
                import.meta.env.VITE_INFURA_URL
            )
            const issuecontarct = new ethers.Contract(
                id,
                contractofissue.abi,
                infuraProvider
            )
            const title = await issuecontarct.Ititle();
            const disciribe = await issuecontarct.Idisc();
            const I_img = await issuecontarct.Iimg();
            const Owner = await issuecontarct.OWner();
            const allvote = await issuecontarct.filters.Showvote()
            const voteevent = await issuecontarct.queryFilter(allvote)
            setvote(voteevent)
            console.log(voteevent)
            for (let i = 0; i < voteevent.length; i++) {
                if (
                    voteevent[i].args.Voter.toLowerCase() === fulladdress.toLowerCase() 
                ) {
                    console.log(voteevent[i].args.Voter, fulladdress);
                    setvotedone(true);
                }
            }

            const res = await fetch(`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${disciribe}`)
            const resdata = await res.json()
            console.log(resdata, title, I_img, Owner)
            setalldetlis({ title: title, story: resdata.story, img: I_img, Owner: Owner })
            setlodedata(false)

        }
        alldetiles()

    }, [reload])
    const handleaggrevote = async (e) => {
        e.preventDefault();
        setTnxload(true)
        const WalletProvider = new BrowserProvider(ethereum)
        const signer = await WalletProvider.getSigner();
        const uservote = new ethers.Contract(
            id,
            contractofissue.abi,
            signer
        )
        const uservoteTnx = await uservote.VoteforIssue(1)
        await uservoteTnx.wait();
        console.log(uservoteTnx)
        setTnxload(false)
        setreload(true)
    }
    const handledisaggrevote = async (e) => {
        e.preventDefault();
        setdTnxload(true)
        const WalletProvider = new BrowserProvider(ethereum)
        const signer = await WalletProvider.getSigner();
        const uservote = new ethers.Contract(
            id,
            contractofissue.abi,
            signer
        )
        const uservoteTnx = await uservote.VoteforIssue(0)
        await uservoteTnx.wait();
        console.log(uservoteTnx)
        setdTnxload(false)
        setreload(true)
    }
    return (
        <main className="max-w-screen-xl mx-auto px-6 py-8 text-gray-300">
            {lodedata ? <div className='w-full h-[85vh] flex justify-center items-center '><div className='bigloder'></div></div> : <div>
                {/* --- Top Section --- */}
                <InfoCard>
                    <div className="flex items-start mb-4">
                        <AlertTriangleIcon className="w-7 h-7 text-teal-400 mt-1" />
                        <h1 className="ml-3 text-2xl md:text-3xl font-bold text-white">Staff behavior is not good</h1>
                    </div>
                    <div className="mt-4 text-xs bg-gray-900/70 p-2 rounded-md inline-block font-mono">
                        ID: {id}
                    </div>
                </InfoCard>

                {/* --- Description Section --- */}
                <InfoCard>
                    <CardTitle text="Description" />
                    <p className="text-gray-400 leading-relaxed">
                        {alldetlis.story}
                    </p>
                </InfoCard>

                {/* --- Attached Image Section --- */}
                <InfoCard>
                    <CardTitle icon={<ImageIcon />} text="Attached Image" />
                    <div className="overflow-hidden rounded-lg w-full h-[20rem]">
                        <img
                            src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${alldetlis.img}`}
                            alt="Report evidence"
                            className="w-full h-full object-contain"
                        />
                        
                    </div>
                    <p className='text-center'><span className='text-2xl font-bold'>Location:</span> <a target='_blank' href="https://www.google.com/maps/@22.6555723,88.3003535"><span className='text-teal-500'>https://www.google.com/maps/@22.6555723,88.3003535</span></a></p>
                </InfoCard>

                {/* --- Community Voting Section --- */}
                <InfoCard>
                    <CardTitle text="Community Voting" />
                    <div className="text-center">
                        
                        <p className="text-gray-400 mb-6">Total Votes:{vote.length}</p>
                  {votedone?<p className="text-xl font-bold text-green-400 mb-2">You already done your vote</p>:<div className="flex justify-center gap-4">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                onClick={handleaggrevote}>
                                {Tnxload ? <div className='w-full flex justify-center items-center '><div className='loder'></div></div> : <div className='flex '>
                                    <ThumbsUp className="w-5 h-5" />
                                    <span>Agree</span>
                                </div>}
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                onClick={handledisaggrevote}>
                                {dTnxload ? <div className='w-full flex justify-center items-center '><div className='loder'></div></div>
                                    : <div className='flex items-center justify-center'>
                                        <ThumbsDown className="w-5 h-5" />
                                        <span>Disagree</span>
                                    </div>}
                            </button>
                        </div>}
                    </div>
                </InfoCard>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* --- Agree Section --- */}
                    <InfoCard>
                        <CardTitle icon={<ListIcon />} text="Addresses that Agree" />
                        <div className="space-y-3">
                            {vote.map((item, index) => (
                                item.args.Votevalue==1?<div key={index} className="flex flex-wrap justify-between items-center bg-gray-900/70 p-3 rounded-md">
                                    <span className="font-mono text-sm text-teal-400 mr-4">{item.args.Voter}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-gray-500">{new Date(parseInt(item.args.time) * 1000).toLocaleString()}</span>
                                        <span className="text-xs font-bold bg-green-500/20 text-green-400 py-1 px-3 rounded-full">Agree</span>
                                    </div>
                                </div>:''
                            ))}
                        </div>
                    </InfoCard>

                    {/* --- Disagree Section --- */}
                    <InfoCard>
                        <CardTitle icon={<ListIcon />} text="Addresses that Disagree" />
                        <div className="space-y-3">
                            {vote.map((item, index) => (
                                item.args.Votevalue==0?<div key={index} className="flex flex-wrap justify-between items-center bg-gray-900/70 p-3 rounded-md">
                                    <span className="font-mono text-sm text-teal-400 mr-4">{item.args.Voter}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-gray-500">{new Date(parseInt(item.args.time) * 1000).toLocaleString()}</span>
                                        <span className="text-xs font-bold bg-red-500/20 text-red-400 py-1 px-3 rounded-full">Disagree</span>
                                    </div>
                                </div>:''
                            ))}
                        </div>
                    </InfoCard>
                </div>
            </div>}

        </main>
    );
};

// The main App component that ties everything together.
export default function SingleIssue() {

    return (
        // The main container with a dark gradient background.
        <div className="min-h-screen bg-[#0d1117] font-sans text-gray-300">
            <Navbar />
            <ReportDetails />
            <Footer />
        </div>
    );
}
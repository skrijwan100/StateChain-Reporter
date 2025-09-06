import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { voters } from "../constants/voterData.js"

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const VerifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 22 4"></polyline></svg>
);


const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-[#2D3748] bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};


function Login() {
    const [voterId, setVoterId] = useState("");
    const [isValid, setIsValid] = useState(false);

    const checkVoterId = () => {
        if (!voterId.trim()) {
            setIsValid({
                code: 400, message: "Voter ID cannot be empty"
            });
        } else {
            const voter = voters.find(v => v.id === voterId);
            if (voter) {
                setIsValid({
                    code: 200,
                    message: "Voter ID is valid"
                });
            } else {
                setIsValid({
                    code: 404,
                    message: "Voter ID not found"
                });
            }
        }

        setTimeout(() => {
            setIsValid(false);
        }, 3000);
    }
    return (
        <div className="min-h-screen bg-[#1A202C] font-sans">
            <Navbar />

            <main> {/* Padding top to avoid content being hidden by fixed navbar */}

                {/* Hero Section */}
                <section className="relative flex items-center justify-center bg-[#1A202C] text-white overflow-hidden">
                    {/* Background glowing circles removed for a cleaner look */}

                    <div className="container mx-auto px-6 text-center z-10 py-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Secure Digital <span className="text-teal-400">Voting</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            Experience the future of democracy with our blockchain-powered voting platform. Transparent, secure, and immutable voting for the digital age.
                        </p>

                        <div className="max-w-xl mx-auto bg-[#2D3748] rounded-2xl shadow-2xl p-8">
                            <h2 className="text-2xl font-semibold mb-2">Verify Your Voter ID</h2>
                            <p className="text-gray-400 mb-6">Enter your Voter ID to begin the secure voting process</p>
                            <div className="space-y-6">
                                <div className="text-left">
                                    <label htmlFor="voter-id" className="text-sm font-medium text-gray-300 mb-2 block">Voter ID Number</label>
                                    <input
                                        value={voterId}
                                        onChange={(e) => setVoterId(e.target.value)}
                                        id="voter-id"
                                        type="text"
                                        placeholder="Enter your voter ID (e.g., VID123456789)"
                                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                                    />
                                </div>
                                {isValid && (
                                    <div className="transition-opacity duration-300">
                                        {isValid.code === 200 ? (
                                            // Success Message UI
                                            <div className="flex items-center p-3 text-sm text-white rounded-lg bg-green-500 bg-opacity-10 border border-green-400" role="alert">
                                                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                <span className="font-medium">Success!</span>&nbsp;{isValid.message}
                                            </div>
                                        ) : (
                                            // Error Message UI (handles both 400 and 404 codes)
                                            <div className="flex items-center p-3 text-sm text-white rounded-lg bg-red-500 bg-opacity-10 border border-red-400" role="alert">
                                                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                <span className="font-medium">Verification Failed!</span>&nbsp;{isValid.message}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <button onClick={checkVoterId} className="w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg transform hover:scale-105">
                                    Verify Voter ID &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-[#1A202C] py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<ShieldIcon />}
                                title="User Authentication"
                                description="Advanced multi-factor authentication system with biometric options, single sign-on, and role-based access control to ensure only authorized users can access your data."
                            />
                            <FeatureCard
                                icon={<UsersIcon />}
                                title="Secure Data Storage"
                                description="End-to-end encryption with military-grade algorithms ensures your data remains protected both in transit and at rest, with regular security audits and compliance certifications."
                            />
                            <FeatureCard
                                icon={<VerifiedIcon />}
                                title="Data Protection"
                                description="Comprehensive data loss prevention with automated backups, ransomware protection, and strict privacy controls to keep your information safe from threats and unauthorized access."
                            />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* Adding some keyframe animations for the background blobs - This can be removed if not needed for the new design */}
            <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-4000 {
            animation-delay: -4s;
        }
      `}</style>
        </div>
    );
}

export default Login;
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const StateChainLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 text-cyan-400">
    <path d="M14.22 3.33002L11.03 11.52L14.22 19.71C14.47 20.32 15.26 20.44 15.68 19.92L21.31 12.93C21.8 12.31 21.8 11.31 21.31 10.69L15.68 3.70002C15.26 3.18002 14.47 3.30002 14.22 3.33002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.78 3.33002L6.59 11.52L9.78 19.71C10.03 20.32 10.82 20.44 11.24 19.92L16.87 12.93C17.36 12.31 17.36 11.31 16.87 10.69L11.24 3.70002C10.82 3.18002 10.03 3.30002 9.78 3.33002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <path d="M4.69 7.4L2.31 12L4.69 16.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SuccessIcon = () => (
  <svg className="w-24 h-24 text-green-500 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-cyan-400 transition-colors">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-cyan-400 transition-colors">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GoHomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const ViewExplorerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const SepoliaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
);

const GasIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-400">
        <path d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
        <path d="M6.1 11.15a8.1 8.1 0 1 0 11.8 0"></path>
        <path d="M12 3v2.3"></path><path d="m6.5 6.5 1.6 1.6"></path>
        <path d="m17.5 6.5-1.6 1.6"></path>
    </svg>
);

const EncryptedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const VerifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

function SuccessContent() {
  return (
    <main className="flex-grow flex items-center justify-center text-white py-18 px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
            <div className="relative inline-block">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/5 rounded-full animate-pulse"></div>
                 <SuccessIcon />
            </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Submitted <span className="text-green-400">Successfully!</span>
        </h1>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          Your Issue has been successfully deployed and is now live on the network.
        </p>

        <div className="space-y-4 text-left mb-10">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-cyan-400 font-semibold mb-1">Contract Address:</p>
              <p className="font-mono text-sm">0xf2ad6845...3E79C8e4</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <CopyIcon />
              <ExternalLinkIcon />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-cyan-400 font-semibold mb-1">Transaction Hash:</p>
              <p className="font-mono text-sm">0x72057997...1d8bc24b</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <CopyIcon />
              <ExternalLinkIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 transition-colors font-semibold py-3 px-6 rounded-lg">
            <GoHomeIcon /> Go To Home Page
          </button>
          <button className="w-full sm:w-auto flex cursor-pointer items-center gap-2 justify-center bg-gray-700/50 hover:bg-gray-700/80 transition-colors font-semibold py-3 px-6 rounded-lg border border-gray-600">
            <ExternalLinkIcon /> View on Explorer
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Your campaign is now live and ready to receive contributions. Share the campaign address with your community.
        </p>
      </div>
    </main>
  );
}


export default function SuccessSubmit() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1f36] to-[#2c234b]">
      <Navbar />
      <SuccessContent />
      <Footer />
    </div>
  );
}
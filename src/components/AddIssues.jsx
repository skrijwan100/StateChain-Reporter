import React, { useState } from 'react';

// --- SVG Icon Components ---
// Using inline SVGs to keep everything in one file.

const StateChainLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-teal-400">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 9.4L12 12L7.5 9.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-amber-400">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line>
    </svg>
);

const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 mr-3">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line>
    </svg>
);

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 mr-3">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>
    </svg>
);

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
        <circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line>
    </svg>
);

const CloudUploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path>
    </svg>
);


// --- Main App Component ---
export default function AddIssues() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white font-sans antialiased overflow-y-auto">
      
      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6 border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center text-xl font-bold">
            <StateChainLogo />
            <span>StateChain Reporter</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-teal-400 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Reports</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Analytics</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Profile</a>
          </nav>
          <div className="flex items-center text-sm">
             <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-400 mr-2 hidden sm:inline">Blockchain Connected</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-500"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-8 sm:py-16">
        <div className="text-left w-full max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">State Issue Reporting System</h1>
          <p className="text-slate-400 mt-2">
            Select your state to report issues securely on the blockchain
          </p>
          <div className="mt-4 text-sm text-slate-400 flex items-center space-x-4">
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span>Network Status: Active</span>
              </div>
              <span>•</span>
              <span>Smart Contract: Verified</span>
               <span>•</span>
              <span>Last Updated: just now</span>
          </div>
        </div>


        {/* Form Container */}
        <div className="w-full max-w-3xl bg-slate-800 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
          <form className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <FileTextIcon />
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter the project name..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300"
              />
            </div>

            {/* Reporter Name */}
            <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <FileTextIcon />
                Your Name/ID
              </label>
              <input
                type="text"
                placeholder="Enter your name or identifier..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300"
              />
            </div>

            {/* Issue Title */}
            <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <FileTextIcon />
                Issue Title
              </label>
              <input
                type="text"
                placeholder="Brief description of the issue..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300"
              />
            </div>

            {/* Issue Story */}
            <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <FileTextIcon />
                Issue Story
              </label>
              <textarea
                placeholder="Provide detailed information about the issue, steps to reproduce, expected behavior, etc."
                rows="6"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300 resize-none"
              ></textarea>
            </div>
            
            {/* Issue Image */}
            <div>
                <label className="flex items-center text-slate-300 mb-2 font-medium">
                    <UploadIcon />
                    Issue Image
                </label>
                <div 
                    className="relative w-full h-48 border-2 border-dashed border-slate-600 rounded-lg flex flex-col justify-center items-center cursor-pointer text-slate-400 hover:border-teal-500 hover:text-white transition-colors duration-300"
                    onClick={() => document.getElementById('file-upload').click()}
                >
                    <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="object-contain h-full w-full rounded-md p-2" />
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                            <span>Click to upload image</span>
                        </>
                    )}
                     <span className="absolute bottom-2 text-xs text-slate-500">Click to change image</span>
                </div>
            </div>

            {/* Upload Button */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 transition-all duration-300"
            >
                <CloudUploadIcon />
                Submit Report
            </button>
          </form>
        </div>
        
        {/* Show All Issues Button */}
        <div className="w-full max-w-3xl mt-8 bg-slate-800 border border-slate-700/50 rounded-2xl p-4">
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-slate-700 border border-slate-600 text-slate-200 font-medium py-3 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white transition-colors duration-300"
            >
                <InfoIcon/>
                Show All Issues
            </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 text-center py-8">
        <p className="text-slate-500 text-sm">
          © 2025 StateChain Reporter. Building the future of decentralized reporting.
        </p>
      </footer>
    </div>
  );
}

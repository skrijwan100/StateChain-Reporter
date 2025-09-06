import React, { useEffect } from 'react';

// You can replace these with your actual logo SVGs or image tags
const logos = [
    { id: 1, component: <svg className="w-32 h-10 text-gray-400" fill="currentColor" viewBox="0 0 132 34"><path d="M66 34c-18.778 0-34-15.222-34-34h17c0 9.389 7.611 17 17 17s17-7.611 17-17h17c0 18.778-15.222 34-34 34Z" /></svg> },
    { id: 2, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a2.5 2.5 0 010 4L15 18M3 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z"></path></svg></div><span className="font-bold text-indigo-400">Logoipsum</span></div> },
    { id: 3, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><span className="font-bold text-red-400">Logoipsum</span></div> },
    { id: 4, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1.28a1 1 0 00-.97.744l-.455 1.455a1 1 0 01-.97.744H7.674a1 1 0 01-.97-.744L6.25 11.244a1 1 0 00-.97-.744H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path><path d="M10 12a2 2 0 100 4 2 2 0 000-4z"></path></svg></div><span className="font-bold text-purple-400">Logoipsum</span></div> },
    { id: 5, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 text-orange-500 flex items-center justify-center"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg></div><span className="font-bold text-orange-400">Logoipsum</span></div> },
    { id: 6, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.61v5.063l-4.63-2.105a1 1 0 00-1.127.316l-3 4a1 1 0 001.25 1.562l4-3a1 1 0 00.578-.673 48.04 48.04 0 001.44-4.244L10 11.61v3.257l-2.433-1.107a1 1 0 00-1.127.316l-1 2a1 1 0 001.25 1.562l1.5-1a1 1 0 00.578-.673 48.653 48.653 0 00.54-1.63L10 15.61l4.873-2.216a1 1 0 00.578.673l1.5 1a1 1 0 001.25-1.562l-1-2a1 1 0 00-1.127-.316L12 13.867v-3.257l2.106-1.053a48.063 48.063 0 001.44 4.244 1 1 0 00.578.673l4 3a1 1 0 001.25-1.562l-3-4a1 1 0 00-1.127-.316L12 12.673V7.61l6.606-2.673a1 1 0 000-1.84l-7-3zM10 7.61L3.394 5.08 10 2.39l6.606 2.69L10 7.61z"></path></svg></div><span className="font-bold text-gray-400">Logoipsum</span></div> },
    { id: 7, component: <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a2 2 0 01-2 2h-2v-2a2 2 0 012-2h2z"></path></svg></div><span className="font-bold text-green-500">Logoipsum</span></div> },
];

const CompanySlide = () => {
    // Duplicating the logos twice is enough for a seamless loop.
    const duplicatedLogos = [...logos, ...logos];
    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

    return (
        <div className="w-full antialiased">
            {/* The main container is now full-width with responsive padding and a max-width for larger screens. */}
            <div className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading font size and margin are now responsive. */}
                <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl mb-8 md:mb-12">
                    Trusted companies
                </h2>

                {/* This container prevents overflow and uses a subtle gradient fade on the edges for a polished look. */}
                <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex animate-scroll-right-to-left">
                        {duplicatedLogos.map((logo, index) => (
                            // The margin between logos is now responsive for better spacing on small screens.
                            <div key={index} className="flex-shrink-0 mx-6 sm:mx-8 md:mx-10 flex items-center justify-center" style={{ minWidth: '160px' }}>
                                {logo.component}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* The animation keyframes are unchanged but work correctly with the duplicated logos. */}
            <style>{`
        @keyframes scroll-right-to-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-right-to-left {
            animation: scroll-right-to-left 40s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default CompanySlide;
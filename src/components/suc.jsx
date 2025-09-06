import React, { useEffect, useState } from "react";
import { ClipboardCopy, ExternalLink } from 'lucide-react';

const tickAnimationStyle = `
  @keyframes bounce-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale-bounce {
  0%, 100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(1.1);
  }
  85% {
    transform: scale(0.95);
  }
}
.tick-path {
  stroke-dasharray: 22;
  stroke-dashoffset: 22;
  animation: bounce-draw 0.8s ease forwards, scale-bounce 0.6s ease forwards 0.8s;
  transform-origin: center;
}
`;

const SuccessPage = ({ theme, issueId,Tnxhash }) => {
  const contractAddress = "0xF2ad6845...3E79CBe4";
  const transactionHash = "0x72057997...1dbc24b";

  const bgGradient = theme === 'dark'
    ? "bg-gradient-to-br from-[#152964] via-[#22659F] to-[#111934]"
    : "bg-gradient-to-br from-[#65b3fa] via-[#3ed3b5] to-[#1767ec]";

  const [copiedLabel, setCopiedLabel] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  return (
    <>
      <style>{tickAnimationStyle}</style>
      <div className={`${bgGradient} min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col relative`}>

        <div className="flex-1 bg-white dark:bg-slate-800 flex flex-col items-center justify-center px-4">
          <div className="w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 text-center border border-white/10 dark:border-slate-800/60 backdrop-blur-sm transition-colors">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 dark:bg-green-700/30 w-20 h-20 flex items-center justify-center mx-auto">
                <svg
                  className="w-12 h-12 text-green-500 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="11" strokeWidth="2" />
                  <path
                    className="tick-path"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12l3 3l5-6"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              Submited <span className="text-green-500 dark:text-green-400">Successfully!</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
              Your Issue has been successfully deployed and is now live on the network.
            </p>

            <div className="bg-sky-50 dark:bg-slate-800 rounded-lg py-3 px-4 mb-3 flex items-center justify-between transition-colors">
              <div className="text-left">
                <span className="text-xs text-[#339edc] dark:text-sky-400 font-semibold select-text">● Contract Address:</span>
                <div className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate max-w-[18rem]" title={issueId}>
                  {issueId}
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => copyToClipboard(contractAddress, 'Contract Address')}
                  aria-label="Copy Contract Address"
                  title={copiedLabel === 'Contract Address' ? "Copied!" : "Copy Contract Address"}
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                  type="button"
                >
                  <ClipboardCopy className="w-5 h-5" />
                </button>
                <button
                  aria-label="View Contract Address on Explorer"
                  title="View Contract Address on Explorer"
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                  type="button"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-sky-50 dark:bg-slate-800 rounded-lg py-3 px-4 mb-6 flex items-center justify-between transition-colors">
              <div className="text-left">
                <span className="text-xs text-[#339edc] dark:text-sky-400 font-semibold select-text">● Transaction Hash:</span>
                <div className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate max-w-[18rem]" title={Tnxhash}>
                  {transactionHash}
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => copyToClipboard(transactionHash, 'Transaction Hash')}
                  aria-label="Copy Transaction Hash"
                  title={copiedLabel === 'Transaction Hash' ? "Copied!" : "Copy Transaction Hash"}
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                  type="button"
                >
                  <ClipboardCopy className="w-5 h-5" />
                </button>
                <button
                  aria-label="View Transaction Hash on Explorer"
                  title="View Transaction Hash on Explorer"
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                  type="button"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg group-hover:bg-teal-600 transition-colors"
              >
                Go To Home Page
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg group-hover:bg-teal-600 transition-colors"
              >
                View on Explorer
              </button>
            </div>

            <div className="mt-7 text-xs text-gray-400 dark:text-gray-500 select-text">
              Your campaign is now live and ready to receive contributions. Share the campaign address with your community!
            </div>
          </div>
        </div>

        <div className="absolute left-8 top-8 flex items-center space-x-2 select-none">
          <span className="rounded-full p-1 bg-white dark:bg-slate-900 shadow">
            <svg
              className="w-6 h-6 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 9.46-8 11-4.5-1.54-8-5.75-8-11V7l8-4z" />
            </svg>
          </span>
          <span className="font-extrabold text-white text-lg drop-shadow">IssueBlock</span>
        </div>

        <div className="absolute right-8 top-8 px-5 py-1 rounded-full shadow-lg border-2 border-white bg-blue-600 text-white font-mono flex items-center space-x-2 select-none">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
          <span>0xe9...117d</span>
          <span className="ml-2 text-xs text-blue-200">1.6804 SpETH</span>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;

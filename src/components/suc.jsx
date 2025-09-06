import React, { useState } from "react";
import { ClipboardCopy, ExternalLink } from 'lucide-react';

const SuccessPage = ({ theme, onGoHome, onViewExplorer }) => {
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

  return (
    <div className={`${bgGradient} min-h-screen flex flex-col`}>
      <header
        className="absolute top-6 left-6 flex items-center space-x-2 select-none"
        aria-label="IssueBlock Logo and title"
      >
        <div className="rounded-full p-1 bg-white dark:bg-slate-900 shadow-md">
          <svg
            className="w-7 h-7 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l8 4v5c0 5.25-3.5 9.46-8 11-4.5-1.54-8-5.75-8-11V7l8-4z"
            />
          </svg>
        </div>
        <h1 className="text-white font-extrabold text-xl drop-shadow-lg">IssueBlock</h1>
      </header>
      <div
        className="absolute top-6 right-6 flex items-center space-x-3 rounded-full border-2 border-white bg-blue-600 px-4 py-1 shadow-lg font-mono text-white select-none"
        role="region"
        aria-label="Wallet info"
      >
        <span
          className="w-3 h-3 rounded-full bg-green-400 animate-pulse"
          aria-label="Online Status"
        />
        <span className="truncate max-w-[7rem]" title="Wallet Address">
          0xe9...117d
        </span>
        <span className="text-sm text-blue-200">1.6804 SpETH</span>
      </div>

      <main className="flex-1 flex flex-col justify-center items-center px-4">
        <section
          className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10 border border-white/10 dark:border-slate-800/50 backdrop-blur-sm transition-opacity duration-700 ease-in"
          aria-live="polite"
        >
          <div className="flex justify-center mb-8" aria-hidden="true">
            <div className="rounded-full bg-green-100 dark:bg-green-700/30 p-5 shadow-lg">
              <svg
                className="w-14 h-14 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="11" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12l3 3 5-6"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 text-center">
            Submitted{" "}
            <span className="text-green-500 dark:text-green-400">Successfully!</span>
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-md mx-auto mb-12">
            Your issue has been successfully deployed and is now live on the network.
          </p>

          {[
            { label: "Contract Address", value: contractAddress },
            { label: "Transaction Hash", value: transactionHash },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="mb-6 flex items-center justify-between bg-sky-50 dark:bg-slate-800 rounded-lg py-4 px-5 shadow-inner border border-white/20 dark:border-slate-700 transition-colors"
            >
              <div>
                <span className="inline-block mb-1 text-xs font-semibold text-[#339edc] dark:text-sky-400 select-text">
                  ● {label}:
                </span>
                <p
                  className="font-mono text-gray-900 dark:text-gray-100 text-sm truncate max-w-[16rem]"
                  title={value}
                >
                  {value}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => copyToClipboard(value, label)}
                  aria-label={`Copy ${label}`}
                  title={copiedLabel === label ? "Copied!" : `Copy ${label}`}
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                >
                  <ClipboardCopy className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onViewExplorer && onViewExplorer()}
                  aria-label={`View ${label} on Explorer`}
                  title={`View ${label} on Explorer`}
                  className="text-[#339edc] dark:text-sky-400 hover:text-[#22659F] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 rounded"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-center space-x-6 mt-8">
            <button
              type="button"
              onClick={() => onGoHome && onGoHome()}
              className="bg-[#169ad9] hover:bg-[#1278d5] dark:bg-sky-600 dark:hover:bg-sky-500 text-white rounded-lg px-8 py-3 font-semibold text-lg shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-sky-400"
            >
              Go To Home Page
            </button>
            <button
              type="button"
              onClick={() => onViewExplorer && onViewExplorer()}
              className="bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-sky-400 text-sky-500 dark:text-sky-400 rounded-lg px-8 py-3 font-semibold text-lg shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-sky-400"
            >
              View on Explorer
            </button>
          </div>

          <p className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500 max-w-[21rem] mx-auto select-text">
            Your campaign is now live and ready to receive contributions. Share the campaign address with your community!
          </p>
        </section>
      </main>
    </div>
  );
};

export default SuccessPage;

import { AlertTriangle, ImageIcon } from 'lucide-react';
import React from 'react'

const SingleIssue = () => {
    const voters = [
        { address: "0x44F4...6CCf", time: "8/8/2025, 2:40:12 AM", status: "Agree" },
        { address: "0xe95a...117d", time: "8/8/2025, 2:43:24 AM", status: "Disagree" },
        { address: "0x7711...E5dc", time: "8/8/2025, 5:26:00 PM", status: "Agree" },
    ];
    return (
        <div className="min-h-screen bg-gray-900 flex justify-center p-6">
            <div className="w-full max-w-3xl space-y-6">
                {/* Report Header Card */}
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-6 h-6 text-teal-500" />
                        <h2 className="text-xl font-semibold text-white">
                            Staff behavior is not good
                        </h2>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                        <p>👤 0x44...6CCf</p>
                        <p>⏱ 1757155093133</p>
                        <p>ID: 0x83e6D9AaFcD3BD92842d9D8D5F887DC97B0688b8</p>
                    </div>
                </div>

                {/* Description Card */}
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Female college staff includes teaching faculty and non-teaching administrative
                        and support staff. Examples of teaching staff include professors, lecturers,
                        and teaching assistants, while non-teaching staff can include administrators,
                        librarians, lab assistants, and other support personnel. In the context of
                        Women's College, Calcutta, there are several female faculty members across
                        different departments like Bengali, Philosophy, Education, and more, as well as
                        non-teaching staff like librarians and administrative assistants.
                    </p>
                </div>

                {/* Attached Image Card */}
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-teal-500" /> Attached Image
                    </h3>
                    <img
                        src="/madara.jpg"
                        alt="Attached"
                        className="rounded-xl shadow-lg max-h-72 object-cover"
                    />
                </div>

                {/* Community Voting Section */}
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-white">Community Voting</h3>
                    <p className="text-teal-500 font-semibold mt-2">
                        You already done your vote
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Total Votes: {voters.length}</p>
                </div>

                {/* Addresses Card */}
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <h2 className="w-5 h-5 text-teal-500" /> Addresses that Agree and Disagree
                    </h3>
                    <div className="space-y-3">
                        {voters.map((voter, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center bg-slate-900 p-3 rounded-xl"
                            >
                                <div>
                                    <p className="text-sm text-white">{voter.address}</p>
                                    <p className="text-xs text-gray-400">{voter.time}</p>
                                </div>
                                <span
                                    className={`${voter.status === "Agree"
                                        ? "bg-teal-500"
                                        : "bg-red-600"
                                        } text-white text-sm px-3 py-1 rounded-lg shadow`}
                                >
                                    {voter.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleIssue
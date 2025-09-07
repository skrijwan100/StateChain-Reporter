import React, { use, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IdCard, MapPinHouse, CloudUpload, Send } from 'lucide-react';
import { BrowserProvider, ethers } from 'ethers';
import { handleError, handleSuccess } from './ErrorMessage';
import issuecontract from "../contracts/Issue.sol/AllIssue.json"
import { keccak256, toUtf8Bytes } from "ethers";
import SuccessPage from './suc';
import Login from './Login.jsx'
import { useVerify } from '../contexts/verifyContext';
import { useNavigate, useParams } from 'react-router';
import SuccessSubmit from "../components/SuccessSubmit.jsx"

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



// --- Main App Component ---
export default function AddIssues() {
  const [isVerified, setIsVerified] = useVerify();
  const [imagePreview, setImagePreview] = useState(null);
  const [img, setimg] = useState()
  const [ipfsimg, setipfsimg] = useState('')
  const [ipfsstory, setipfsstory] = useState('')
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const [imgloder, setImgLoder] = useState(false)
  const [isSubmit, setisSubmit] = useState(false)
  const { stateName } = useParams()
  const [Tnxhash, setTnxhash] = useState('')
  const [issueId, setIssueId] = useState('')
  const [detailsOfVoter, setdetailsOfVoter] = useState({
    voterId: 'VOT123',
    state: stateName,
    issueTitle: '',
    issueStory: ''
  })
  const [lodscpage, setlodscpage] = useState(false)
  const { ethereum } = window;
  const naviget=useNavigate()
  useState(() => {
    const connectwallate = async () => {
      if (!ethereum) {
        alert('Install Window');
        return naviget("/")
      }
      const account = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const fulladdress = account[0]
      const showaddress = `${fulladdress.slice(0, 4)}...${fulladdress.slice(-4)}`
      console.log(showaddress)
      const eth_bal = await ethereum.request({
        method: 'eth_getBalance',
        params: [
          account[0], 'latest'
        ]
      })
      const fullbal = ethers.formatEther(eth_bal)
      const showbal = fullbal.slice(0, 6)
      console.log(showbal)

    }
    connectwallate()
  }, [])
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setimg(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadDetailsToIPFS = async (e) => {
    e.preventDefault();
    if (detailsOfVoter.issueStory == '' && detailsOfVoter.issueTitle == '') {
      return handleError("Fill all the data.")
    }
    else {
      setImgLoder(true)
      const imgdata = new FormData();
      imgdata.append("file", img)
      const requesturl = `https://api.pinata.cloud/pinning/pinFileToIPFS`
      try {
        const uploadrequest = await fetch(requesturl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: imgdata
        })

        const upload = await uploadrequest.json()
        console.log(upload)
        setipfsimg(upload.IpfsHash)
      } catch (error) {
        handleError("Some error happeend ,Try again!")
        setImgLoder(false)
        console.log(error)
      }
      const requesturlJ = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
      const body = {
        pinataContent: { story: detailsOfVoter.issueStory }
      };
      try {
        const uploadrequest = await fetch(requesturlJ, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })

        const upload = await uploadrequest.json()
        console.log(upload)
        setipfsstory(upload.IpfsHash)
        if (upload) {
          handleSuccess("Upload sucessfully")
          setIsSubmitting(true)
          setImgLoder(false)
        }
      } catch (error) {
        handleError("Some error happeend ,Try again!")
        setImgLoder(false)
        console.log(error)
      }
    }
  }

    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!detailsOfVoter.issueTitle || !detailsOfVoter.issueStory) return handleError('Fill all the input Box');
    setisSubmit(true)
    const hashedId = keccak256(toUtf8Bytes(detailsOfVoter.voterId));
    const WalletProvider = new BrowserProvider(ethereum);
    const singer = await WalletProvider.getSigner();
    const submitissuetnx = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_DEPOLY_ADDRESS,
      issuecontract.abi,
      singer
    )
    const issuedata = await submitissuetnx.CreateIssue(
      detailsOfVoter.issueTitle,
      ipfsstory,
      ipfsimg,
      detailsOfVoter.state,
      hashedId
    )
    await issuedata.wait();
    console.log(issuedata)
    setIssueId(issuedata.to)
    setTnxhash(issuedata.hash)
    setisSubmit(false)
    setlodscpage(true)
    handleSuccess('Issue is Submited')
  }
  if (lodscpage) {
    return (
      <SuccessSubmit Tnxhash={Tnxhash} issueId={issueId} />
    )
  }
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white font-sans antialiased">

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-8 sm:py-16">
        <div className="text-left w-full max-w-3xl mb-8 flex items-center justify-center flex-wrap">
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
            {/* <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <IdCard className='mr-2' />
                Voter Id
              </label>
              <input
                type="text"
                value={detailsOfVoter.voterId}
                readOnly
                onChange={(e) => setdetailsOfVoter({ ...detailsOfVoter, voterId: e.target.value })}
                placeholder="Enter the project name..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300"
              />
            </div> */}

            {/* Reporter Name */}
            <div>
              <label className="flex items-center text-slate-300 mb-2 font-medium">
                <MapPinHouse className='mr-2' />
                State
              </label>
              <input
                type="text"
                value={detailsOfVoter.state}
                readOnly
                onChange={(e) => setdetailsOfVoter({ ...detailsOfVoter, state: e.target.value })}
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
                value={detailsOfVoter.issueTitle}
                onChange={(e) => setdetailsOfVoter({ ...detailsOfVoter, issueTitle: e.target.value })}
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
                value={detailsOfVoter.issueStory}
                onChange={(e) => setdetailsOfVoter({ ...detailsOfVoter, issueStory: e.target.value })}
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                    <span>Click to upload image</span>
                  </>
                )}
                <span className="absolute bottom-2 text-xs text-slate-500">Click to change image</span>
              </div>
            </div>

            {/* Upload Button */}
            {IsSubmitting ?
              <button type="button"
                onClick={handlesubmit}
                className="w-full flex items-center cursor-pointer justify-center gap-2 bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 transition-all duration-300">
                {isSubmit ? <div className='flex'><div className="animate-spin rounded-full h-4 w-4 mt-1 mr-2 border-b-2 border-white"></div><span>Submiting...</span></div> : <div className='flex'>
                  <Send className='mr-2' />
                  Submit Issue
                </div>}
              </button>

              : <button
                onClick={uploadDetailsToIPFS}
                type="button"
                className="w-full flex items-center cursor-pointer justify-center gap-2 bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 transition-all duration-300"
              >
                {imgloder ? <div className='flex'><div className="animate-spin rounded-full h-4 w-4 mt-1 mr-2 border-b-2 border-white"></div><span>Uploding...</span></div> : <div className='flex'>
                  <CloudUpload className='mr-2' />
                  Upload image in IPFS</div>}

              </button>}
          </form>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

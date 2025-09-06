import hre from "hardhat"
async function main(){
    const issuecontract= await hre.ethers.getContractFactory("AllIssue")
    const d_issuecontract= await issuecontract.deploy();
    await d_issuecontract.waitForDeployment();
    console.log("Issue contract in deopoly address: ",await d_issuecontract.getAddress())

}

main().then(()=> process.exit(0)).catch((error)=>{
console.log(error)
 process.exit(1)
})
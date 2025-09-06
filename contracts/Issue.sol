// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AllIssue {
    address[] public Issueaddress;
    event saveIssue(
        string title,
        string disc,
        string img,
        string indexed state,
        bytes32 indexed  voterId,
        address  owner,
        address indexed issueaddress,
        uint256 time
    );

    function CreateIssue(
        string memory _title,
        string memory _disc,
        string memory _img,
        string memory _state,
        bytes32  VoterId
    ) public {
        Issue newIssuse = new Issue(
            _title,
            _disc,
            _img,
            _state,
            VoterId,
            msg.sender
        );
        Issueaddress.push(address(newIssuse));
        emit saveIssue(
            _title,
            _disc,
            _img,
            _state,
            VoterId,
            msg.sender,
            address(newIssuse),
            block.timestamp
        );
    }
}

contract Issue {
    string public Ititle;
    string public Idisc;
    string public Iimg;
    string public State;
    bytes32 public voteId;
    address public OWner;
    uint public Vote;
    bytes32 public VoterTake;
event Showvote(uint indexed Votevalue, bytes32 indexed Voter, uint256 time);

    constructor(
        string memory _Ititle,
        string memory _Idisc,
        string memory _Iimg,
        string memory _State,
        bytes32 _voteId,
        address _Owner
    ) {
        Ititle = _Ititle;
        Idisc = _Idisc;
        Iimg = _Iimg;
        State = _State;
        voteId = _voteId;
        OWner=_Owner;
    }

    function VoteforIssue(uint256 _vote, bytes32 _voterId) public {
        Vote = _vote;
        VoterTake=_voterId;
        emit Showvote(Vote,VoterTake, block.timestamp);
    }
}

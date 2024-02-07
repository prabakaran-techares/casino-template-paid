const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const axios = require('axios');
const {Web3} = require('web3');



exports.getOnwerShip = async (req, res) => {
    try {
    

        const { contract_address } = req.body;

        axios.get(`https://api.polygonscan.com/api?module=contract&action=getabi&address=${contract_address}`).then(async (response)=>{
            const abi = JSON.parse(response.data.result);

            const provider = new Web3.providers.HttpProvider('https://polygon-mainnet.infura.io/v3/f4ec436c7bbf4cfa86e16100af0a3a7b');
            const web3 = new Web3(provider);

            const contract = new web3.eth.Contract(abi, contract_address);

            const owner = await contract.methods.proxyOwner().call();
            
            return res.status(200).json({ "Contract": contract_address , "Owner Address" : owner });
        }).catch((excep)=>{
            console.log(excep);
            return res.status(200).json({ "res" : "excep" });
        })
        

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};
  
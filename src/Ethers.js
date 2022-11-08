import React, { Component } from "react";

import { ethers } from "ethers";
import Web3 from "web3";

class Ethers extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async testJsonRpcProvider() {
    const provider = new ethers.providers.JsonRpcProvider({
      url: "https://goerli.infura.io/v3/449391f15f3444d08ea51a4d62141418",
      password: "1839fa09992948dd9e8084a387ab5729",
      // headers: {
      //   authorization: 'Basic ' + btoa(':1839fa09992948dd9e8084a387ab5729')
      // }
    });
    const blockNumber = await provider.getBlockNumber();
    this.setState({ blockNumber });
  }

  async testInfuraProvider() {
    const provider = new ethers.providers.InfuraProvider("homestead", {
      projectId: "449391f15f3444d08ea51a4d62141418",
      projectSecret: "1839fa09992948dd9e8084a387ab5729",
    });
    const blockNumber = await provider.getBlockNumber();
    this.setState({ blockNumber });
  }

  async testWeb3() {
    const web3 = new Web3('https://:1839fa09992948dd9e8084a387ab5729@goerli.infura.io/v3/449391f15f3444d08ea51a4d62141418');
    const blockNumber = await web3.eth.getBlockNumber();
    this.setState({ blockNumber });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.testJsonRpcProvider()}>Test JsonRpcProvider</button><br />
        <button onClick={() => this.testInfuraProvider()}>Test InfuraProvider</button><br />
        <button onClick={() => this.testWeb3()}>Test Web3</button><br />
        <p>{this.state?.blockNumber ?? ""}</p>
      </div>
    );
  }
}

export default Ethers;

import React from "react";
import walletSVG from "../images/wallet 1.svg";

//Importing components
import Navbar from "../components/Navbar";

const headingDiv = {
  marginLeft: "150px",
  marginTop: "20px",
  height: "80px",
  width: " 260px",
  display: "flex",
  alignItems: "center",
};

const wallet = {
  marginRight: "12px",
};

const heading = {
  position: "relative",
  fontStyle: "normal",
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "#00427E",
  marginTop: "5px",
};

const section1 = {
  padding: "0 150px",
};

const diagram = {
  height: "250px",
  width: "250px",
  borderRadius: "50%",
  marginLeft: "120px",
  border: "10px solid #00427E",
};

const diagramContent = {
  height: "230px",
  width: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const title = {
  fontStyle: "normal",
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "#00427E",
};

const value = {
  display: "inline-block",
  fontStyle: "normal",
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "#00427E",
  letterSpacing: "-2px",
};

const currency = {
  display: "inline-block",
  fontStyle: "normal",
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "#00427E",
  letterSpacing: "0px",
};

const txContainer = {
  height: "288px",
  width: "620px",
  borderRadius: "10px",
  border: "2px solid #A6D2FB",
  float: "right",
  marginRight: "50px",
};

const txTitle = {
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "#00427E",
  marginLeft: "20px",
};

const txViewAll = {
  fontFamily: "Roboto",
  fontWeight: "medium",
  fontSize: "20px",
  color: "#000000",
  opacity: "50%",
  marginLeft: "auto",
  marginRight: "80px",
};

const txLine = {
  border: "1px solid #A6D2FB",
  margin: "8px 0",
};

const txHeaderDiv = {
  height: "40px",
  width: "600px",
  margin: "10px auto",
  paddingTop: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const txContentDiv = {
  height: "240px",
  width: "600px",
  margin: "auto auto",
  padding: "1px",
};

const txContent1 = {
  height: "40px",
  width: "550px",
  margin: "5px auto 15px auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const txStatusRed = {
  height: "14px",
  width: "14px",
  backgroundColor: "#FF4848",
  borderRadius: "50%",
  marginBottom: "9px",
};

const txStatusGreen = {
  height: "14px",
  width: "14px",
  backgroundColor: "#46E255",
  borderRadius: "50%",
  marginBottom: "9px",
};

const txText = {
  marginLeft: "15px",
  fontFamily: "Roboto",
  fontWeight: "medium",
};

const txDate = {
  marginLeft: "80px",
  fontFamily: "Roboto",
  fontWeight: "medium",
  color: "#4F4F4F",
};

const txValue = {
  marginLeft: "180px",
  fontFamily: "Roboto",
  fontWeight: "medium",
};

function MyWallet() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <div style={headingDiv}>
            <img src={walletSVG} style={wallet} />
            <h3 style={heading}>My Wallet</h3>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row" style={section1}>
          <div class="col-sm-4">
            <div style={diagram}>
              <div style={diagramContent}>
                <h4 style={title}>Total Value</h4>
                <h1 style={value}>
                  37.12 <h4 style={currency}>ETH</h4>
                </h1>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div style={txContainer}>
              <div style={txHeaderDiv}>
                <h3 style={txTitle}>Recent Transactions</h3>
                <a style={txViewAll}>View all {">"} </a>
              </div>
              <hr style={txLine} />
              <div style={txContentDiv}>
                <div style={txContent1}>
                  <div style={txStatusRed} />
                  <h5 style={txText}>Sell</h5>
                  <h6 style={txDate}>2020-09-12</h6>
                  <h5 style={txValue}>-130.00AEV</h5>
                </div>
                <div style={txContent1}>
                  <div style={txStatusGreen} />
                  <h5 style={txText}>Sell</h5>
                  <h6 style={txDate}>2020-09-12</h6>
                  <h5 style={txValue}>-130.00AEV</h5>
                </div>
                <div style={txContent1}>
                  <div style={txStatusRed} />
                  <h5 style={txText}>Sell</h5>
                  <h6 style={txDate}>2020-09-12</h6>
                  <h5 style={txValue}>-130.00AEV</h5>
                </div>
                <div style={txContent1}>
                  <div style={txStatusGreen} />
                  <h5 style={txText}>Sell</h5>
                  <h6 style={txDate}>2020-09-12</h6>
                  <h5 style={txValue}>-130.00AEV</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyWallet;

import React from "react";
//logos
import AzureLogo from "../Assets/azure.png";
import BootstrapLogo from "../Assets/bootstrap.png";
import MaterialUILogo from "../Assets/materialui.png";
import MsSQLLogo from "../Assets/mssql.png";
import NetCoreLogo from "../Assets/netcore.png";
import ReactLogo from "../Assets/react.jpg";
import ReduxLogo from "../Assets/redux.svg";
import VsCodeLogo from "../Assets/vscode.svg";
import SagaLogo from "../Assets/saga.png";

export default function Logos() {
  return (
    <div style={logoWrapper}>
      <img src={AzureLogo} alt="" style={logoImage} />
      <img src={MsSQLLogo} alt="" style={logoImage} />
      <img src={ReactLogo} alt="" style={logoImage} />
      <img src={MaterialUILogo} alt="" style={logoImage} />
      <img src={NetCoreLogo} alt="" style={logoImage} />
      <img src={ReduxLogo} alt="" style={logoImage} />
      <img src={VsCodeLogo} alt="" style={logoImage} />
      <img src={SagaLogo} alt="" style={logoImage} />
      <img src={BootstrapLogo} alt="" style={logoImage} />
    </div>
  );
}

const logoImage = {
  width: "220px",
  height: "220px",
  opacity: "0.1",
  margin: "10px"
};

const logoWrapper = {
  display: "flex",
  flexFlow: "wrap",
  justifyContent: "space-around",
  alignItems: "space-between"
};

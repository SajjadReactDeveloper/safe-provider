import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';
import { SafeAppProvider } from '@safe-global/safe-apps-provider';
import { useMemo } from 'react';

function App() {
  const { sdk, safe } = useSafeAppsSDK();
  const web3Provider = useMemo(() => new ethers.BrowserProvider(new SafeAppProvider(safe, sdk)), [sdk, safe]);
  console.log("🚀 ~ App ~ web3Provider:", web3Provider)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { createWeb3Modal } from "@web3modal/wagmi/react";

import defaultWagmiConfig from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Web3ModalComponent = () => {
  const queryClient = new QueryClient();
  const projectId = '608984d00734f1c6953ba992e11bd913';
  const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  };

  const chains = [mainnet, arbitrum];
  const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata
  });

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        {/* Your component JSX goes here */}
      </WagmiProvider>
    </QueryClientProvider>
  );
};

export default Web3ModalComponent;

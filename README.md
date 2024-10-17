# Locale Lending Frontend (React.js)

## Overview
This repository contains the frontend application for Locale Lending, a decentralized lending platform on the Arbitrum network.

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Locale-Network/LocaleLending-Frontend.git
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables (see Configuration section below)

4. Start the development server:
   ```bash
   yarn start
   ```

## Configuration

Create a `.env` file in the root directory and configure the following environment variables:

```
REACT_APP_RPC_URL=https://rpc.arb-blueberry.gelato.digital
REACT_APP_CONTRACT_ADDRESS=0xb1F3B0A0C518ce5b160cc93F0204FAD3a501e481
REACT_APP_BACKEND=http://localhost:5000/api/
GENERATE_SOURCEMAP=false
```

### Environment Variables

- `REACT_APP_RPC_URL`: RPC endpoint for the Arbitrum blueberry network
- `REACT_APP_CONTRACT_ADDRESS`: Ethereum address of the smart contract which is deployed from the contract repository
- `REACT_APP_BACKEND`: URL of the backend API
- `GENERATE_SOURCEMAP`: Flag to control source map generation (set to `false` for production builds)

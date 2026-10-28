/* =========================================================
   Configuration du contrat
   ========================================================= */
const CONTRACT_ADDRESS = "0x407931B3111C214D87614CD10d6bF81fE6c32381";
const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "__tokenURI",
        type: "string",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mintOnChain",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

/* =========================================================
   Configuration réseau (BSC Testnet par défaut)
   ========================================================= */
const TARGET_CHAIN_ID = "0x61"; // 97 = BSC Testnet
const TARGET_CHAIN_NAME = "BNB Smart Chain Testnet";
const TARGET_CHAIN_PARAMS = {
  chainId: TARGET_CHAIN_ID,
  chainName: TARGET_CHAIN_NAME,
  nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
  rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
  blockExplorerUrls: ["https://testnet.bscscan.com"],
};

/* =========================================================
   État global
   ========================================================= */
let signer = null;
let contract = null;

/* =========================================================
   Helpers UI
   ========================================================= */
const statusEl = document.getElementById("status");
const networkEl = document.getElementById("network");
const connectBtn = document.getElementById("connectBtn");
const mintBtn = document.getElementById("mintBtn");
const tokenURIInput = document.getElementById("tokenURI");

function setStatus(msg) {
  statusEl.innerText = msg;
}

function setNetwork(msg) {
  networkEl.innerText = msg;
}

/* =========================================================
   Vérification préalable de l'environnement
   ========================================================= */
function checkEnvironment() {
  if (typeof ethers === "undefined") {
    setStatus("ethers.js non chargé (CDN bloqué ?)");
    connectBtn.disabled = true;
    return false;
  }

  if (!window.ethereum) {
    setStatus(
      "Aucun wallet détecté. Installe MetaMask (ou autre) puis recharge la page. " +
        "Si tu ouvres le fichier en file://, sers-le via un serveur local (ex: npx serve).",
    );
    connectBtn.disabled = true;
    return false;
  }

  return true;
}

/* =========================================================
   Gestion du réseau
   ========================================================= */
async function ensureChain() {
  const currentChainId = await window.ethereum.request({
    method: "eth_chainId",
  });

  if (currentChainId === TARGET_CHAIN_ID) {
    setNetwork("Réseau : " + TARGET_CHAIN_NAME);
    return;
  }

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: TARGET_CHAIN_ID }],
    });
    setNetwork("Réseau : " + TARGET_CHAIN_NAME);
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [TARGET_CHAIN_PARAMS],
        });
        setNetwork("Réseau : " + TARGET_CHAIN_NAME + " (ajouté)");
      } catch (addError) {
        throw new Error("Impossible d'ajouter le réseau : " + addError.message);
      }
    } else {
      throw new Error(
        "Impossible de changer de réseau : " + switchError.message,
      );
    }
  }
}

/* =========================================================
   Connexion wallet
   ========================================================= */
async function connectWallet() {
  if (!checkEnvironment()) return;

  try {
    connectBtn.disabled = true;
    setStatus("Demande de connexion en cours...");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!accounts || accounts.length === 0) {
      setStatus("Aucun compte retourné par le wallet.");
      connectBtn.disabled = false;
      return;
    }

    await ensureChain();
    const provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const address = await signer.getAddress();
    setStatus("Connecté : " + address);
    mintBtn.disabled = false;
  } catch (err) {
    if (err.code === 4001) {
      setStatus("Connexion refusée par l'utilisateur.");
    } else {
      setStatus("Erreur de connexion : " + (err.message || err));
    }
    connectBtn.disabled = false;
    mintBtn.disabled = true;
  }
}

/* =========================================================
   Mint NFT
   ========================================================= */


async function mintNFT() {
  if (!contract || !signer) {
    setStatus("Connecte d'abord ton wallet.");
    return;
  }

  const uri = tokenURIInput.value.trim();
  if (!uri) {
    setStatus("Token URI requis.");
    return;
  }
  if (uri === "ipfs://TON_CID_JSON") {
    setStatus("Remplace le Token URI par le tien.");
    return;
  }

  try {
    mintBtn.disabled = true;

    await ensureChain();

    setStatus("Minting en cours... (valide dans MetaMask)");

    const recipient = await signer.getAddress();
    const tx = await contract.mintNFT(recipient, uri);

    setStatus(
      "Transaction envoyée (" + tx.hash + "). Attente de confirmation...",
    );

    const receipt = await tx.wait();

    setStatus(
      "Mint réussi !\n" +
        "Hash : " +
        tx.hash +
        "\n" +
        "Bloc : " +
        receipt.blockNumber,
    );
  } catch (err) {
    if (err.code === 4001) {
      setStatus("Transaction rejetée par l'utilisateur.");
    } else if (err.code === "ACTION_REJECTED") {
      setStatus("Transaction rejetée par l'utilisateur.");
    } else {
      const msg = err.shortMessage || err.message || String(err);
      setStatus("Erreur : " + msg);
    }
  } finally {
    mintBtn.disabled = false;
  }
}

/* =========================================================
   Écouteurs d'événements
   ========================================================= */
function bindEvents() {
  connectBtn.onclick = connectWallet;
  mintBtn.onclick = mintNFT;

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", async (accounts) => {
      if (!accounts || accounts.length === 0) {
        setStatus("Wallet déconnecté. Reconnecte-toi.");
        signer = null;
        contract = null;
        mintBtn.disabled = true;
        connectBtn.disabled = false;
        setNetwork("");
        return;
      }
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        const address = await signer.getAddress();
        setStatus("Compte changé : " + address);
      } catch (err) {
        setStatus("Erreur après changement de compte : " + err.message);
      }
    });

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  }
}

/* =========================================================
   Initialisation
   ========================================================= */
(function init() {
  bindEvents();

  if (!checkEnvironment()) return;

  setStatus("Prêt. Clique sur « Connect Wallet » pour commencer.");
  setNetwork("Réseau cible : " + TARGET_CHAIN_NAME);

  window.ethereum
    .request({ method: "eth_accounts" })
    .then(async (accounts) => {
      if (accounts && accounts.length > 0) {
        try {
          await ensureChain();
          const provider = new ethers.BrowserProvider(window.ethereum);
          signer = await provider.getSigner();
          contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
          const address = await signer.getAddress();
          setStatus("Déjà connecté : " + address);
          mintBtn.disabled = false;
        } catch (err) {
          setStatus("Prêt. Clique sur « Connect Wallet ».");
        }
      }
    })
    .catch(() => {});
})();

## **blockchain**

Blockchain sur Wikipédia est une technologie de stockage et de transmission d'informations sous forme de base de données décentralisée et sécurisée, sans organe central de contrôle. Les cryptomonnaies (comme le Bitcoin ou l'Ethereum) utilisent cette technologie pour enregistrer et valider les transferts de valeur.

## **NFT**

Un NFT (de l’anglais Non-Fungible Token, ou jeton non fongible en français) est un certificat numérique de propriété enregistré sur une blockchain.

### Qu'est-ce que « fongible et non fongible » ?

- **Fongible** : Un bien qui peut être échangé contre un autre strictement identique. Par exemple, un billet de 10 euros ou un Bitcoin (BTC) ont la même valeur et sont interchangeables.
- **Non fongible** : Un bien unique qui ne peut pas être remplacé par un autre car il possède des caractéristiques propres. C'est le cas d'une œuvre d'art originale, d'un tableau ou d'un NFT.

## **IPFS**

L'IPFS (InterPlanetary File System) est un protocole de stockage décentralisé de pair à pair (P2P) indispensable pour les NFT (jetons non fongibles), car la blockchain elle-même est trop coûteuse et limitée pour stocker de gros fichiers (images, vidéos, métadonnées).

## **CID**

Le CID signifie Content Identifier (Identifiant de Contenu). Il s'agit d'une empreinte numérique unique (un hash cryptographique) utilisée principalement sur les réseaux de stockage décentralisés comme IPFS (InterPlanetary File System) et Filecoin pour pointer vers un fichier ou un dossier spécifique.
Contrairement aux liens web traditionnels (URLs) qui indiquent où un fichier est stocké (adressage par emplacement), un CID identifie le fichier par ce qu'il contient (adressage par contenu). Si le contenu du fichier change, son CID change également.

### Comment IPFS fonctionne avec un NFT

- Séparation des données : La blockchain (comme Ethereum ou Solana) ne contient pas l'image du NFT ; elle contient uniquement un Token URI (un lien cryptographique) qui pointe vers les métadonnées et le fichier sur IPFS.
- Identifiant par contenu (CID) : Chaque fichier sur IPFS est identifié par un hachage unique appelé CID (Content Identifier). Si le fichier change d'un seul pixel, son CID change aussi, ce qui garantit qu'il n'a pas été falsifié.
- Adressage par le « quoi » et non par le « où » : Contrairement au web classique (HTTP) où l'on cherche une ressource sur un serveur centralisé (qui peut tomber en panne ou supprimer l'image), IPFS recherche le fichier partout sur son réseau distribué grâce à son empreinte unique.

### Pourquoi c'est important pour les NFT

- Immutabilité : Une fois le fichier enregistré et hébergé via IPFS (souvent par des services de « pinage » comme Pinata), le lien reste permanent et sécurisé contre la censure.
- Économie : Stocker une image ou une vidéo directement sur la blockchain coûterait des frais de transaction (gas) exorbitants à chaque modification ou création, tandis qu'IPFS déporte ce poids hors de la chaîne (off-chain).
- Prévention des « rug pulls » : Si un créateur d'art numérique hébergeait son image sur son propre site web classique (URL centralisée), il pourrait modifier ou supprimer l'image après la vente. Avec IPFS lié au CID dans la blockchain, l'œuvre visuelle associée au jeton reste inaltérable.

## **Token**

Un token (ou jeton numérique) est un actif virtuel créé et échanger sur une blockchain déjà existante (comme Ethereum, Solana ou BNB Chain) par le biais d'un contrat intelligent (smart contract)

## **Smart contract**

ou contrat intelligent est un programme informatique autonome stocké sur une blockchain (comme Ethereum, Solana ou Polygon) qui s'exécute automatiquement lorsque des conditions prédéfinies sont remplies.

## **ERC-721**

L'ERC-721 est une norme de contrats intelligents sur la blockchain Ethereum utilisée pour créer des jetons non fongibles (NFT), d'après la Norme de jeton non fongible ERC-721 | ethereum.org.

## **BEP-721**

Le BEP-721 est une norme de tokens sur la BNB Smart Chain (BSC) qui permet de créer des NFT (tokens non fongibles), comme expliqué dans le Glossaire BEP-721 de Binance.

## **Mint**

Le mint est la création d’un NFT. Le contrat attribue un identifiant unique et enregistre son propriétaire.

## **Métadonnées**

Ce sont les informations descriptives de ton œuvre, généralement au format JSON. Elles contiennent son nom, sa description, le nom de l’artiste et la référence de l’image.

## **MetaMask**

est un **portefeuille de cryptomonnaies (crypto wallet) non custodial**, développé par l'entreprise ConsenSys.

### Qu'est-ce que cela signifie ?

#### 1. Portefeuille non custodial (auto-hébergé)

Vous êtes le seul propriétaire de vos clés privées et de vos fonds. Personne d'autre, ni ConsenSys ni une banque, ne peut accéder directement à vos fonds.

> **Règle d'or :** _Not your keys, not your coins._

Si vous perdez votre phrase de récupération secrète, vous risquez de perdre définitivement l'accès à votre portefeuille.

#### 2. Multi-chaînes

Initialement conçu pour Ethereum, MetaMask prend désormais en charge plusieurs réseaux et blockchains, comme Polygon, Avalanche, BNB Smart Chain, Arbitrum, Optimism, Solana ou Bitcoin, selon les fonctionnalités disponibles.

#### 3. Formats disponibles

MetaMask est disponible sous deux formes :

- **Extension de navigateur :** Chrome, Firefox, Brave et Edge.
- **Application mobile :** iOS et Android.

## **testnet**

Un testnet (réseau de test) est une copie d'une blockchain utilisée comme environnement d'essai avant le lancement officiel sur le réseau principal (Mainnet). Il permet aux développeurs et aux utilisateurs d'expérimenter en toute sécurité.

## **OpenZeppelin**

pour créer des contrats intelligents (smart contracts) dans l'écosystème crypto. Fondée en 2015, cette entreprise fournit des standards de code ouverts et audités que la quasi-totalité des développeurs Web3 utilisent pour concevoir des jetons (tokens), des protocoles DeFi ou des NFT.

## **ERC721URIStorage**

est une extension (une option) de la norme de base ERC-721 (les NFT sur Ethereum) créée par OpenZeppelin pour gérer et stocker les métadonnées de chaque NFT individuellement.
Pour faire simple : le standard ERC-721 classique gère la propriété du NFT (qui possède quel Token ID), tandis que l'extension ERC721URIStorage permet de lier facilement chaque NFT à son propre lien unique (image, nom, description) directement sur la blockchain.

## **Ownable**

Ownable est un mécanisme de contrôle d'accès utilisé dans les smart contracts Solidity. Il permet de désigner une adresse comme propriétaire ou administrateur du contrat, puis de réserver certaines fonctions à cette adresse.

## **On-chain**
"On-chain" signifie littéralement "sur la blockchain".
Quand on dit qu'une donnée est "on-chain", cela veut dire que cette donnée est écrite, stockée et sauvegardée directement à l'intérieur des blocs de la blockchain (par exemple BNB Chain).

À l'inverse, "Off-chain" signifie "en dehors de la blockchain" (sur un serveur classique, sur IPFS, sur Amazon Web Services, etc.).

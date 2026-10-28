#  1.Préparer l'environnement

## 1.1 Installer MetaMask et ajouter le testnet BSC

Installe l'extension MetaMask dans ton navigateur, puis ajoute le réseau de test BNB Smart Chain manuellement :

| **Paramètre** | **Valeur**                                        | **Explication**                                                                                                           |
| :------------ | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Nom du réseau | BNB Smart Chain Testnet                           | Le nom que tu verras dans MetaMask. Tu peux le considérer comme une étiquette.                                            |
| URL RPC       | `https://bsc-testnet.publicnode.com` | L'adresse du serveur qui permet à MetaMask de communiquer avec la blockchain.                                             |
| Chain ID      | `97`                                              | L'identifiant numérique du réseau. Il permet notamment aux applications et aux transactions de cibler le bon réseau.      |
| Symbole       | `tBNB`                                            | Le symbole de la monnaie utilisée sur ce réseau de test. Elle sert notamment à payer les frais de transaction (gas fees). |
| Explorateur   | `https://testnet.bscscan.com`                     | Le site qui permet de consulter les transactions, les adresses et les contrats intelligents du réseau.                    |

Ces informations sont confirmées par la documentation officielle . Le Chain ID 97 est essentiel : si tu te trompes, les transactions échoueront.

## 1.2 Obtenir des tBNB gratuits

Va sur le faucet officiel de BNB Chain (https://www.bnbchain.org/en/testnet-faucet) et demande des tBNB. Tu en as besoin pour payer les frais de gas lors du déploiement . Tu peux généralement en obtenir toutes les 24 heures.

Ou sur leur bot Telegram @bnbchain_officiel_bot

## 1.3 Préparer le fichier image
Créez une image contenant le nombre 42. Vous pouvez utiliser Canva, Figma ou dessiner à la main puis prendre une photo. 

# 2.Téléverser l'image et les métadonnées sur IPFS (avec Pinata)

## 2.1 Téléverser l'image
1. Connectez-vous à [pinata.cloud](https://pinata.cloud/), créez un compte gratuit.
1. Cliquez sur Upload → sélectionnez votre image contenant « 42 ».
1. Après le téléversement, copiez le CID de l'image (une chaîne commençant par Qm... ou bafy...).

## 2.2 Créer le fichier de métadonnées JSON
Créez un fichier nft.json localement, en respectant strictement les exigences du sujet :
- name : doit contenir 42 et un titre (par exemple "TokenizeArt 42: Eagle")
- artist (ou champ personnalisé dans les attributs) : votre login
- image : ipfs://VOTRE_CID_IMAGE

```
{
  "name": "TokenizeArt 42: Eagle",
  "description": "Mon NFT TokenizeArt, contient 42.",
  "image": "ipfs://VOTRE_CID_IMAGE_ICI",
  "artist": "votre_login_42",
  "attributes": [
    { "trait_type": "Artist", "value": "votre_login_42" }
  ]
}
```

## 2.3 Téléverser le JSON sur IPFS
Dans Pinata, téléversez à nouveau **nft.json**, copiez le CID du fichier JSON. Ce CID sera utilisé comme **tokenURI**.


# 3.Rédiger le contrat intelligent (Solidity / ERC-721)

## Code du contrat
Coller ce code dans le fichier code/TokenizeArt42.sol

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenizeArt42 is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("TokenizeArt42", "TKA42") Ownable(msg.sender) {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 newTokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }
}
```


## Points à expliquer 
| Élément | Pourquoi |
|---|---|
| ERC721URIStorage | Permet de stocker le tokenURI de chaque NFT individuellement, pointant vers le CID IPFS du JSON |
| Ownable | Contrôle des permissions : seul le propriétaire du contrat peut appeler mintNFT, évitant ainsi que n'importe qui puisse frapper des NFT |
| _safeMint vs _mint | _safeMint vérifie si le destinataire est un contrat ; s'il s'agit d'un contrat, il vérifie qu'il peut recevoir des ERC-721, ce qui améliore la sécurité |
| _nextTokenId | Gestion manuelle des ID, plus intuitif que Counters, et Counters est déprécié dans les versions récentes |



# 4.Compiler et déployer avec Remix

# 4.1 Compiler
Ouvrez remix.ethereum.org, créez TokenizeArt42.sol et collez le code. Dans l'onglet Solidity Compiler, sélectionnez la version 0.8.20 (ou une version compatible 0.8.x), cliquez sur Compile.


# 4.2 Déployer
1. Dans l'onglet Deploy & Run Transactions, l'environnement sélectionne Injected Provider 1. MetaMask.
1. Assurez-vous que MetaMask est connecté à BNB Smart Chain Testnet.
1. Dans le menu déroulant Contract, sélectionnez TokenizeArt42, cliquez sur Deploy, confirmez dans MetaMask.
1. Après le déploiement, copiez l'adresse du contrat depuis la zone Deployed Contracts en bas.


# 4.3 Minter
1. Développez les fonctions du contrat déployé.
1. Dans mintNFT, saisissez :
    - recipient : votre adresse MetaMask
    - tokenURI : ipfs://VOTRE_CID_JSON (le CID du fichier JSON téléversé à l'étape II)
1. Cliquez sur mintNFT et confirmez la transaction.
1. Après confirmation, appelez ownerOf(0) pour vérifier que le propriétaire est bien votre adresse — le sujet exige explicitement de pouvoir démontrer la vérification du propriétaire via ownerOf.



**CID de l'image** : bafybeibvfcsnr3b7qcvoprz6hegwbtwhv5tdosaapmglwa7b4lpwm6t5r4
**CID des metadonnées (nft.json ou tokenURI)** : bafkreifq4cdgjyorvyeha2sospn6exi5td7dsa5agfcayuefrzph4lx6p4
**ID du contart**: 0xE0398adE4BD02b16895939BE49a5a692e190EFc7
**Adresse du contart**: https://testnet.bscscan.com/address/0xE0398adE4BD02b16895939BE49a5a692e190EFc7
https://testnet.bscscan.com/tx/0x382aa24c836e989a5bb35b7b21983f2a0f2388e247e4dd515cd98d4ca3a0209c



**Pourquoi BNB Smart Chain plutôt qu'Ethereum ?**
Parce que les frais de transaction sont quasi nuls et les confirmations très rapides, ce qui est idéal pour tester et déployer sans dépenser d'argent réel. De plus, le sujet impose la BNB Chain et fournit un faucet gratuit pour le testnet.


**Pourquoi Solidity et OpenZeppelin pour le ERC-721 ?**
Solidity est le langage natif des blockchains compatibles EVM, donc indispensable pour écrire un contrat ERC-721. OpenZeppelin fournit des contrats déjà audités et conformes au standard, ce qui garantit la sécurité et évite de réinventer la roue


**Pourquoi Pinata et le CID ?**
Pinata permet de stocker l'image sur IPFS de façon permanente et de récupérer un CID, qui est l'identifiant unique du fichier. Ce CID sera utilisé dans le tokenURI du NFT pour pointer vers l'image.


**Pourquoi avoir choisi ERC-721 plutôt qu’ERC-20 ?**
Parce que TokenizeArt demande un NFT représentant une œuvre unique. ERC-721 permet d’identifier chaque NFT et d’enregistrer son propriétaire, alors qu’ERC-20 sert à gérer des unités fongibles interchangeables.


**Pourquoi utiliser OpenZeppelin ?**
Pour réutiliser une implémentation du standard ERC-721 et un mécanisme de contrôle d’accès éprouvés, plutôt que de réimplémenter toutes ces fonctions manuellement.


**Pourquoi stocker l’image sur IPFS ?**
Pour séparer le fichier artistique des données de propriété enregistrées sur la blockchain. Le contrat conserve une URI vers les métadonnées, qui référencent l’image.


**Quelle est la différence entre déployer et minter ?**
Le déploiement publie le programme sur la blockchain. Le mint crée un NFT particulier en lui attribuant un identifiant, un propriétaire et une URI.


**Comment prouver que le NFT fonctionne ?**
En montrant la transaction de mint sur BscScan Testnet, le résultat de ownerOf(tokenId), le résultat de tokenURI(tokenId) et l’accès aux métadonnées et à l’image.


**Quelles sont les limites de ton implémentation ?**
Le mint est réservé au propriétaire du contrat, et l’URI vide est refusée. Cependant, le contrat ne vérifie pas que l’URI correspond à un JSON valide, ne garantit pas la disponibilité permanente du fichier IPFS et ne met pas en œuvre une interface graphique de mint.

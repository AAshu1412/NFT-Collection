// create a variable to hold our NFT's
const NFTs = [];

// this function will take in some values as parameters and store it in the variable above.
function mintNFT(_panda_name, _panda_hat, _panda_shirt, _panda_beard) {
  const NFT = {
    Panda_name: _panda_name[0].toUpperCase()+_panda_name.slice(1),   // This is for to make first letter of a string uppercase
    Panda_hat: _panda_hat[0].toUpperCase()+_panda_hat.slice(1),           
    Panda_shirt: _panda_shirt[0].toUpperCase()+_panda_shirt.slice(1),
    Panda_beard: _panda_beard[0].toUpperCase()+_panda_beard.slice(1),
  };
  NFTs.push(NFT);
  console.log("Minted: " + _panda_name);
}

//this function is for print their metadata
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: " + (i + 1));
    console.log("Panda_name: " + NFTs[i].Panda_name);
    console.log("Panda_hat: " + NFTs[i].Panda_hat);
    console.log("Panda_shirt: " + NFTs[i].Panda_shirt);
    console.log("Panda_beard: " + NFTs[i].Panda_beard);
  }
}

//this function is for print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal number of NFTs: " + NFTs.length);
}

// calling  functions
mintNFT("ashu", "crown", "hoodie", "imperial");
mintNFT("fluffy","turban","kimono","anchor");
mintNFT("tony","sombrero","suit","verdi");
listNFTs();
getTotalSupply();

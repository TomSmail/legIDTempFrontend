import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';

EXAMPLE_OBJECT_HASH = '0x1234567890';
EXAMPLE_OWNER_HASH  = '0x987654210';

const client = new SuiClient({ url: getFullnodeUrl('localnet') });


//          **** --- API --- ****

// query NFT from client
function getNFT(object = EXAMPLE_OBJECT_HASH) {
    return client.getObject(object);
}

// Query all of the nfts owned by an address to return their product
function getAllNFTs(owner = EXAMPLE_OBJECT_HASH) {
    const objects = await client.getOwnedObjects({
        owner: owner,
    });

    return objects
}



// Displaying the legid logo
function displayLogo(url) {
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("class", "img-logo");
    return img;
}

// Displaying NFTS on profile by their file path or url.
function displayNFT(url) {
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("class", "img-nft");
    return img;
}

function NFTinfoDisplay(info ) {
    // converts JSON data taken from NFT in blockchain to HTML table for extension
   function convert() {
       let jsonData = [
           {
               transit_status: "{transit_status}",
               epoch_stamp: "{epoch_stamp}",
               collection_number: "{collection_number}",
               current_owner: "{current_owner}",
               transaction_history: "{transaction_history}",
               original_minter: "{original_minter}"
           }
       ];
       // container element for table to be inserted
       let container = document.getElementById("container");
       // table element
       let table = document.createElement("table")
       // keys of first object in JSON
       let cols = Object.keys(jsonData[0]);
       // header element
       let thread = document.createElement("thread");
       let tr = document.createElement("tr");
       
       // loop through column names to create headers
       cols.forEach((item) => {
           let th = document.createElement("th");
           th.innerText = item;
           // header cell to header row
           tr.appendChild(th);
       });
       // header row to header
       thread.appendChild(tr);
       // header to table
       table.append(tr)

       // loop through values and create table cells
       jsonData.forEach((item) => {
           let tr = document.createElement("tr");
           let vals = Object.values(item);

           vals.forEach((elem) => {
               let td = document.createElement("td");
               // text to table cell
               td.innerText = elem;
               // table cell to table row
               tr.appendChild(td);
           });
           // table row to table
           table.appendChild(tr);
       });
       // table to container
       container.appendChild(table)

   }
}


function main(){
    var img = displayLogo('legid-removebg-preview.png');
    document.body.appendChild(img);

    nft_data = getNFT();
    NFTinfoDisplay.convert(nft_data);
}

main();
// NOTE: THIS HAS BEEN COMMENTED OUT AS WE WERE UNABLE TO GET THE IMPORTS WORKING SO IT IS CURRENLY MOCKED.


// import { getFullnodeUrl, SuiClient } from './node_modules/@mysten/sui.js/client';

// EXAMPLE_OBJECT_HASH = '0x1234567890'

// const client = new SuiClient({ url: getFullnodeUrl('localnet') });

// function getObject(object = EXAMPLE_OBJECT_HASH) {
//     client.getObject(object);
// }


function displayNFT(url) {
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("class", "img-nft");
    return img;
}

function displayLogo(url) {
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("class", "img-logo");
    return img;
}

function item_profile_popup(nftUrl) {
    var logo = displayLogo('legid.png');
    // var text = NFTinfoDisplay("info");
    document.body.appendChild(logo);
}

// Pass nftInfo as a list of object with each object being of the same type as 

function profile_popup(nftInfo) {

    var logo = displayLogo('legid.png');
    document.body.appendChild(logo);
    for (let i = 1; i < 5;  i++) {
        var img = displayNFT(`${i}.png`);
        document.body.appendChild(img);
    }
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

profile_popup();


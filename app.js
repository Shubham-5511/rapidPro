'use strict';

const _ = require('lodash');
const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('file.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const columnA = [];

for (let z in worksheet) {
  if(z.toString()[0] === 'C'){
    columnA.push(worksheet[z].v);
  }
}

//console.log(columnA);

const rapidPro_Chunks = {
  version:"13",
  flows:[
    {
      language:"eng",
      name:"shubham_flow",
      nodes:[
        {
            actions:[
              {
              text:"demo",
              type:"send_msg",
              uuid:"1737e62b-f492-467f-81d3-c08494c8e62e"
            }
          ],
          exits: [
            {
              destination_uuid: null,
              uuid: "dec841ad-ff36-4bcc-89ac-5a7c943e40f0"
            }
          ],
          uuid:"33639478-4967-406e-a41b-96a1e4e2d61b"
        }
      ],
      spec_version: "13.1.0",
      type: "messaging",
      uuid: "09d90a1a-43f2-4351-bfa1-d8d70ed93d25",
      revision: 23
    }
  ]
}

// columnA.forEach(element=>{
//   rapidPro_Chunks.flow[0].nodes[0].action[0].text = element;
//   console.log(element);
// });
// console.log(rapidPro_Chunks);
// console.log(rapidPro_Chunks.flow[0].nodes[0].action[0].text);
let number,number2,number3;
function randomNumber(){
  number = Math.random()*(9);
  number2 = Math.random()*(9)+10;
  number3 = Math.random()*(9)+100;
  number = Math.round(number)
  number2 =Math.round(number2);
  number3 =Math.round(number3);
  console.log(number3);
}
columnA.map(text=>{
              randomNumber();
        rapidPro_Chunks.flows[0]['nodes'].push(
                        {
                actions:[
                  {
                  text:text,
                  type:"send_msg",
                  uuid:"1737e62b-f492-4"+number+"7f-81d3-c08494c8e6"+number+"e"
                }
              ],
              exits: [
                {
                  destination_uuid: null,
                  uuid: "dec"+number2+"1ad-ff36-4bcc-89ac-5a7c"+number2+"3e40f0"
                }
              ],
              uuid:"336"+number3+"78-4967-"+number3+"e-a41b-96a1e4e2d61b"
                        }
            )
            }
            )
console.log(JSON.stringify(rapidPro_Chunks.flow[0]['nodes'][2]['actions']));
//console.log(rapidPro_Chunks);
let jsonString = JSON.stringify(rapidPro_Chunks);
//
fs.writeFile('importFile.json', jsonString, function (err) {
  if (err) return console.log(err);
  console.log('working');
});

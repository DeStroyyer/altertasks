//console.log("hello");
'use strict'

let names = ["VALERIA", "VIKA", "ANNA", "KOLYA", "EM"];
console.log(names);
let tempNames = [];
let returnObj = [];
let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let map = new Map();
let revertMap = new Map();
let i = 10;
let j = 0;
while (i < 36) {
    map.set(arr[j], i)
    revertMap.set(i, arr[j]);
    i++;
    j++
}
for (let k = 0; k < names.length; k++) {
    let tempName = "";
    let temp = names[k];
    for (let l = 0; l < temp.length; l++) {
        tempName = tempName + map.get(temp[l]);

    }
    tempNames.push(tempName);
}
;
//console.log(map);
//console.log(revertMap);
console.log(tempNames);

let customLength = tempNames.length;
for (let a = 0; a < customLength; a++) {
    for (let b = 0; b < customLength - a; b++) {
        if (tempNames[b] > tempNames[b + 1]) {
            let temptemp = tempNames[b];
            tempNames[b] = tempNames[b + 1];
            tempNames[b + 1] = temptemp;
        }
    }
}
console.log(tempNames);

for (let i = 0; i < tempNames.length; i++) {
    let newName = tempNames[i];
    //   console.log(newName);
    let newTrueName = "";
    for (let x = 0; x < newName.length; x + 2) {
    //    console.log(revertMap.get(+newName[x] + +newName[x + 1]));

        newTrueName = newTrueName + revertMap.get(Number((newName[x] + newName[x + 1])));
    }
    returnObj.push(newTrueName);
}
console.log(returnObj);
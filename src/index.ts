import Perceptron from "./perceptron";

let perceptron : Perceptron = new Perceptron([11, 9, 7, 5]);
console.log("--------Perseptron created---------");
console.log(perceptron);
console.log("Neurons:\n");
for(let i : number = 0; i < perceptron.arrayLayers.length; i++){
    let str : string = "";
    for(let j : number = 0; j < perceptron.arrayLayers[i].arrayNeurons.length; j++){
        str += perceptron.arrayLayers[i].arrayNeurons[j].value + " ";
        //console.log(perceptron.arrayLayers[i].arrayNeurons[j].value);
    }
    console.log(str + "\n");
}

//perceptron.countingHiddenLayers();
console.log("Neurons:\n");
for(let i : number = 0; i < perceptron.arrayLayers.length; i++){
    let str : string = "";
    for(let j : number = 0; j < perceptron.arrayLayers[i].arrayNeurons.length; j++){
        str += perceptron.arrayLayers[i].arrayNeurons[j].value + " ";
        //console.log(perceptron.arrayLayers[i].arrayNeurons[j].value);
    }
    console.log(str + "\n");
}
import Layer from "./layer";

class Neuron {
    value : number;
    error : number;

    constructor(value : number, error : number){
        this.value = value;
        this.error = error;
    }

    //TODO добавить кол-во нейроннов в слое разделить на кол-во нейронов * 2
    adder = (previousLayer: Layer, arrayWeigth : number[]) : number => {
        let sum : number = 0;
        for(let i : number = 0; i < previousLayer.arrayNeurons.length; i++){
            sum = sum + previousLayer.arrayNeurons[i].value * arrayWeigth[i];
        }
        return sum;
    }

    activationFunction = (previousLayer: Layer, arrayWeigth : number[]) : number => {
        return 1 / (1 + Math.pow(Math.E, (-this.adder(previousLayer, arrayWeigth))));
    }
}

const copyNeuron = (neuron : Neuron) =>{
    let newNeuron : Neuron = new Neuron(neuron.value, neuron.value);
    return newNeuron;
}

export {Neuron, copyNeuron};
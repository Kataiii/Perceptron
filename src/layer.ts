import Neuron from "./neuron";
import Weigth from "./weigth";


class Layer{
    arrayNeurons : Neuron[] = [];
    additionalNeuron : Neuron = new Neuron();

    constructor(countNeurons : number){
        this.arrayNeurons = new Array<Neuron>(countNeurons);

        for(let i = 0; i < countNeurons; i++){
            this.arrayNeurons[i] = new Neuron();
        }
    }

    countingNeuronsInLayer = (previousLayer : Layer, weigths : Weigth) => {
        for(let i = 0; i < this.arrayNeurons.length - 1; i++){
            this.arrayNeurons[i].value = this.arrayNeurons[i].activationFunction(previousLayer, weigths.arrayWeigth[i]);
        }
    }
}

export default Layer;
import {Neuron} from "./neuron";
import Weigth from "./weigth";


class Layer{
    arrayNeurons : Neuron[] = [];
    additionalNeuron : Neuron = new Neuron(1, 0);

    constructor(countNeurons : number){
        this.arrayNeurons = Array.from(Array(countNeurons), (_, index) => new Neuron(1, 0));

        //for(let i = 0; i < countNeurons; i++){
        //}
    }

    countingNeuronsInLayer = (previousLayer : Layer, weigths : Weigth) => {
        this.arrayNeurons = this.arrayNeurons.map((item, index) => 
                        new Neuron(item.activationFunction(previousLayer, weigths.arrayWeigth[index]), item.error));
        // for(let i = 0; i < this.arrayNeurons.length - 1; i++){
        //     this.arrayNeurons[i].value = this.arrayNeurons[i].activationFunction(previousLayer, weigths.arrayWeigth[i]);
        // }
    }
}

export default Layer;
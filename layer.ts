import Neuron from "./neuron";
import Weigth from "./weigth";


class Layer{
    arrayNeurons : Neuron[];

    countingNeuronsInLayer = (previousLayer : Layer, weigths : Weigth) => {
        for(let i = 0; i < this.arrayNeurons.length; i++){
            this.arrayNeurons[i].value = this.arrayNeurons[i].activationFunction(previousLayer, weigths[i]);
        }
    }
}

export default Layer;
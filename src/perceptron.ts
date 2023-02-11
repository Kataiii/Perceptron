import Layer from "./layer";
import Weigth from "./weigth";


class Perceptron{
    arrayLayers : Layer[] = [];
    arrayWeigths : Weigth[] = [];

    //TODO дописать конструктор 
    constructor(countNeuronsInLayers : number[]){
        for(let i : number = 0; i < countNeuronsInLayers.length; i++){
            this.arrayLayers.push(new Layer(i));
        }

        for(let i : number = 0; i < countNeuronsInLayers.length -1; i++){
            this.arrayWeigths.push(new Weigth(this.arrayLayers[i].arrayNeurons.length, 
                                                this.arrayLayers[i + 1].arrayNeurons.length));
        }
    }

    // countingIncommingLayer = () => {

    // }

    countingHiddenLayers = () => {
        for(let i : number = 1; i < this.arrayLayers.length; i++){
            this.arrayLayers[i].countingNeuronsInLayer(this.arrayLayers[i-1],this.arrayWeigths[i]);
        }
    }

    // countingExitingLayer = () => {

    // }
}

export default Perceptron;
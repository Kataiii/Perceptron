import Layer from "./layer";
import Weigth from "./weigth";


class Perceptron{
    arrayLayers : Layer[] = [];
    arrayWeigths : Weigth[] = [];

    constructor(countNeuronsInLayers : number[]){
        for(let i : number = 0; i < countNeuronsInLayers.length; i++){
            this.arrayLayers.push(new Layer(countNeuronsInLayers[i]));
        }

        for(let i : number = 0; i < countNeuronsInLayers.length -1; i++){
            this.arrayWeigths.push(new Weigth(this.arrayLayers[i].arrayNeurons.length, 
                                                this.arrayLayers[i + 1].arrayNeurons.length));
        }
    }

    countingHiddenLayers = () => {
        for(let i : number = 1; i < this.arrayLayers.length; i++){
            this.arrayLayers[i].countingNeuronsInLayer(this.arrayLayers[i - 1],this.arrayWeigths[i - 1]);
        }
    }

    calculateError = (arrayData : number[][], correctOutputData : number[][]) => {
        let error : number = 0;
        let arrayRes : number[] = [];
        for(let i : number = 0; i < arrayData.length; i++){

            for(let j : number = 0; j < arrayData[i].length; j++){
                this.arrayLayers[i].arrayNeurons[j].value = arrayData[i][j];
            }

            this.countingHiddenLayers();

            for(let j : number = 0; j < this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons.length; j++){
                arrayRes.push(this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons[j].value);

                if(correctOutputData[i][j] != arrayRes[j]){
                    error ++;
                }
            }
        }

        return error / correctOutputData.length;
    }
}

export default Perceptron;
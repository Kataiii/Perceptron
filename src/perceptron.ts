import Layer from "./layer";
import Neuron from "./neuron";
import Weigth from "./weigth";


class Perceptron{
    arrayLayers : Layer[] = [];
    arrayWeigths : Weigth[] = [];
    trainingSpeed : number = 0.1;

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
                this.arrayLayers[0].arrayNeurons[j].value = arrayData[i][j];
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

    learningWithTeacher = (arrayData : number[], correctOutputData : number[]) => {

        for(let i : number = 0; i < arrayData.length; i++){
            this.arrayLayers[0].arrayNeurons[i].value = arrayData[i];
        }

        this.countingHiddenLayers();

        let arrayNeurons : Neuron[] = new Array<Neuron>(this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons.length);
        for(let i : number = 0; i < arrayNeurons.length; i++){
            arrayNeurons[i].error = -(correctOutputData[i] - arrayNeurons[i].value) * 
                                    arrayNeurons[i].value * (1 - arrayNeurons[i].value);
        }

        //Расчет внутренних слоев
        for(let i : number = this.arrayWeigths.length; i > 0; i--){
            for(let j : number = 0; this.arrayWeigths[i - 1].arrayWeigth.length; j++){
                for(let k : number = 0; this.arrayWeigths[i - 1].arrayWeigth[j].length; k++){
                    this.arrayWeigths[i - 1].deltaArrayWeigth[j][k] = this.trainingSpeed * 
                                                                    this.arrayLayers[i - 1].arrayNeurons[k].value * arrayNeurons[j].error;
                }
                this.arrayWeigths[i - 1].deltaAdditionalWeigth[j] = this.trainingSpeed * 
                                                                    this.arrayLayers[i - 1].additionalNeuron.value * arrayNeurons[j].error;
            }

            if(i - 1 != 0){
                arrayNeurons = this.arrayLayers[i - 1].arrayNeurons;
                let arrayPreviousNeurons : Neuron[] = this.arrayLayers[i].arrayNeurons;
                for(let j : number = 0; j < arrayNeurons.length; j++){
                    let sum : number = 0;
                    for(let k : number = 0; k < arrayPreviousNeurons.length; k++){
                        sum += arrayPreviousNeurons[k].error * this.arrayWeigths[i -1].arrayWeigth[k][j];
                    }
                    arrayNeurons[j].error = sum * arrayNeurons[j].value * (1 - arrayNeurons[j].value);
                }
            }
        }

        for(let i : number = 0; i < this.arrayWeigths.length; i++){
            this.arrayWeigths[i].chengeWeigth();
        }
    }
}

export default Perceptron;
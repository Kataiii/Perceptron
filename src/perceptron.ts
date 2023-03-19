import Layer from "./layer";
import { Neuron, copyNeuron } from "./neuron";
import Weigth from "./weigth";

type PerceptronContructorArgs = Required<Partial<Pick<Perceptron, 'arrayLayers' | 'trainingSpeed' | 'arrayWeigths'>>>;

class Perceptron {
    arrayLayers: Layer[] = [];
    arrayWeigths: Weigth[] = [];
    trainingSpeed: number = 0.1;


    constructor(args: PerceptronContructorArgs) {
        this.arrayLayers = Array.from(args.arrayLayers);
        this.arrayWeigths = Array.from(args.arrayWeigths);
        this.trainingSpeed = args.trainingSpeed;
    }

    static fromCountNeuronsInLayers(count: number[]) {
        const layers: Layer[] = Array.from(count, (_, index) => new Layer(count[index]));
        const weigths: Weigth[] = [];
        for (let i: number = 0; i < count.length - 1; i++) {
            weigths.push(new Weigth(
                layers[i].arrayNeurons.length,
                layers[i + 1].arrayNeurons.length)
            );
        }
        return new Perceptron({arrayLayers: layers, arrayWeigths: weigths, trainingSpeed: 0.1})
    }

    private copyWith(fields: Partial<Perceptron>) {
        return new Perceptron({
            arrayLayers: fields.arrayLayers ?? this.arrayLayers,
            arrayWeigths: fields.arrayWeigths ?? this.arrayWeigths,
            trainingSpeed: fields.trainingSpeed ?? this.trainingSpeed
        });
    }

    public countingHiddenLayers() {
        //console.log(this.arrayWeigths);
        let str : string = '';;
        for (let i: number = 1; i < this.arrayLayers.length; i++) {
            this.arrayLayers[i].countingNeuronsInLayer(this.arrayLayers[i - 1], this.arrayWeigths[i - 1]);
        }
        for(let i: number = 1; i < this.arrayLayers[3].arrayNeurons.length; i++){
            str += this.arrayLayers[3].arrayNeurons[i].value + ' ';
        }
        console.log(str);
        // console.log('--------------');
        // console.log(this.arrayWeigths);
    }

    calculateError(arrayData: number[][], correctOutputData: number[][]) {
        let error: number = 0;
        let arrayRes: number[] = [];
        for (let i: number = 0; i < arrayData.length; i++) {

            for (let j: number = 0; j < arrayData[i].length; j++) {
                this.arrayLayers[0].arrayNeurons[j].value = arrayData[i][j];
            }

            this.countingHiddenLayers();

            for (let j: number = 0; j < this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons.length; j++) {
                arrayRes.push(this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons[j].value);

                if (correctOutputData[i][j] != arrayRes[j]) {
                    error++;
                }
            }
        }
        return error / (correctOutputData[0].length * correctOutputData.length);
    }

    learningWithTeacher(arrayData: number[], correctOutputData: number[]) {

        const oldLayer: Layer = { ...this.arrayLayers[0] };
        const newLayer: Layer = { ...oldLayer, arrayNeurons: oldLayer.arrayNeurons.map((item, index) => new Neuron(arrayData[index], item.error)) }
        this.arrayLayers[0] = newLayer;
        //console.log('--------------data--------------', arrayData);
        // console.log('--------------1--------------', this.arrayLayers[0].arrayNeurons);
        // console.log('--------------perceptron--------------', this);
        this.countingHiddenLayers();
        //console.log('--------------Layers--------------', this.arrayLayers[3]);

        let arrayNeurons: Neuron[] = new Array<Neuron>(this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons.length);
        for (let i: number = 0; i < arrayNeurons.length; i++) {
            arrayNeurons[i] = copyNeuron(this.arrayLayers[this.arrayLayers.length - 1].arrayNeurons[i]);
            arrayNeurons[i].error = -(correctOutputData[i] - arrayNeurons[i].value) *
                arrayNeurons[i].value * (1 - arrayNeurons[i].value);
        }

        //console.log(arrayNeurons[arrayNeurons.length - 1].error);


        //Расчет внутренних слоев
        for (let i: number = this.arrayWeigths.length; i > 0; i--) {
            for (let j: number = 0; j < this.arrayWeigths[i - 1].arrayWeigth.length; j++) {
                for (let k: number = 0; k < this.arrayWeigths[i - 1].arrayWeigth[j].length; k++) {
                    this.arrayWeigths[i - 1].deltaArrayWeigth[j][k] = this.trainingSpeed
                    this.arrayLayers[i - 1].arrayNeurons[k].value * arrayNeurons[j].error;
                }
                this.arrayWeigths[i - 1].deltaAdditionalWeigth[j] = this.trainingSpeed *
                    this.arrayLayers[i - 1].additionalNeuron.value * arrayNeurons[j].error;
            }

            if (i - 1 != 0) {
                arrayNeurons = this.arrayLayers[i - 1].arrayNeurons;
                let arrayPreviousNeurons: Neuron[] = this.arrayLayers[i].arrayNeurons;
                for (let j: number = 0; j < arrayNeurons.length; j++) {
                    let sum: number = 0;
                    for (let k: number = 0; k < arrayPreviousNeurons.length; k++) {
                        sum += arrayPreviousNeurons[k].error * this.arrayWeigths[i - 1].arrayWeigth[k][j];
                    }
                    arrayNeurons[j].error = sum * arrayNeurons[j].value * (1 - arrayNeurons[j].value);
                }
            }
        }

        for (let i: number = 0; i < this.arrayWeigths.length; i++) {
            this.arrayWeigths[i].chengeWeigth();
        }
    }
}

export default Perceptron;


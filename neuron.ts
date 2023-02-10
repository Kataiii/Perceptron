class Neuron {
    value: number;
    arrayWeigth : number[];

    adder = (previousLayer: Layer) : number => {
        let sum : number = 0;
        for(let i : number = 0; i < previousLayer.arrayNeurons.length; i++){
            sum = sum + previousLayer.arrayNeurons[i] * this.arrayWeigth[i];
        }
        return sum;
    }

    activationFunction = (previousLayer: Layer) => {
        this.value = 1 / (1 + Math.pow(Math.E, -this.adder(previousLayer)));
    }
}

export default Neuron;
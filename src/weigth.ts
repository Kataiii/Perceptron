class Weigth{
    arrayWeigth : number[][];
    additionalWeigth : number[];
    deltaArrayWeigth : number[][];
    deltaAdditionalWeigth : number[];

    constructor(previousLayerLength: number, currentLayerLength : number){
        this.arrayWeigth = new Array<Array<number>>(currentLayerLength);
        for(let i : number = 0; i < currentLayerLength; i++){
            this.arrayWeigth[i] = new Array<number>(previousLayerLength);
        }

        for(let i : number = 0; i < currentLayerLength; i++){
            for(let j : number = 0; j < previousLayerLength; j++){
                this.arrayWeigth[i][j] = Math.floor(Math.random() * 101)/ 100;
            }
        }

        this.deltaArrayWeigth = new Array<Array<number>>(currentLayerLength);
        for(let i : number = 0; i < currentLayerLength; i++){
            this.deltaArrayWeigth[i] = new Array<number>(previousLayerLength);
        }

        this.additionalWeigth = new Array<number>(currentLayerLength);
        this.deltaAdditionalWeigth = new Array<number>(currentLayerLength);

        for(let i : number = 0; i < this.additionalWeigth.length; i++){
            this.additionalWeigth[i] = (( Math.floor(Math.random() * (2001 - 0 + 1)) + 2001)-  1000)/1000;
        }
    }

    chengeWeigth = () =>{
        for(let i : number = 0; i < this.arrayWeigth.length; i++){
            for(let j : number = 0; j < this.arrayWeigth[0].length; j++){
                this.arrayWeigth[i][j] -= this.deltaArrayWeigth[i][j];
                this.deltaArrayWeigth[i][j] = Number(0);
            }

            this.additionalWeigth[i] -= this.deltaAdditionalWeigth[i];
            this.deltaAdditionalWeigth[i] = 0;
        }
    }
}

export default Weigth;
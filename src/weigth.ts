class Weigth{
    arrayWeigth : number[][];
    additionalWeigth : number[];
    deltaArrayWeigth : number[][];
    deltaAdditionalWeigth : number[];

    constructor(previousLayerLength: number, currentLayerLength : number){
        this.arrayWeigth = new Array<Array<number>>(currentLayerLength);
        this.arrayWeigth.fill(new Array<number>(previousLayerLength));
        for(let i : number = 0; i < currentLayerLength; i++){
            this.arrayWeigth[i] = new Array<number>(previousLayerLength);
            this.arrayWeigth[i].fill(0);
            this.arrayWeigth[i] = this.arrayWeigth[i].map(item => item = Math.random());
        }

        this.deltaArrayWeigth = new Array<Array<number>>(currentLayerLength);
        for(let i : number = 0; i < currentLayerLength; i++){
            this.deltaArrayWeigth[i] = new Array<number>(previousLayerLength);
            this.deltaArrayWeigth[i].fill(0);
        }

        this.additionalWeigth = new Array<number>(currentLayerLength);
        this.additionalWeigth.fill(0);
        this.additionalWeigth = this.additionalWeigth.map(item => item = Math.random());

        this.deltaAdditionalWeigth = new Array<number>(currentLayerLength);
        this.deltaAdditionalWeigth.fill(0);

        // for(let i : number = 0; i < this.additionalWeigth.length; i++){
        //     this.additionalWeigth[i] = ((Math.floor(Math.random() * (2001 + 1)) + 2001) - 1000)/1000;
        // }
    }

    chengeWeigth = () =>{
        for(let i : number = 0; i < this.arrayWeigth.length; i++){
            this.arrayWeigth[i] = this.arrayWeigth[i].map((item, index) => item = item - this.deltaArrayWeigth[i][index]);
            // for(let j : number = 0; j < this.arrayWeigth[0].length; j++){
            //     //console.log('PrefchengeWeigth ' + this.arrayWeigth[i][j]);
            //     this.arrayWeigth[i][j] = this.arrayWeigth[i][j] - this.deltaArrayWeigth[i][j];
            //     //console.log('chengeWeigth ' + this.arrayWeigth[i][j]);
            //     this.deltaArrayWeigth[i][j] = Number(0);
            // }
            
            //this.additionalWeigth[i] = this.additionalWeigth[i] - this.deltaAdditionalWeigth[i];
            //this.deltaAdditionalWeigth[i] = 0;
        }

        this.additionalWeigth = this.additionalWeigth.map((item, index) => item = item - this.deltaAdditionalWeigth[index]);
        //console.log(this.deltaAdditionalWeigth);
        this.deltaAdditionalWeigth.fill(0);
    }
}

export default Weigth;
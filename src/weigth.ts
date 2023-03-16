class Weigth{
    arrayWeigth : number[][];
    additionalWeigth : number[];
    deltaArrayWeigth : number[][];
    deltaAdditionalWeigth : number[];

    constructor(previousLayerLength: number, currentLayerLength : number){
        this.arrayWeigth = new Array<Array<number>>(currentLayerLength);
        console.log(this.arrayWeigth);
        this.arrayWeigth.fill(new Array<number>(previousLayerLength));
        console.log(this.arrayWeigth);
        console.log('---------------');
        for(let i : number = 0; i < currentLayerLength; i++){
            this.arrayWeigth[i] = new Array<number>(previousLayerLength);
            this.arrayWeigth[i].fill(0);
            console.log('array i');
            console.log(this.arrayWeigth[i]);
            this.arrayWeigth[i] = this.arrayWeigth[i].map(item => Math.random());
            console.log('array i');
            console.log(this.arrayWeigth[i]);
            // for(let j : number = 0; j < previousLayerLength; j++){
            //     let num : number = ((Math.floor(Math.random() * (2001 + 1)) + 2001) - 1000)/1000;
            //     this.arrayWeigth[i][j] = num;
            //     console.log('num ' + num);
            //     console.log(this.arrayWeigth[i][j]);
            //     // if(this.arrayWeigth[i][j] < 0) {
            //     //     console.log('qwerty');
            //     //     this.arrayWeigth[i][j] *= -1;
            //     // }
            // }
        }

        console.log('-------------------------------------------------------');
        console.log('weigth');
        console.log(this.arrayWeigth);

        // for(let i : number = 0; i < currentLayerLength; i++){
        //     for(let j : number = 0; j < previousLayerLength; j++){
        //         this.arrayWeigth[i][j] = ((Math.floor(Math.random() * (2001 + 1)) + 2001) - 1000)/1000;

        //         console.log(this.arrayWeigth[i][j]);
        //         // if(this.arrayWeigth[i][j] < 0) {
        //         //     console.log('qwerty');
        //         //     this.arrayWeigth[i][j] *= -1;
        //         // }
        //     }
        // }
        //console.log(this.arrayWeigth);

        this.deltaArrayWeigth = new Array<Array<number>>(currentLayerLength);
        for(let i : number = 0; i < currentLayerLength; i++){
            this.deltaArrayWeigth[i] = new Array<number>(previousLayerLength);
        }

        this.additionalWeigth = new Array<number>(currentLayerLength);
        this.deltaAdditionalWeigth = new Array<number>(currentLayerLength);

        for(let i : number = 0; i < this.additionalWeigth.length; i++){
            this.additionalWeigth[i] = ((Math.floor(Math.random() * (2001 + 1)) + 2001) - 1000)/1000;
        }

        console.log('perceptron in constr');
        console.log(this);
    }

    chengeWeigth = () =>{
        for(let i : number = 0; i < this.arrayWeigth.length; i++){
            for(let j : number = 0; j < this.arrayWeigth[0].length; j++){
                //console.log('PrefchengeWeigth ' + this.arrayWeigth[i][j]);
                this.arrayWeigth[i][j] = this.arrayWeigth[i][j] - this.deltaArrayWeigth[i][j];
                //console.log('chengeWeigth ' + this.arrayWeigth[i][j]);
                this.deltaArrayWeigth[i][j] = Number(0);
            }

            this.additionalWeigth[i] = this.additionalWeigth[i] - this.deltaAdditionalWeigth[i];
            this.deltaAdditionalWeigth[i] = 0;
        }
    }
}

export default Weigth;
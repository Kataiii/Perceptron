class Weigth{
    //arrayWeigth : number[][] = [];
    arrayWeigth : number[][];

    constructor(previousLayerLength: number, currentLayerLength : number){
        this.arrayWeigth = new Array<Array<number>>(previousLayerLength);
        for(let i : number = 0; i < currentLayerLength; i++){
            this.arrayWeigth[i] = new Array<number>(currentLayerLength);
        }

        for(let i : number = 0; i < previousLayerLength; i++){
            for(let j : number = 0; i < currentLayerLength; i++){
                this.arrayWeigth[i][j] = Math.floor(Math.random() * 101)/ 100;
            }
        }
    }
}

export default Weigth;
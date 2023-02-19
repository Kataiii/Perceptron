class Weigth{
    //arrayWeigth : number[][] = [];
    arrayWeigth : number[][];

    constructor(previousLayerLength: number, currentLayerLength : number){
        console.log('Weigth : '+ previousLayerLength + " " + currentLayerLength);
        this.arrayWeigth = new Array<Array<number>>(previousLayerLength);
        for(let i : number = 0; i < previousLayerLength; i++){
            this.arrayWeigth[i] = new Array<number>(currentLayerLength);
        }

        for(let i : number = 0; i < previousLayerLength; i++){
            for(let j : number = 0; j < currentLayerLength; j++){
                this.arrayWeigth[i][j] = Math.floor(Math.random() * 101)/ 100;
            }
        }
    }
}

export default Weigth;
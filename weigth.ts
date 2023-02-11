class Weigth{
    arrayWeigth : number[][];

    constructor(previousLayerLength: number, currentLayerLength : number){
        for(let i : number = 0; i < previousLayerLength; i++){
            for(let j : number = 0; i < currentLayerLength; i++){
                this.arrayWeigth[i][j] = Math.floor(Math.random() * 101)/ 100;
            }
        }
    }
}

export default Weigth;
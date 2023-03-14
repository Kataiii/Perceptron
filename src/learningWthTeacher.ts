import Perceptron from "./perceptron"

const mainFunction = (perceptron : Perceptron) => {
    let data : string[][] = new Array<Array<string>>(20);
    data[0] = ['1', '95', '4', '80', '75', '5', '0', '0', '0', '0'];//отл
    data[1] = ['2', '70', '3', '75', '90', '4.8', '0', '0', '1', '0'];//отл
    data[2] = ['1', '80', '4', '65', '87', '4.7', '0', '0', '0', '0'];//отл
    data[3] = ['2', '60', '4', '70', '64', '4.9', '0', '0', '1', '0'];//отл
    data[4] = ['3', '75', '3', '92', '78', '5', '0', '0', '0', '0'];//отл

    data[5] = ['3', '56', '3', '45', '80', '4.2', '0', '0', '1', '1'];//хор
    data[6] = ['6', '50', '4', '70', '60', '4.5', '0', '0', '1', '0'];//хор
    data[7] = ['7', '40', '4', '65', '50', '4.4', '0', '1', '1', '0'];//хор
    data[8] = ['4', '80', '3', '72', '84', '4.8', '0', '0', '1', '1'];//хор
    data[9] = ['5', '94', '4', '84', '60', '4', '0', '0', '1', '1'];//хор

    data[10] = ['4', '20', '2', '45', '50', '3.8', '1', '0', '1', '1'];//тр
    data[11] = ['6', '45', '1', '55', '56', '3.5', '0', '1', '1', '0'];//тр
    data[12] = ['7', '10', '1', '35', '47', '3.2', '0', '1', '1', '1'];//тр
    data[13] = ['1', '18', '2', '38', '42', '4.1', '1', '0', '1', '1'];//тр
    data[14] = ['1', '37', '3', '48', '57', '3.9', '0', '1', '1', '1'];//тр

    data[15] = ['5', '5', '1', '15', '32', '3.2', '0', '1', '1', '1'];//пересдач
    data[16] = ['4', '1', '3', '25', '22', '3.3', '1', '0', '1', '1'];//пересдач
    data[17] = ['5', '4', '4', '27', '18', '3.8', '1', '1', '1', '1'];//пересдач
    data[18] = ['7', '15', '2', '16', '30', '3.4', '0', '1', '1', '1'];//пересдач
    data[19] = ['1', '20', '2', '18', '41', '3.7', '1', '0', '1', '1'];//пересдач

    let dataOutput : number[][] = [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ]; 

    let dataNumbers : number[][] = new Array<Array<number>>(20);
    for(let i : number = 0; i < dataNumbers.length; i++){
        dataNumbers[i] = new Array<number>(data[i].length);
    }

    for(let i : number = 0; i < data.length; i++){
        for(let j : number = 0; j < data[i].length; j++){
            dataNumbers[i][j] = Number(data[i][j]);
        }
    }

    for(let i : number = 0; i < 10001; i++){
        console.log('Epoch ' + i);
        for(let j : number = 0; j < data.length; j++){
            //происходит обучение, нужно передавать data и uotput
            perceptron.learningWithTeacher(dataNumbers[j], dataOutput[j]);
        }
        //Должен быть вывод, но возможно это не то
        for(let j : number = 0; j < data.length; j++){
            let str : string = "";
            for(let k : number = 0; k < perceptron.arrayLayers[j].arrayNeurons.length; k++){
                str += perceptron.arrayLayers[perceptron.arrayLayers.length - 1].arrayNeurons[k].value + " ";
            }
            console.log(str + "\n");
        }
        //Создать функцию подсчета ошибки 
        console.log('Error ' + perceptron.calculateError(dataNumbers, dataOutput));

        if(i % 100 == 0){
            let isContinue = confirm('Продолжить обучение?');
            if(!isContinue){
                break;
            }
        }
    }
}

export default mainFunction;
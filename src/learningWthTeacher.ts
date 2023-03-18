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

    data[20] = ['2', '0.65', '1', '10', '12', '3.0', '0', '1', '1', '1'];//не сдаст
    data[21] = ['3', '1', '3', '15', '2', '3.1', '1', '0', '1', '1'];//не сдаст
    data[22] = ['5', '4', '2', '5', '8', '3.3', '1', '1', '1', '1'];//не сдаст
    data[23] = ['4', '2', '2', '6', '14', '3.2', '0', '1', '1', '1'];//не сдаст
    data[24] = ['2', '1', '2', '14', '13', '3.1', '1', '0', '1', '1'];//не сдаст

    for(let i : number = 0; i < data.length; i++){
        data[i][0] = String(Number(data[i][0]) / 7);
        data[i][1] = String(Number(data[i][1]) /100);
        data[i][2] = String(Number(data[i][2]) / 4);
        data[i][3] = String(Number(data[i][3]) / 100);
        data[i][4] = String(Number(data[i][4]) / 100);
        data[i][5] = String(Number(data[i][5]) / 5);
        data[i][6] = String(data[i][6] == "1" ? 1 : 0);
        data[i][7] = String(data[i][7] == "1" ? 1 : 0);
        data[i][8] = String(data[i][8] == "1" ? 1 : 0);
        data[i][9] = String(data[i][9] == "1" ? 1 : 0);
    }

    //console.log(data);

    let dataOutput : number[][] = [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1]
    ]; 

    let dataNumbers : number[][] = new Array<Array<number>>(data.length);
    dataNumbers.fill(new Array<number>(data[0].length));
    for(let i : number = 0; i < dataNumbers.length; i++){
        //dataNumbers[i] = new Array<number>(data[i].length);
        dataNumbers[i].fill(0);
        dataNumbers[i] = dataNumbers[i].map((item, index) => item = Number(data[i][index]));
    }

    // console.log('dataNumbers');
    // console.log(dataNumbers);

    // for(let i : number = 0; i < data.length; i++){
    //     for(let j : number = 0; j < data[i].length; j++){
    //         dataNumbers[i][j] = Number(data[i][j]);
    //     }
    // }

    for(let i : number = 0; i < 10001; i++){
        console.log('Epoch ' + i);
        for(let j : number = 0; j < data.length; j++){
            //происходит обучение, нужно передавать data и uotput
            //console.log(perceptron);
            perceptron.learningWithTeacher(dataNumbers[j], dataOutput[j]);
        }
        //Должен быть вывод, но возможно это не то
        for(let j : number = 0; j < data.length; j++){
            let str : string = "";
            for(let k : number = 0; k < perceptron.arrayLayers[perceptron.arrayLayers.length - 1].arrayNeurons.length; k++){
                //console.log(k);
                //console.log(perceptron.arrayLayers[perceptron.arrayLayers.length - 1].arrayNeurons[k].value);
                str += perceptron.arrayLayers[perceptron.arrayLayers.length - 1].arrayNeurons[k].value + " ";
            }
            console.log(str + "\n");
        }
        ////console.log(perceptron);
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
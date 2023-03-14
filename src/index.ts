import Perceptron from "./perceptron";

const arrayOutputs: string[] = ['Не сдаст - ', 
                                'Сдаст с пересдачами - ' ,
                                'Сдаст с тройками - ', 
                                'Сдаст хорошо - ', 
                                'Сдаст наотлично - '];
let perceptron : Perceptron = new Perceptron([10, 9, 7, 5]);

// for(let i : number = 0; i < perceptron.arrayLayers.length; i++){
//     let str : string = "";
//     for(let j : number = 0; j < perceptron.arrayLayers[i].arrayNeurons.length; j++){
//         str += perceptron.arrayLayers[i].arrayNeurons[j].value + " ";
//         //console.log(perceptron.arrayLayers[i].arrayNeurons[j].value);
//     }
//     console.log(str + "\n");
// }

// for(let i : number = 0; i < perceptron.arrayWeigths.length; i++){
//     let str : string = "";
//     for(let j : number = 0; j < perceptron.arrayWeigths[i].arrayWeigth.length; j++){
//         str += perceptron.arrayWeigths[i].arrayWeigth[j] + " ";
//         //console.log(perceptron.arrayLayers[i].arrayNeurons[j].value);
//     }
//     console.log(str + "\n");
// }

let divResult : HTMLElement | null = document.getElementById('div-results');
let btnRes : HTMLElement | null = document.getElementById("btn-result");
btnRes?.addEventListener('click', () => {
    const indexCourse : HTMLSelectElement | null = <HTMLSelectElement>document.getElementById('listCourse');
    const percentVisit : HTMLInputElement|null = <HTMLInputElement>document.getElementById('inputPercentVisit');
    const indexDiscipline : HTMLSelectElement | null = <HTMLSelectElement> document.getElementById('listDiscipline');
    const percentProfSubject : HTMLInputElement | null = <HTMLInputElement> document.getElementById('perProfSubject');
    const percentNoProfSubject : HTMLInputElement | null = <HTMLInputElement> document.getElementById('perNoProfSubject');
    const markSession : HTMLInputElement | null = <HTMLInputElement> document.getElementById('markLastSession'); 
    const checkRetakes : HTMLInputElement | null = <HTMLInputElement> document.getElementById('haveRetakes');
    const checkThird : HTMLInputElement | null = <HTMLInputElement> document.getElementById('haveThird');
    const checkFour : HTMLInputElement | null = <HTMLInputElement> document.getElementById('haveFour');
    const checkDelay : HTMLInputElement | null = <HTMLInputElement> document.getElementById('haveDelay');

    perceptron.arrayLayers[0].arrayNeurons[0].value = Number(indexCourse.value) / 7;
    perceptron.arrayLayers[0].arrayNeurons[1].value = Number(percentVisit.value) /100;
    perceptron.arrayLayers[0].arrayNeurons[2].value = Number(indexDiscipline.value) / 4;
    perceptron.arrayLayers[0].arrayNeurons[3].value = Number(percentProfSubject.value) / 100;
    perceptron.arrayLayers[0].arrayNeurons[4].value = Number(percentNoProfSubject.value) / 100;
    perceptron.arrayLayers[0].arrayNeurons[5].value = Number(markSession.value) / 5;
    perceptron.arrayLayers[0].arrayNeurons[6].value = checkRetakes.checked ? 1 : 0 ;
    perceptron.arrayLayers[0].arrayNeurons[7].value = checkThird.checked ? 1 : 0;
    perceptron.arrayLayers[0].arrayNeurons[8].value = checkFour ? 1 : 0;
    perceptron.arrayLayers[0].arrayNeurons[9].value = checkDelay ? 1 : 0;

    perceptron.countingHiddenLayers();

    for(let i : number = 0; i < arrayOutputs.length; i++){
        let resultNeuron : HTMLElement = document.createElement('p');
        resultNeuron.innerHTML = arrayOutputs[i] + (perceptron.arrayLayers[perceptron.arrayLayers.length - 1].arrayNeurons[i].value * 100) + '%';
        divResult?.appendChild(resultNeuron);
    }
    

    for(let i : number = 0; i < perceptron.arrayLayers.length; i++){
        let str : string = "";
        for(let j : number = 0; j < perceptron.arrayLayers[i].arrayNeurons.length; j++){
            str += perceptron.arrayLayers[i].arrayNeurons[j].value + " ";
            //console.log(perceptron.arrayLayers[i].arrayNeurons[j].value);
        }
        console.log(str + "\n");
    }
});


let btnStudy : HTMLElement | null = document.getElementById('btn-study');
btnStudy?.addEventListener('click', () => {

})

"use strict"

const allAbilityInputs = document.querySelectorAll('.input-abilities');

let abilitiesMin = 8;// document.querySelector('#abilities-min').value;
let abilitiesMax = 15;// document.querySelector('#abilities-max').value;
let abilitiesMaxPoints = 27;//document.querySelector('#abilitiesMaxPoints').value;
let abilitiesCurrentPoints = 14;


const abilityPoints = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
};

const abilityPointsPrice = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9,
};

let abilityPointsTable = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
};



window.addEventListener('load', (event) => {
    // записываем все стандартные характеристики после загрузки страницы
    function getAllAbilitiesAndValue(key) {
        const allAbilities = document.querySelectorAll('.input-apilities');

        for (const iterator of allAbilities) {
            // console.log(iterator);
            if (iterator.id == key) {
                return iterator.value
            };
        };
    };

    for (const key in abilityPoints) {
        abilityPoints[key] = getAllAbilitiesAndValue(key)
    }
})

document.addEventListener('click', (event) => {

    if (event.target.id in abilityPoints) {
        abilityPoints[`${event.target.id}`] = event.target.value;
    } else {
        console.log('ERROR!!!');
    }

});

document.addEventListener('change', (event) => {

    if (event.target.id in abilityPoints) {
        for (const key in abilityPointsPrice) {
            if (key == event.target.value) {
                abilityPointsTable[event.target.id] = abilityPointsPrice[key]
            }
        }
    }

    abilitiesCurrentPoints = Number(abilitiesMaxPoints) - Number(abilityPointsTable['strength']) - Number(abilityPointsTable['dexterity']) - Number(abilityPointsTable['constitution']) - Number(abilityPointsTable['intelligence']) - Number(abilityPointsTable['wisdom']) - Number(abilityPointsTable['charisma']);
    console.log(abilitiesCurrentPoints);


    for (const iterator of allAbilityInputs) {
        if (abilitiesCurrentPoints <= 0) {
            iterator.max = iterator.value
        } else {
            abilitiesCurrentPoints = abilitiesMax
        }
    }

});



function limitInput(input, cur) {
}



// const qwe = document.querySelectorAll('[data-input-abilities]');
// console.log(qwe);

document.addEventListener('click', (event) => {


    if (event.target.dataset.btn === 'plus' && abilitiesCurrentPoints > 0) {
        console.log('PLUS');


        for (const key in allAbilityInputs) {
            if (Object.hasOwnProperty.call(allAbilityInputs, key)) {
                const element = allAbilityInputs[key];

                if (element.id === event.target.dataset.ability) {
                    element.value = Number(element.value) + 1;
                    abilitiesCurrentPoints -= 1; // Далее нужно будет изменить на значение из таблицы
                    console.log(abilitiesCurrentPoints);
                    console.log(event.target.dataset.ability);
                }

            }
        }




    } else if (event.target.dataset.btn === 'minus' && allAbilityInputs[`${element.id}`] > abilitiesMin) {
        console.log('MINUS');


        for (const key in allAbilityInputs) {
            if (Object.hasOwnProperty.call(allAbilityInputs, key)) {
                const element = allAbilityInputs[key];

                if (element.id === event.target.dataset.ability) {
                    element.value = Number(element.value) - 1;
                    abilitiesCurrentPoints += 1; // Далее нужно будет изменить на значение из таблицы
                    console.log(abilitiesCurrentPoints);
                    console.log(event.target.dataset.ability);
                }

            }
        }



    } else {
        console.log('Недостаточно очков');
    }

});
"use strict"

let defaultPoints = 27;
let freePoints;

let abilityPoints = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
}

function calc() {
    let costPointsTable = {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    }
    for (const key1 in abilityPoints) {
        const result = abilityCalculus(abilityPoints[key1]);
        for (const key2 in costPointsTable) {
            if (key2 == key1) {
                costPointsTable[key2] = result
            }
        }
    }

    let calculationResult = defaultPoints - costPointsTable[strength] - costPointsTable[dexterity] - costPointsTable[constitution] - costPointsTable[intelligence] - costPointsTable[wisdom] - costPointsTable[charisma]
    console.log(calculationResult);
    return calculationResult
}

let handler = {
    set: function (obj, prop, value) {
        obj[prop] = value;
        freePoints = calc(); // Вызываем функцию calc при каждом изменении
        console.log(`Значение ${prop} было изменено на ${value}. Осталось свободных очков: ${freePoints}`);
        return true;
    }
};

let proxyAbilityPoints = new Proxy(abilityPoints, handler);


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

    for (const key in proxyAbilityPoints) {
        proxyAbilityPoints[key] = getAllAbilitiesAndValue(key)
    }
})


document.addEventListener('change', (event) => {
    console.log("Индификатор ивента " + event.target.id);

    for (const key in proxyAbilityPoints) {

        if (key == event.target.id) {
            proxyAbilityPoints[key] = event.target.value
            console.log(`В ключе ${key} записано значение ${proxyAbilityPoints[key]}`);
        }
    }

});




function abilityCalculus(value) {
    const costPoints = {
        8: 0,
        9: 1,
        10: 2,
        11: 3,
        12: 4,
        13: 5,
        14: 7,
        15: 9,
    };

    for (const key in costPoints) {
        if (value == key) {
            console.log(value, costPoints[key]);
            return costPoints[key]
        }
    }

};



// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log(event);
// });

// // document.addEventListener("load", (event) => {
// //     console.log(event);
// // });
// window.addEventListener("load", (event) => {
//     console.log(event);
// });
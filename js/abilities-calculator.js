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
    return defaultPoints - abilityPoints.strength - abilityPoints.dexterity - abilityPoints.constitution - abilityPoints.intelligence - abilityPoints.wisdom - abilityPoints.charisma;
}

let handler = {
    set: function (obj, prop, value) {
        obj[prop] = value;
        freePoints = calc(); // Вызываем функцию calc при каждом изменении
        console.log(`Значение ${prop} было изменено. Осталось свободных очков: ${freePoints}`);
        return true;
    }
};

let proxyAbilityPoints = new Proxy(abilityPoints, handler);

proxyAbilityPoints.strength = 10; // Выводит: Значение strength было изменено. Осталось свободных очков: 18


window.addEventListener('load', () => {



});

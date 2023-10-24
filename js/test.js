
let defaultPoints = 27;
let freePoints;

let abilityPoints = {
    strength: 1,
    dexterity: 3,
    constitution: 0,
    intelligence: 0,
    wisdom: 2,
    charisma: 0,
}

function calc(){
    return defaultPoints - abilityPoints.strength - abilityPoints.dexterity - abilityPoints.constitution - abilityPoints.intelligence - abilityPoints.wisdom - abilityPoints.charisma;
}

let handler = {
    set: function(obj, prop, value) {
        obj[prop] = value;
        freePoints = calc(); // Вызываем функцию calc при каждом изменении
        console.log(`Значение ${prop} было изменено. Осталось свободных очков: ${freePoints}`);
        return true;
    }
};

let proxyAbilityPoints = new Proxy(abilityPoints, handler);

proxyAbilityPoints.strength = 10; // Выводит: Значение strength было изменено. Осталось свободных очков: 18




const mainDataBase = 'https://6536d186bb226bb85dd2a7da.mockapi.io';
const dataBase = {
    test2: `${mainDataBase}/test2`,
}










let abilityPoints = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
}


Object.observe(abilityPoints, function (changes) {
    for (var change of changes)
    console.log(change);
});

obj.prop = false;


function calc () {

}



document.addEventListener('change', (event) => {
    const availableЗointsInput = document.querySelector(`#points`);
    const currentAbilitiesMod = document.querySelector(`#${event.target.name}-modifier`);




    // калькуляция оставшихся очков
    let currentPoints = availableЗointsInput.value - abilityPoints.strength - abilityPoints.dexterity - abilityPoints.constitution - abilityPoints.intelligence - abilityPoints.wisdom - abilityPoints.charisma;


    if (currentPoints > 0) {
        const result = abilityCalculus(event.target.value)
        const ability = event.target.name

        for (const key in abilityPoints) {
            if (key == ability) {
                abilityPoints[key] = result

            }
        }
    }

    currentAbilitiesMod.value = availableЗointsInput.value - abilityPoints.strength - abilityPoints.dexterity - abilityPoints.constitution - abilityPoints.intelligence - abilityPoints.wisdom - abilityPoints.charisma;

});





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
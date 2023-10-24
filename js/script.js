"use strict"

fetch('https://6536d186bb226bb85dd2a7da.mockapi.io/weapons');

const weapons = "https://6536d186bb226bb85dd2a7da.mockapi.io/weapons"

console.log(weapons);

window.addEventListener('load', async () => {
    const data = await fetch('https://6536d186bb226bb85dd2a7da.mockapi.io/weapons');
    const weapons = await data.json();

    console.log(weapons);


    const weaponNames = []
    for (const iterator of weapons) {
        weaponNames.push(iterator.name)
    }

    console.log(await weaponNames);


    const inputWeapon = document.querySelector('.weapon');

    for (const iterator of weapons) {
        inputWeapon.insertAdjacentHTML('afterbegin',
            `<option>${iterator.name}</option>`
        )
    }
})

const sendWeapon = document.querySelector('.button');
sendWeapon.addEventListener('click', () => {
    sendWeaponToDataBase()
})

/* БЛОК ДОБАВЛЕНИЯ ОРУЖИЯ В БАЗУ ДАННЫХ САЙТА */
function sendWeaponToDataBase() {

    const textWeapon = document.querySelector('#nameWeapon');
    const newTask = {
        content: `${textWeapon.value}`,
        completed: false,
    };

    const newWeapon = {
        type: "",
        name: "",
        cost: {
            gold: 0,
            silver: 0,
            copper: 0
        },
        damage: {
            value: "1к",
            type: ""
        },
        weight: 0,
        distance: {
            min: 0,
            max: 0
        },
        properties: [],
        options: [],
        description: "",
        img: "../img/",
    }




    fetch('https://6536d186bb226bb85dd2a7da.mockapi.io/1/characters', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(newWeapon)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
    }).catch(error => {
        // handle error
    })
}

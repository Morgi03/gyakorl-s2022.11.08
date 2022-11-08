async function AllUserInABCorder() {
    let response = await fetch('/users.json');
    let vals = await response.json();
    eraseALLContent();
    let adatok = vals.users.sort(function (a, b) {
        if (a.lastName < b.lastName) { return -1; }
        if (a.lastName > b.lastName) { return 1; }
        return 0;
    });
    let elemek = document.getElementById('The_Data') as HTMLDataListElement;
    elemek.textContent = "";
    for (let p of adatok) {
        let li = document.createElement('li');
        li.textContent = p.lastName.toUpperCase() + " " + p.firstName;
        elemek.appendChild(li);
    }
}

async function avas() {
    let response = await fetch('/users.json');
    let vals = await response.json();
    let adatok = vals.users.sort(function (a, b) {
        if (a.username > b.username) { return -1; }
        if (a.username < b.username) { return 1; }
        return 0;
    });
    eraseALLContent();
    let table = document.getElementById('tablazat') as HTMLTableElement;
    table.textContent = "";
    for (let p of adatok) {
        let row = table.insertRow(0);
        let user = row.insertCell(0);
        let email = row.insertCell(1);
        let phone = row.insertCell(2);
        user.innerHTML = p.username;
        email.innerHTML = p.email;
        phone.innerHTML = p.phone;
    }
}

async function XcmFunction() {
    let response = await fetch('/users.json');
    let vals = await response.json();
    let adatok = vals.users;
    eraseALLContent();
    let span = document.getElementById('dataspan') as HTMLSpanElement;
    let xcm = document.getElementById('Xcm') as HTMLInputElement;
    let sum: number = 0;
    for (let p of adatok) {
        if (xcm.value <= p.height) {
            sum += p.weight;
        }
    }
    span.innerHTML = sum.toString();
}

function eraseALLContent(): void {
    let elemek = document.getElementById('The_Data') as HTMLDataListElement;
    elemek.textContent = "";
    let table = document.getElementById('tablazat') as HTMLTableElement;
    table.textContent = "";
    let span = document.getElementById('dataspan') as HTMLSpanElement;
    span.textContent = "";
}

async function BrownEye() {
    let response = await fetch('/users.json');
    let vals = await response.json();
    let adatok = vals.users;
    eraseALLContent();
    document.getElementById('barnaszem')
   adatok = adatok.map(e => e.eyeColor == 'Brown');
   let span = document.getElementById('dataspan') as HTMLSpanElement;
span.innerHTML = adatok.length;
}


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('allUser')!.addEventListener('click', () => AllUserInABCorder());
    document.getElementById('AvA')!.addEventListener('click', () => avas());
    document.getElementById('XcmFunc')!.addEventListener('click', () => XcmFunction());
    document.getElementById('browneyed')!.addEventListener('click', () => BrownEye());
});
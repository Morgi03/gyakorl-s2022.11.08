"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function AllUserInABCorder() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/users.json');
        let vals = yield response.json();
        eraseALLContent();
        let adatok = vals.users.sort(function (a, b) {
            if (a.lastName < b.lastName) {
                return -1;
            }
            if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        });
        let elemek = document.getElementById('The_Data');
        elemek.textContent = "";
        for (let p of adatok) {
            let li = document.createElement('li');
            li.textContent = p.lastName.toUpperCase() + " " + p.firstName;
            elemek.appendChild(li);
        }
    });
}
function avas() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/users.json');
        let vals = yield response.json();
        let adatok = vals.users.sort(function (a, b) {
            if (a.username > b.username) {
                return -1;
            }
            if (a.username < b.username) {
                return 1;
            }
            return 0;
        });
        eraseALLContent();
        let table = document.getElementById('tablazat');
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
    });
}
function XcmFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/users.json');
        let vals = yield response.json();
        let adatok = vals.users;
        eraseALLContent();
        let span = document.getElementById('osszsuly');
        let xcm = document.getElementById('Xcm');
        let sum = 0;
        for (let p of adatok) {
            if (xcm.value <= p.height) {
                sum += p.weight;
            }
        }
        span.innerHTML = sum.toString();
    });
}
function eraseALLContent() {
    let elemek = document.getElementById('The_Data');
    elemek.textContent = "";
    let table = document.getElementById('tablazat');
    table.textContent = "";
    let span = document.getElementById('osszsuly');
    span.textContent = "";
}
function BrownEye() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/users.json');
        let vals = yield response.json();
        let adatok = vals.users;
        eraseALLContent();
        for (let brn of adt) {
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allUser').addEventListener('click', () => AllUserInABCorder());
    document.getElementById('AvA').addEventListener('click', () => avas());
    document.getElementById('XcmFunc').addEventListener('click', () => XcmFunction());
    document.getElementById('');
});

import { allMaterials } from './Clones/Clones.js';
import { User } from './model/User.js';
import { render, renderPrestamo, $matPres } from './utils/renderBibliographicMaterials.js';
import { renderUser, $userCardSkeleton, $userCard } from './utils/renderUser.js';
// User
export let user;
let userLogin = false;
// Form
let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', handleForm);
let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearForm);
let $input_email = document.querySelector('#input_name');
let $input_code = document.querySelector('#input_code');
let $input_faculty = document.querySelector('#input_faculty');
// Modal Login
let $ModLog_Img = document.querySelector('#ModLog_Img');
let $ModLog_Message = document.querySelector('#ModLog_Message');
let $ModLog_Btn = document.querySelector('#ModLog_Btn');
function customModalLogin() {
    $ModLog_Btn.classList.remove('btn-outline-danger');
    $ModLog_Btn.classList.remove('btn-outline-success');
    if (userLogin) {
        $ModLog_Message.textContent = 'Login successfully';
        $ModLog_Img.src = 'https://image.flaticon.com/icons/svg/391/391175.svg';
        $ModLog_Btn.classList.add('btn-outline-success');
    }
    else {
        $ModLog_Message.textContent = 'Complete the required fields';
        $ModLog_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
        $ModLog_Btn.classList.add('btn-outline-danger');
    }
}
function handleForm() {
    userLogin = false;
    let a = $input_email.value;
    let b = $input_code.value;
    if (a != '' && b != '') {
        user = new User(`${$input_email.value}`, `${$input_code.value}`, `${$input_faculty.value}`);
        renderUser($input_email.value, $input_code.value, $input_faculty.value);
        userLogin = true;
        renderPrestamo();
    }
    customModalLogin();
}
function clearForm() {
    $input_email.value = '';
    $input_code.value = '';
    $userCardSkeleton.classList.add('d-block');
    $userCardSkeleton.classList.remove('d-none');
    $userCard.classList.add('d-none');
    $userCard.classList.remove('d-block');
    userLogin = false;
    $matPres.textContent = '';
}
// Modal Items
let $ModItems_Img = document.querySelector('#ModItems_Img');
let $ModItems_Message = document.querySelector('#ModItems_Message');
export function fnRequest() {
    var _a;
    let type = this.getAttribute('id');
    if (!userLogin) {
        $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
        $ModItems_Message.textContent = 'Enter you user';
    }
    else {
        if (type === 'btnRequest') {
            if (user.borrowedMaterial === undefined) {
                let id = this.getAttribute('identifier');
                console.log(id);
                let idNotNull = id ? id : '';
                let IdNumber = Number.parseInt(idNotNull);
                user.borrowedMaterial = allMaterials[IdNumber];
                console.log(`User: ${user.name}`);
                console.log(`Material Prestado: ${user.borrowedMaterial}`);
                $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391175.svg';
                $ModItems_Message.textContent = `Borrowed Material: ${user.borrowedMaterial.title}`;
            }
            else {
                $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
                $ModItems_Message.textContent = `You have borrowed material, please return it first. Her borrowed material is: ${(_a = user.borrowedMaterial) === null || _a === void 0 ? void 0 : _a.title}`;
            }
        }
        renderPrestamo();
    }
}
export function fnReturn() {
    var _a, _b;
    let type = this.getAttribute('id');
    if (!userLogin) {
        $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
        $ModItems_Message.textContent = 'Enter you user';
    }
    else {
        if (type === 'btnReturn') {
            let id = this.getAttribute('identifier');
            if (id === ((_a = user.borrowedMaterial) === null || _a === void 0 ? void 0 : _a.id)) {
                user.borrowedMaterial = undefined;
                $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391175.svg';
                $ModItems_Message.textContent = 'Returned Material!';
            }
            else {
                $ModItems_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
                $ModItems_Message.textContent = `This material is not yours. Her borrowed material is: ${(_b = user.borrowedMaterial) === null || _b === void 0 ? void 0 : _b.title}`;
            }
        }
        renderPrestamo();
    }
}
render();

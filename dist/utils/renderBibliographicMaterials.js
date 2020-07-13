import { books, magazines, CDs, thesis } from '../Clones/Clones.js';
import { fnRequest, fnReturn } from '../index.js';
import { user } from '../index.js';
export let $matPres = document.querySelector('#matPrestado');
export function renderPrestamo() {
    if (user.borrowedMaterial === undefined) {
        $matPres.textContent = 'Aun no hay materiales prestados';
    }
    else {
        $matPres.textContent = user.borrowedMaterial.title;
    }
}
let $Books_Container = document.querySelector('#Books_Container');
let $Magazines_Container = document.querySelector('#Magazines_Container');
let $CDs_Container = document.querySelector('#CDs_Container');
let $Thesis_Container = document.querySelector('#Thesis_Container');
function custom(mbc) {
    mbc.classList.add('container', 'py-4', 'd-flex', 'justify-content-center');
    mbc.style.height = '450px';
    mbc.style.backgroundColor = 'rgb(154, 253, 220)';
    mbc.style.borderRadius = '10px';
    mbc.style.borderColor = 'red';
}
function renderItems(Item) {
    let Items = [...Item];
    for (let i of Items) {
        let $card_container = document.createElement('div');
        let $card_body = document.createElement('div');
        let $card_img = document.createElement('img');
        let $card_details = document.createElement('div');
        let $card_title = document.createElement('h5');
        let $card_author = document.createElement('p');
        let $card_content = document.createElement('p');
        let $card_topic = document.createElement('span');
        let $btns_container = document.createElement('div');
        let $card_btn_request = document.createElement('button');
        let $card_btn_return = document.createElement('button');
        $card_container.classList.add('card', 'mx-2');
        $card_container.style.width = '18rem';
        $card_container.style.borderRadius = '15px';
        $card_container.style.borderColor = 'red';
        switch (i.type) {
            case 'Book':
                $card_img.src = 'https://image.flaticon.com/icons/svg/3203/3203852.svg';
                $Books_Container.appendChild($card_container);
                break;
            case 'Magazine':
                $card_img.src = 'https://image.flaticon.com/icons/svg/3129/3129465.svg';
                $Magazines_Container.appendChild($card_container);
                break;
            case 'CD':
                $card_img.src = 'https://image.flaticon.com/icons/svg/898/898835.svg';
                // $card_img.src = 'https://image.flaticon.com/icons/svg/390/390138.svg'
                $CDs_Container.appendChild($card_container);
                break;
            case 'Thesis':
                $card_img.src = 'https://image.flaticon.com/icons/svg/3176/3176193.svg';
                // $card_img.src = 'https://image.flaticon.com/icons/svg/947/947478.svg'
                $Thesis_Container.appendChild($card_container);
                break;
            default:
                break;
        }
        $card_body.classList.add('card-body', 'col-md-12', 'px-0');
        // $card_body.style.backgroundColor = 'red'
        $card_container.appendChild($card_body);
        $card_img.classList.add('card-img-top', 'my-3');
        $card_img.style.height = '140px';
        // $card_img.src = 'https://image.flaticon.com/icons/svg/3129/3129465.svg'
        $card_details.classList.add('col-md-12');
        $card_body.appendChild($card_img);
        $card_body.appendChild($card_details);
        $card_title.classList.add('card-title', 'd-flex', 'justify-content-center');
        $card_title.style.fontWeight = '600';
        $card_title.style.textAlign = 'center';
        $card_title.textContent = `${i.title}`;
        $card_author.classList.add('card-text', 'mb-1', 'd-flex', 'justify-content-center');
        $card_author.style.textAlign = 'center';
        $card_author.textContent = `${i.author}`;
        $card_content.classList.add('card-text', 'mb-3', 'd-flex', 'justify-content-center');
        $card_content.style.fontSize = '13px';
        $card_content.textContent = `${i.sizeContent} ${i.typeContent}`;
        $card_topic.classList.add('px-5', 'd-flex', 'justify-content-center', 'mt-20px');
        $card_topic.style.backgroundColor = '#ffe0ac';
        $card_topic.style.borderRadius = '10px';
        $card_topic.style.color = '#688cc5';
        $card_topic.textContent = `${i.topic}`;
        $card_details.appendChild($card_title);
        $card_details.appendChild($card_author);
        $card_details.appendChild($card_content);
        $card_details.appendChild($card_topic);
        $btns_container.classList.add('container', 'd-flex', 'px-0');
        $card_btn_request.classList.add('btn', 'btn-primary', 'd-inline', 'mb-2', 'ml-2', 'mr-1');
        $card_btn_request.style.width = '50%';
        $card_btn_request.textContent = 'Request';
        $card_btn_request.setAttribute('identifier', i.id);
        $card_btn_request.setAttribute('id', 'btnRequest');
        $card_btn_request.setAttribute('data-toggle', 'modal');
        $card_btn_request.setAttribute('data-target', '#ModalItems');
        $card_btn_request.addEventListener('click', fnRequest);
        $card_btn_return.classList.add('btn', 'btn-primary', 'd-inline', 'mb-2', 'ml-1', 'mr-2');
        $card_btn_return.style.width = '50%';
        $card_btn_return.textContent = 'Return';
        $card_btn_return.setAttribute('identifier', i.id);
        $card_btn_return.setAttribute('id', 'btnReturn');
        $card_btn_return.setAttribute('data-toggle', 'modal');
        $card_btn_return.setAttribute('data-target', '#ModalItems');
        $card_btn_return.addEventListener('click', fnReturn);
        $btns_container.appendChild($card_btn_request);
        $btns_container.appendChild($card_btn_return);
        $card_container.appendChild($btns_container);
    }
}
export function render() {
    custom($Books_Container);
    custom($Magazines_Container);
    custom($CDs_Container);
    custom($Thesis_Container);
    renderItems(books);
    renderItems(magazines);
    renderItems(CDs);
    renderItems(thesis);
}

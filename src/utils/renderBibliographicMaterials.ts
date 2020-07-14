import { BibliographicMaterial } from '../model/BibliographicMaterial'
import { books, magazines, CDs, thesis} from '../Clones/Clones.js'
import { fnRequest, fnReturn } from '../index.js'
import { user } from '../index.js'

export let $matPres = document.querySelector('#matPrestado') as HTMLDivElement;

export function renderPrestamo() {
    if (user.borrowedMaterial === undefined) {
        $matPres.textContent = 'Aun no hay materiales prestados'
    }else{
        $matPres.textContent = user.borrowedMaterial.title
    }
}

let $Books_Container = document.querySelector('#Books_Container') as HTMLDivElement
let $Magazines_Container = document.querySelector('#Magazines_Container') as HTMLDivElement
let $CDs_Container = document.querySelector('#CDs_Container') as HTMLDivElement
let $Thesis_Container = document.querySelector('#Thesis_Container') as HTMLDivElement

function custom(mbc:HTMLDivElement) {
    mbc.classList.add('container', 'py-4', 'd-flex', 'justify-content-center')
    mbc.style.height = '450px'
}

function renderItems(Item: Array<BibliographicMaterial>) {
    let Items: BibliographicMaterial[] = [...Item]
    for (let i of Items){
        let $card_container = document.createElement('div') as HTMLDivElement;
            let $card_body = document.createElement('div') as HTMLDivElement;
                let $card_img = document.createElement('img') as HTMLImageElement;
                let $card_details = document.createElement('div') as HTMLDivElement;
                    let $card_title = document.createElement('h5') as HTMLHeadingElement;
                    let $card_author = document.createElement('p') as HTMLParagraphElement;
                    let $card_content = document.createElement('p') as HTMLParagraphElement;
                    let $card_topic = document.createElement('span') as HTMLSpanElement;
            let $btns_container = document.createElement('div') as HTMLDivElement
                let $card_btn_request = document.createElement('button') as HTMLButtonElement;
                let $card_btn_return = document.createElement('button') as HTMLButtonElement;
        $card_container.classList.add('card' ,'mx-2', 'shadow-lg')
        $card_container.style.width = '18rem'
        // FIXME:
        $card_container.style.borderTopLeftRadius = '10px'
        $card_container.style.borderTopRightRadius = '80px'
        $card_container.style.borderColor = 'white'
        switch (i.type) {
            case 'Book':
                $card_img.src = 'https://image.flaticon.com/icons/svg/3203/3203852.svg'
                $Books_Container.appendChild($card_container)
                break;
            case 'Magazine':
                $card_img.src = 'https://image.flaticon.com/icons/svg/3129/3129465.svg'
                $Magazines_Container.appendChild($card_container)
                break;
            case 'CD':
                $card_img.src = 'https://image.flaticon.com/icons/svg/898/898835.svg'
                // $card_img.src = 'https://image.flaticon.com/icons/svg/390/390138.svg'
                $CDs_Container.appendChild($card_container)
                break;
            case 'Thesis':
                    $card_img.src = 'https://image.flaticon.com/icons/svg/3176/3176193.svg'
                    // $card_img.src = 'https://image.flaticon.com/icons/svg/947/947478.svg'
                $Thesis_Container.appendChild($card_container)
                break;
            default:
                break;
        }
        $card_body.classList.add('card-body' , 'col-md-12', 'px-0')
        // $card_body.style.backgroundColor = 'red'
        $card_container.appendChild($card_body)
            $card_img.classList.add('card-img-top', 'my-3')
            $card_img.style.height = '140px'
            // $card_img.src = 'https://image.flaticon.com/icons/svg/3129/3129465.svg'
            $card_details.classList.add('col-md-12')
            $card_body.appendChild($card_img)
            $card_body.appendChild($card_details)
                $card_title.classList.add('card-title', 'd-flex', 'justify-content-center')
                $card_title.style.fontWeight = '600'
                $card_title.style.textAlign = 'center'
                $card_title.textContent = `${i.title}`
                $card_author.classList.add('card-text', 'mb-1', 'd-flex', 'justify-content-center')
                $card_author.style.textAlign = 'center'
                $card_author.textContent = `${i.author}`
                $card_content.classList.add('card-text', 'mb-3', 'd-flex', 'justify-content-center')
                $card_content.style.fontSize = '13px'
                $card_content.textContent = `${i.sizeContent} ${i.typeContent}`
                $card_topic.classList.add('d-flex', 'justify-content-center', 'mt-20px')
                $card_topic.style.backgroundColor= '#d1e7ff'
                $card_topic.style.borderRadius = '10px'
                $card_topic.style.color = '#2e58ff'
                $card_topic.textContent = `${i.topic}`
                $card_details.appendChild($card_title)
                $card_details.appendChild($card_author)
                $card_details.appendChild($card_content)
                $card_details.appendChild($card_topic)
        $btns_container.classList.add('container', 'd-flex', 'px-0')
            $card_btn_request.classList.add('btn', 'btn-outline-success', 'd-inline', 'mb-2', 'ml-2', 'mr-1')
            $card_btn_request.style.width = '50%'
            $card_btn_request.textContent = 'Request'
            $card_btn_request.setAttribute('identifier', i.id)
            $card_btn_request.setAttribute('id','btnRequest')
            $card_btn_request.setAttribute('data-toggle','modal')
            $card_btn_request.setAttribute('data-target', '#ModalItems')
            $card_btn_request.addEventListener('click', fnRequest)
            $card_btn_return.classList.add('btn', 'btn-outline-primary', 'd-inline', 'mb-2', 'ml-1', 'mr-2')
            $card_btn_return.style.width = '50%'
            $card_btn_return.textContent = 'Return'
            $card_btn_return.setAttribute('identifier', i.id)
            $card_btn_return.setAttribute('id', 'btnReturn')
            $card_btn_return.setAttribute('data-toggle', 'modal')
            $card_btn_return.setAttribute('data-target', '#ModalItems')
            $card_btn_return.addEventListener('click', fnReturn)
            $btns_container.appendChild($card_btn_request)
            $btns_container.appendChild($card_btn_return)
        $card_container.appendChild($btns_container)
    }
}

export function render() {
    custom($Books_Container)
    custom($Magazines_Container)
    custom($CDs_Container)
    custom($Thesis_Container)
    renderItems(books);
    renderItems(magazines);
    renderItems(CDs);
    renderItems(thesis);
}

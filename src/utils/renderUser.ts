let $user_name = document.querySelector('#user_name') as HTMLSpanElement
let $user_code = document.querySelector('#user_code') as HTMLParagraphElement
let $user_faculty = document.querySelector('#user_faculty') as HTMLParagraphElement

export let $userCardSkeleton = document.querySelector('#userCard-skeleton') as HTMLDivElement
export let $userCard = document.querySelector('#userCard') as HTMLDivElement
export function renderUser(name: string, code: string, faculty: string) {
    $userCardSkeleton.classList.remove('d-block')
    $userCardSkeleton.classList.add('d-none')
    $userCard.classList.remove('d-none')
    $userCard.classList.add('d-block')
    $user_name.textContent= `${name}`
    $user_code.textContent= `${code}`
    $user_faculty.textContent = `${faculty}`
    }
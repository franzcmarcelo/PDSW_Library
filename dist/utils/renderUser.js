let $user_name = document.querySelector('#user_name');
let $user_code = document.querySelector('#user_code');
let $user_faculty = document.querySelector('#user_faculty');
export let $userCardSkeleton = document.querySelector('#userCard-skeleton');
export let $userCard = document.querySelector('#userCard');
export function renderUser(name, code, faculty) {
    $userCardSkeleton.classList.remove('d-block');
    $userCardSkeleton.classList.add('d-none');
    $userCard.classList.remove('d-none');
    $userCard.classList.add('d-block');
    $user_name.textContent = `${name}`;
    $user_code.textContent = `${code}`;
    $user_faculty.textContent = `${faculty}`;
}

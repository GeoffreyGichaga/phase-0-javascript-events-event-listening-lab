
const input = document.querySelector('input')

function addingEventListener() {
    input.addEventListener('click',addingEventListener)

    return alert('I was Clicked!')
}


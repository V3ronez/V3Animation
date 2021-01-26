

const menu = document.getElementById("menu").addEventListener('click', changeContent)
function changeContent(event) {
    event.preventDefault(event)
    const target = event.target.id
    console.log(event.target.id)
}


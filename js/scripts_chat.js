const textInput = document.querySelector('.text_in');
const chat = document.querySelector('.chat');
const sendBTN= document.querySelector('.icon_input')
const messages = []

const chatMessage = (message) => `
    <div class="container_person">
        <div class="imagen_person">
            <img src="images/img.png" alt="source" class="icon">
        </div>
        <div class="written">
            <p class="p_person">${message}</p>
        </div>
    </div>
    <br>
`;

const sendMessage = () =>{
    const textarea = document.querySelector('.text_in');

    messages.push(textarea.value)
    textarea.value=null

    //localStorage.setItem('messages', JSON.stringify(messages))
    chat.innerHTML += chatMessage(messages[messages.length-1])
}

textInput.addEventListener('submit', sendMessage)

sendBTN.addEventListener('click',function () {
    sendMessage()
})

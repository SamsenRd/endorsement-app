import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-c237b-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementInDB = ref(database, "endorsement")

const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("button")
const endorsementMessage = document.getElementById("endorsement-messages")

onValue(endorsementInDB, function(snapshot) {
    if(snapshot.exists()){
        let endorsementArray = Object.entries(snapshot.val())
    
        clearEndorsementMessage()
        
        for(let i = 0; i < endorsementArray.length; i ++){
            let currentEndorsement = endorsementArray[i]
            let currentEndorsementID = currentEndorsement[0]
            let currentEndorsementValue = currentEndorsement[1]
            
            addText(currentEndorsement)
        }
    }else{
        endorsementMessage.innerHTML = ""
    }
})

buttonEl.addEventListener('click', function () {
    let inputValue = inputEl.value
    
    push(endorsementInDB, inputValue)
    
    clearInputField()
})

function clearInputField() {
    inputEl.value = ""
}

function addText (item) {
    let endorsementID = item[0]
    let endorsementValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.classList.add("item")
    
    newEl.textContent = endorsementValue
    
    newEl.addEventListener("click", function (){
        let exactLocationOfEndorsementInDB = ref(database, `endorsement/${endorsementID}`)
        
        remove(exactLocationOfEndorsementInDB)
    })
    
    endorsementMessage.append(newEl)
}

function clearEndorsementMessage() {
    endorsementMessage.innerHTML = ""
}
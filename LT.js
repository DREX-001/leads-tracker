const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL =  document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

function render(){
        let li = document.createElement("li")
        ulEL.appendChild(li)
        let a = document.createElement("a")
        a.href = inputEl.value
        a.textContent = inputEl.value
        a.target = '_blank'
        li.appendChild(a)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }


inputBtn.addEventListener("click", function(){
    render()
    inputEl.value = ""
    save()
}) 
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url
    inputEl.value= `${currentUrl}`
  })
    
})
ulEL.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        save()
    }
}, false)


function save(){
    localStorage.setItem("data", ulEL.innerHTML)
}
function showList(){
    ulEL.innerHTML = localStorage.getItem("data")
}
showList()
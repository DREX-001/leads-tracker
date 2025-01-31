let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL =  document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromlocalStorage){
  myLeads = leadsFromlocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(arr){
  let listItems = ""
  for(var i = 0; i < arr.length; i++){
  listItems += `<li>
  <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
  </li>`
  }
  ulEL.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
  


inputBtn.addEventListener("click", function() {
     myLeads.push(inputEl.value)
     inputEl.value = ""
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     render(myLeads)
    
})


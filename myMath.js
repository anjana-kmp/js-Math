var myArr=[]

function onfieldClick(event) {
    
    if (event.target.nodeName == "BUTTON") {
        let tgtText = event.target.textContent.trim()
        let outputEl=document.querySelector('#math-output')
        let inputtextEl=document.querySelector('.txtInput')
        if (tgtText == "Math-Random"){
            outputEl.textContent = Math.random()*inputtextEl.value
            let itemEl=document.createElement("span")
            itemEl.className='item'
            itemEl.textContent=parseFloat(outputEl.textContent).toFixed(3)
            document.querySelector('#items').appendChild(itemEl)
            myArr.push(parseFloat(outputEl.textContent).toFixed(3))
        } 
        
        if (tgtText == "Math-Floor"){
            outputEl.textContent=Math.floor(outputEl.textContent)

        }
        if (tgtText == "Math-Round"){
            outputEl.textContent=Math.round(outputEl.textContent)
        } 
        if (tgtText == "Math-Ceil"){
            outputEl.textContent=Math.ceil(outputEl.textContent)
        } 
        if (tgtText == "Math-Absolute(abs)"){
            outputEl.textContent=Math.abs(inputtextEl.value)
        } 
        if (tgtText == "Math-Max"){
            outputEl.textContent=Math.max(...myArr)
        } 
        if (tgtText == "Math-Min"){
            outputEl.textContent=Math.min(...myArr)
        }

    }

}
function allClear(event){
    document.querySelectorAll('.item').forEach(itemDefinedbyme =>{
        itemDefinedbyme.remove()
    })
    myArr=[]
    
}
  
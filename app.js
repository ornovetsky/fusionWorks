
const btnOne = document.getElementById('btn-1')
const btnTwo = document.getElementById('btn-2')
const btnThree = document.getElementById('btn-3')
const solOne = document.getElementById('sol-1')
const solTwo = document.getElementById('sol-2')
const solThree = document.getElementById('sol-3')


let isClickedOne = false
let isClickedTwo = false
let isClickedThree = false
window.addEventListener('click', (e) => { 
  if(e.target.id === 'btn-1'){

    if(!isClickedOne) {
      solOne.classList.remove('displaynone')
      solOne.classList.add('visible')
      btnOne.innerHTML = 'Hide solution'
      isClickedOne = true
      } else {
        solOne.classList.add('displaynone')
        solOne.classList.remove('visible')
        btnOne.innerHTML = 'See solution'
        isClickedOne = false
      }
  }
    if(e.target.id==='btn-2'){
      if(!isClickedTwo){
        solTwo.classList.remove('displaynone')
        solTwo.classList.add('visible')
        btnTwo.innerHTML = 'Hide solution'
        isClickedTwo = true
        } else {
          solTwo.classList.add('displaynone')
          solTwo.classList.remove('visible')
          btnTwo.innerHTML = 'See solution'
          isClickedTwo = false
        }
      }
  
    if(e.target.id==='btn-3'){
      if(!isClickedThree){
        solThree.classList.remove('displaynone')
        solThree.classList.add('visible')
        btnThree.innerHTML = 'Hide solution'
        isClickedThree = true
        } else {
          solThree.classList.add('displaynone')
          solThree.classList.remove('visible')
          btnThree.innerHTML = 'See solution'
          isClickedThree = false
        }
      }
  
}
)

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

function profile(i){
let index = i
const profile = document.getElementById(`person-${i}`)
profile.addEventListener('click', (e) => {
  if(index===1){
  profile.innerHTML = `
  <img src="./img/avatar2.jpg">
  <div class="container-contents">
    <p>Andrei Ornovetchii</p>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button class="btn btn-primary" onclick="profile(1)">Press me</button>
  </div>`}
    if(index === 2) {
      profile.innerHTML = `
      <img src="./img/avatar2.jpg">
      <div class="container-contents">
        <p>Andrei Ornovetchii</p>
        <a href="tel:+">37368070776</a> <br>
        <a href="mailto:ornovetsky@gmail.com">ornovetsky@gmail.com</a><br>
        <a href="https://github.com/ornovetsky">https://github.com/ornovetsky</a> <br>
        <a href="http://ornovetchii.com">http://ornovetchii.com</a> <br>
        <p class="text">tempor incididunt ut  </p>
        <button class="btn btn-primary" onclick="profile(1)">Press me</button>
      </div>`
    }
    if(index === 3) {
  profile.innerHTML = `
  <img src="./img/avatar2.jpg">
  <div class="container-contents">
    <p>Andrei Ornovetchii</p>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button class="btn btn-primary" onclick="profile(1)">Press me</button>
  </div>`
    }
  })
}
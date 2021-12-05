const result = document.getElementById('result');
const filter = document.getElementById('filter')


filter.addEventListener('input', e => filterData(e.target.value))
const itemList =[]

getUsers()



async function getUsers(){
const resp = await fetch('https://randomuser.me/api?results=50')
const {results} = await resp.json()

//clear result 
result.innerHTML =''
results.forEach(user=>{
    const li = document.createElement('li')
    itemList.push(li)
    li.innerHTML=`
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.first}</h4>
    <p>${user.location.city},${user.location.country}</p>
    </div>
    `

    result.appendChild(li)

})


}


function filterData(textInput){
   itemList.forEach(item=>{
       if(item.innerText.toLowerCase().includes(textInput.toLowerCase())){
           item.classList.remove('hide')
       }else{
           item.classList.add('hide')
       }
   })
}
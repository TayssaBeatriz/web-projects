// const technologiesData = [
//     {name:'HTML5', color:'#FF8C5E'},
//     {name:'CSS', color:'#A36AFF'},
//     {name:'JS', color:'#FEE631'}
// ]
// 

const ProjectData= [
    {
        tech:[{name:'HTML5', color:'#FF8C5E'},
            {name:'CSS3', color:'#A36AFF'},
            {name:'JS', color:'#FEE631'}
        ],
        link:'https://tayssabeatriz.github.io/web-projects/barberCursewebsite/',
        img:'img/capa.png',
        title:'Barber Curse',
        descrip:'landing page ',
        date:'10/2025',
    },
    {
        tech:[{name:'HTML5', color:'#FF8C5E'},
            {name:'CSS3', color:'#A36AFF'},
            {name:'JS', color:'#FEE631'}
        ],
        link:'',
        img:'img/hero section.png',
        title:'Dr.Ana Silva',
        descrip:'landing page ',
        date:'05/2025',
    }


    
]

    
const containerProjects = document.querySelector('.containerProjects')

ProjectData.forEach(itens =>{
const cardProject = document.createElement('div')
cardProject.classList.add('card-project')
 cardProject.innerHTML =`
    <a href="${itens.link}">
  <div class="container-img">
            <div class="technologies">

            </div>
            <img src="${itens.img}" alt="">
            <div class="data">${itens.date}</div>
            </div>
             <div class="container-txt">
            <h2>${itens.title}</h2>
            <p>${itens.descrip}</p>
          </div>
          </a>


 
 `

 const containerTechnologies = cardProject.querySelector('.technologies')

itens.tech.forEach(techItens=>{
 const tech = document.createElement('div')
 tech.classList.add('tech')

tech.textContent = techItens.name
tech.style.backgroundColor = techItens.color

containerTechnologies.appendChild(tech)
});


containerProjects.appendChild(cardProject)
});







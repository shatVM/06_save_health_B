const arrayOfhealthWishes = []

fetch('js/health_wishes.json')
   .then(response => response.json())
   .then(data => {
      data.forEach((item) => {
         arrayOfhealthWishes.push(item)
         //console.log(item)
      })
      //console.log(arrayOfhealthWishes)
   })
   .catch(error => console.error('Помилка при зчитуванні health-wishes:', error))

arrayOfhealthWishes.forEach((item) => {
   //console.log(item)
})

document.getElementById('btn_health_wishes').addEventListener('click', () => {
   let index = Math.floor(Math.random() * arrayOfhealthWishes.length)
   document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]
})

let img = 3

function amin(img) {
   const mainImage = document.getElementById('main-image');
   mainImage.style.opacity = '0'; // Почати з прозорості
   setTimeout(() => {
      mainImage.setAttribute('src', `img/gallery/${img}.jpg`);
      mainImage.style.opacity = '1'; // Показати зображення
   }, 300); // Час анімації має співпадати з transition у CSS
}

document.getElementById('btn-left-arrow').addEventListener('click', () => {
   console.log('left')
   img--
   console.log(img)
   if (img == 0) {
      img = 3
   }
   amin(img)
   //document.getElementById('main-image').setAttribute('src',`img/gallery/${img}.jpg`)
})

document.getElementById('btn-right-arrow').addEventListener('click', () => {
   console.log('right')
   img++
   console.log(img)
   if (img == 4) {
      img = 1
   }

   amin(img)

   //document.getElementById('main-image').setAttribute('src',`img/gallery/${img}.jpg`)
})

//робота з об'єктами

fetch('js/vitamins.json')
   .then(response => response.json())
   .then(data => {
      data.forEach((item) => {
         //console.log(item)

         let divVitamin = document.createElement('div')
         divVitamin.classList.add('vitamin')
         divVitamin.innerHTML = `
                  <p>${item.id}</p>
                  <h3>${item.title}</h3>
                  <hr>
                  <div class="img_container">                  
                     <img src="img/vitamins/${item.photo}" alt="Зображення ${item.title}" onerror="this.onerror=null; this.src='img/vitamins/No_Image_Available.jpg';">
                  </div
                  <p>${item.description}</p> 
                  <div>
                     <img src="img/vitamins/${item.schema}" alt="Схема ${item.title}" onerror="this.onerror=null; this.src='img/vitamins/No_Image_Available.jpg';">
                     <p>${'💚'.repeat(item.rating) + '🤍'.repeat(5 - item.rating)}</p>
                     <p>${item.type}</p>
                  </div>      
            `
         document.getElementById('p-vitamins').appendChild(divVitamin)
      })

   })
   .catch(error => console.error('Помилка при зчитуванні vitamins:', error))




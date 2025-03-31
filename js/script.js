const arrayOfhealthWishes = [
   "Збалансоване харчування: вживайте більше овочів, фруктів, злаків і нежирного білка.",
   "Достатня кількість води: пийте не менше 1,5-2 літрів води на день.",
   "Фізична активність: робіть зарядку, ходіть пішки, займайтеся спортом.",
   "Здоровий сон: спіть 7-9 годин на добу.",
   "Режим дня: лягайте і прокидайтеся в один і той самий час.",
   "Уникайте стресів: практикуйте медитацію або дихальні вправи.",
   "Сонячне світло: проводьте час на свіжому повітрі, щоб отримати вітамін D.",
   "Особиста гігієна: регулярно мийте руки, підтримуйте чистоту тіла.",
   "Відмова від шкідливих звичок: мінімізуйте вживання алкоголю та відмовтеся від куріння.",
   "Підтримка імунітету: їжте продукти, багаті на вітаміни C, D та цинк.",
   "Контроль ваги: слідкуйте за масою тіла, уникайте переїдання.",
   "Регулярні медичні обстеження: відвідуйте лікаря хоча б раз на рік.",
   "Безпека харчових продуктів: мийте продукти, дотримуйтеся правил зберігання їжі.",
   "Позитивне мислення: підтримуйте емоційне здоров'я, спілкуйтеся з приємними людьми.",
   "Розвиток розуму: читайте, розв'язуйте головоломки, навчайтеся новому.",
   "Релаксація: знайдіть час для хобі та відпочинку.",
   "Захист від інфекцій: у період епідемій дотримуйтеся дистанції та носіть маску.",
   "Вітамінізація: за потреби приймайте вітамінні добавки (після консультації з лікарем).",
   "Рух під час роботи: якщо у вас сидяча робота, робіть перерви на розминку.",
   "Свіже повітря: часто провітрюйте приміщення, виходьте на прогулянки."
];

document.getElementById('btn_health_wishes').addEventListener('click', () => {    
   let index = Math.floor(Math.random() * arrayOfhealthWishes.length)
   document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]
})

let img = 3

function amin(img){
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
   if(img == 0){
      img = 3
   }

   amin(img)

   //document.getElementById('main-image').setAttribute('src',`img/gallery/${img}.jpg`)
 })

 document.getElementById('btn-right-arrow').addEventListener('click', () => {
   console.log('right')
   img++
   console.log(img)
   if(img == 4){
      img = 1
   }

   amin(img)

   //document.getElementById('main-image').setAttribute('src',`img/gallery/${img}.jpg`)
 })

//робота з об'єктами

const arrayOfVitaminObjects = [
    {
      "id":"001",
      "title":"Вітамін А",
      "photo":"vitamin-a.png",
      "description":"Вітамін А — група близьких за хімічною будовою речовин, яка включає ретиноїди: ретинол (вітамін A1, аксерофтол), дегідроретинол (вітамін А2), ретиналь (ретинен, альдегід вітаміну A1), ретиноєву кислоту і кілька провітамінів — каротиноїдів, серед яких найважливішим є β-каротин.",
      "rating":3,
      "type":"💎 кристалічний",
   },
   {
      "id":"002",
      "title":"Вітамін В3",
      "photo":"vitamin-b.png",
      "description":"Нікоти́нова кислота́, також ніацин, вітамін B3, вітамін PP (від англ. pellagra preventing), нікотинамід — розчинний у воді вітамін; необхідний для багатьох реакцій окиснення у живих клітинах",
      "rating":3,
      "type":"💧 водорозчинний",
   },
   {
      "id":"005",
      "title":"Вітамін В12",
      "photo":"vitamin-b12.png",
      "description":"Ціанокобаламі́н — найчастіша синтетична форма, що містить молекули вітаміну В12 (кобаламін), здатні бути конвертованими людським організмом в активні форми вітаміну В12. Ціанокобаламін не виробляється в організмі людини",
      "rating":2,
      "type":"💧 водорозчинний",
   },
   {
      "id":"003",
      "title":"Вітамін С",
      "photo":"vitamin-c.png",
      "description":"Аскорбíнова кислотá (лат. Ascorbic acid (BP, JP, USP), лат. Acidum ascorbinicum (PhEur), гамма-лактон 2,3-дегідро-L-гулонової кислоти, вітамін C) — відносно проста органічна кислота.",
      "rating":5,
      "type":"💧 водорозчинний",
   },  
   
   {
      "id":"004",
      "title":"Вітамін D3",
      "photo":"vitamin-d3.png",
      "description":"Колекальциферо́л (Холекальциферол) — форма вітаміну D, ,ілий кристалічний порошок. Нерозчинний у воді, розчинний у спирті, ефірі, хлороформі, рослинних оліях. Малостійкий до дії світла, легко окислюється",
      "rating":1,
      "type":"💎 кристалічний",
   },

]

//console.log(arrayOfVitaminObjects)

arrayOfVitaminObjects.forEach((item) => {
   //console.log(item)

   let divVitamin = document.createElement('div')
   divVitamin.classList.add('vitamin')
   divVitamin.innerHTML = `
            <p>${item.id}</p>
            <h3>${item.title}</h3>
            <hr>
            <img src="img/vitamins/${item.photo}" alt="">
            <p>${item.description}</p> 
            <div>
               <span>${'💚'.repeat(item.rating) + '🤍'.repeat(5-item.rating)}</span>
               <p>${item.type}</p>
            </div>

      `

   document.getElementById('p-vitamins').appendChild(divVitamin)
})

// footer date
let date = document.getElementById('date') as HTMLSpanElement;
date.innerHTML = (new Date().getFullYear()).toString();

// faq functionality
let faq : { [index: string]: string } = {
    'What is Web 3.0?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are Web 3.0 jobs?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are blockchain jobs?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What skills do I need in blockchain technology to apply?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Which crypto companies do you work with?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Where can I find Web3 jobs?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are Web 3.0  jobs?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What is a blockchain?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are cryptocurrency jobs?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    'What are the best resources to learn about crypto?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    'What does the application process look like?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    'What are the benefits of working in crypto/blockchain?' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};

let faqBlock = document.querySelector('.faq-block') as HTMLDivElement;
let count : number = 0;

for (let [key, value] of Object.entries(faq)) {

    let faqHeader = document.createElement('div');
    let question = document.createElement('h6');
    let faqContentBlock = document.createElement('div');
    let faqContent = document.createElement('p');
    let faqElement = document.createElement('div');
    let img = document.createElement('img'); 
    img.src = '../src/images/svg/mdi-light_plus-circle.svg'
    img.alt = 'icon'
    img.classList.add('ml-1')

    faqElement.classList.add('px-30', 'bg-white', 'shadow-low', 'rounded-md', 'py-22', 'calcWidth', 'my-5', 'h-24', 'ease-in-new')
    
    question.innerHTML = key
    question.classList.add('font-montserrat', 'font-medium', 'text-lg', 'text-gray')
    faqHeader.append(question)
    faqHeader.append(img)
    faqHeader.classList.add('flex', 'items-center', 'justify-between', 'cursor-pointer')
    faqHeader.addEventListener('click', function(){
        count++
        faqContentBlock.classList.toggle('opacity-0')
        faqContentBlock.classList.toggle('h-0')
        faqContentBlock.classList.toggle('relative')
        faqContentBlock.classList.toggle('z-0')
        faqContent.classList.toggle('pt-4')
        faqElement.style.height = 96 + faqContentBlock.offsetHeight + 'px'
        if(faqContentBlock.classList.contains('opacity-0')){
            img.src = '../src/images/svg/mdi-light_plus-circle.svg'
        }else{
            img.src = '../src/images/svg/mdi-light_minus-circle.svg'
        }
    } )
    faqElement.append(faqHeader)


    faqContent.innerHTML = value
    faqContent.classList.add('font-montserrat')
    faqContentBlock.append(faqContent)
    faqContentBlock.classList.add('opacity-0', 'h-0', 'transition-all', 'relative', 'z-0')
    faqElement.append(faqContentBlock)

    faqBlock.append(faqElement) 
    
}




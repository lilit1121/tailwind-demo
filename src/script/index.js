"use strict";
// footer date
let date = document.getElementById('date');
date.innerHTML = (new Date().getFullYear()).toString();
// faq functionality
let faq = {
    'What is Web 3.0?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are Web 3.0 jobs?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are blockchain jobs?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What skills do I need in blockchain technology to apply?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Which crypto companies do you work with?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Where can I find Web3 jobs?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are Web 3.0  jobs?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What is a blockchain?': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'What are cryptocurrency jobs?': 'What are the best resources to learn about crypto?',
    'What are the best resources to learn about crypto?': 'What are the best resources to learn about crypto?',
    'What does the application process look like?': 'What are the best resources to learn about crypto?',
    'What are the benefits of working in crypto/blockchain?': 'What are the best resources to learn about crypto?'
};
let faqBlock = document.querySelector('.faq-block');
for (let [key, value] of Object.entries(faq)) {
    let faqHeader = document.createElement('div');
    let question = document.createElement('div');
    let faqContentBlock = document.createElement('div');
    let faqContent = document.createElement('p');
    let faq = document.createElement('div');
    faq.classList.add('px-30', 'bg-white', 'shadow-low', 'rounded-md', 'py-22', 'w-39-percent');
    console.log(faq.classList);
    question.innerHTML = key;
    faqHeader.append(question);
    faq.append(faqHeader);
    faqContent.innerHTML = value;
    faqContentBlock.append(faqContent);
    faq.append(faqContentBlock);
    faqBlock.append(faq);
}

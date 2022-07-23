const closeButton = document.querySelector('#close-button');
const settingButton = document.querySelector('#setting-button');
const spinButton = document.querySelector('#spin-button');
const wordsInput = document.querySelector('#words-input');
const wordShow = document.querySelector('#word-show');
const menu = document.querySelector('#menu');

const listToSpin = () => {
    const list = wordsInput.value.replace(/\s+/g, '/')
    const wordArray = list.split('/');
    return wordArray;
}

const spin = () => {
    wordShow.innerHTML = randomWord(listToSpin(), false)? randomWord(listToSpin(), false) : 'No word';
}

const randomWord = (wordArr, isDelete) => {
    if (wordArr) {
        const randomIndex = Math.floor(Math.random() * wordArr.length);
        const randomWord = wordArr[randomIndex];
        if (isDelete) {
            wordArr.splice(randomIndex, 1);
        }
        return randomWord;
    }
}

spinButton.addEventListener('click', () => {
    spin()
})

closeButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})

settingButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})
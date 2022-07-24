const closeButton = document.querySelector('#close-button');
const settingButton = document.querySelector('#setting-button');
const spinButton = document.querySelector('#spin-button');
const wordsInput = document.querySelector('#words-input');
const wordShow = document.querySelector('#word-show');
const menu = document.querySelector('#menu');
const wordsCount = document.querySelector('#words-count'); 

const listToSpin = () => {
    const list = wordsInput.value.replace(/\s+/g, '/')
    const wordArray = list.split('/');
    if (wordArray != '') {
        return wordArray
    }
    return 0;
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

const wordsCounter = () => {
    wordsCount.innerHTML = listToSpin().length ? listToSpin().length : '0';
}

spinButton.addEventListener('click', () => {
    spin()
    wordsCounter()
})

closeButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})

settingButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})
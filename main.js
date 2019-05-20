let wordList = [];

$(document).ready(
    async function() {
        await init();
        await test();
    }
);

async function init() {
    var url = "https://raw.githubusercontent.com/nm-t/TelestrationsPrompts/master/list.txt";

    var jsonFile = new XMLHttpRequest();
        jsonFile.open("GET", url, true);
        jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState == 4 && jsonFile.status == 200) {
            // Start reading the file contents
            let file = jsonFile.responseText;
            wordList = file.split('\n');
            console.log(wordList);

            let counterHolder = [];
            for (let j = 0; j < wordList.length; j = j + 1) {
                counterHolder[j] = 0;
            }

            for (let i = 0; i < 1000; i = i + 1) {
                let randomNumber = Math.floor(Math.random() * wordList.length);
                counterHolder[randomNumber] = counterHolder[randomNumber] + 1;
            }
        }
    }
}

async function test() {
    let counterHolder = [];
    for (let j = 0; j < wordList.length; j = j + 1) {
        counterHolder[j] = '0';
    }
    console.log(wordList.length);

    for (let i = 0; i < 10; i = i + 1) {

        let randomNumber = Math.floor(Math.random() * wordList.length);

        counterHolder[randomNumber] = counterHolder[randomNumber] + 1;

        // console.log({randomNumber});
        // console.log({counterHolder});
    }
}

function random() {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    let randomWord = wordList[randomIndex];
    $('#text-holder').text(randomWord);
}

function reset() {
    $('#text-holder').text('Prompt appears here');
}

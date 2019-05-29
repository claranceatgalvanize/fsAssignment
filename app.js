var fs = require('fs');

// read file async approach
fs.readFile('./challenge1/info.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// update file sync approach
let currentLine = fs.readFileSync('./challenge1/info.txt', 'utf8');
currentLine = `${currentLine}\n${currentLine}`;
fs.writeFileSync('./challenge2/info.txt', currentLine);

// rename file async approach
fs.rename('./challenge3/binfo.txt', 'challenge3/info.txt', err => {
    if (err) throw err;
    console.log('Rename complete!')
})

// copy file async approach
fs.copyFile('./challenge4/info.txt', './challenge4/destination.txt', err => {
    if (err) throw err;
    console.log('info.txt was copied to destination.txt');
});

// write file async approach
fs.writeFile('challenge5/info.txt', 'My-name-is-Clarance', err => {
    if (err) throw err;
    console.log('Your name was recorded successfully in into.txt')
})

// read file with specificity
fs.readdir('./challenge6/.', 'utf8', (err, data) => {
    if (err) throw err;
    data.map(el => {
        if (el.endsWith('.txt')) {
            console.log(el)
        }
    })
});
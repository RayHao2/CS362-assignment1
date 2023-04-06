const figlet = require('figlet');
//Grab user input
input_string = process.argv[2];
console.log(input_string);
//turn into ascii char
// for(let i = 0; i<input_string.length; i++){
//     let asciicode = input_string.charCodeAt(i);
//     console.log(asciicode);
// }
//output the ascii char
figlet.text(input_string, {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});


function wrap (string, col) {
    let array = string.split(' '),
        output = [],
        counter = 0;
    
        for (let i = 0; i < array.length; i++) {
            let len = output.length - 1;
            if (array[i].length + output[len].length < col){
                output[len] += array[i];
            }
            else { 
                output.push(array[i])
            }
        }
        
    
        return output.join('/n');
}


module.exports = wrap


// if (array.length === 1){
//     output.push(array[i])
// }
// else if (array[i].length > col && i !== 0) {
//     output.push(`/n${array[i]}/n`)
// } 
// else if (array[i].length > col && i === array.length - 1) {
//     output.push(`/n${array[i]}`)
// }
// else if (i === 0 && array.length > col) {
//     output.push(`${array[i]}/n`)
// }
// else  {
//     output.push
// // }
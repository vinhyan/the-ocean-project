/* const fizzBuzz = () => {
    let result = 1;
    let fizz = 'Fizz';
    let buzz = 'Buzz';
    let fizzBuzz = 'FizzBuzz';

    for (let i = 1; i <= 100; i++ ) {
       if ((i % 3 === 0) && (i % 5 === 0)) {
           console.log(fizzBuzz);
           result++
       } else if (i % 3 === 0) {
           console.log(fizz);
           result++
       } else if (i % 5 === 0) {
           console.log(buzz);
           result++
       } else {
            console.log(result);
            result++
       }

    }
}

fizzBuzz(); */

/*const triangle = () => {
    let result = '#';

    for (let i = 1; i <= 8; i++) {
        console.log(result);
        result = result + '#';
    }
}

triangle(); */

const chessBoard = () => {

    let pound = '#';
    let space = ' ';
    let sign1 = ' #';
    let sign2 = '# ';
    let size = 8;
    let result;

    for (let i = 1; i <= size; i++) {
        let repeat = size/2;
        result = sign1.repeat(repeat);
       // console.log(result);
        let line2 = sign2.repeat((repeat));
       // console.log(line2);
        
    }

    console.log(` # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # `)







}

chessBoard();
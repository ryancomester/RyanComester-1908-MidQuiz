function Arrayfunc() {
    var movies = ['breaking bad', 'family guy', 'simpsons', 'The Office', 'Interview'];

    if (movies[3].charAt(0) == 'I') {
        console.log("yay");
    }else{
        console.log("Nay");
    }

    var movies = [];

    var movies = ['breaking bad', 'family guy', 'simpsons'];

    movies.push('iron man');

    console.log(movies);
}

function ObjectFunc() {
    var Car = {
        model: 'Corolla',
        color: 'red',
        price: 99
    };
    
    if(Car.price > 50) {
        console.log("Expensive");
    }else{
        console.log("Affordable");
    }
    
    console.log(Car.color);
}

Arrayfunc();
ObjectFunc();
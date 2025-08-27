// function myFunction(getElementById="yourname") {
//     document.getElementById("demo").innerHTML = "Hello JavaScript!";
// }

    document.addEventListener('DOMContentLoaded', function() {
        const inputField = document.getElementById('yourname');
        const submitButton = document.getElementById('mybutton');

        submitButton.addEventListener('click', function() {
            const inputValue = inputField.value;
            document.getElementById('demo').innerHTML = "Hello,  " + inputValue + " !";
        });
    });

     const red = document.getElementById('red');
            red.addEventListener('click', function() {
                red.style.backgroundColor = 'red';
                red.style.color = 'white';
                red.style.fontSize = '20px';
    });

    const blue = document.getElementById('blue');
            blue.addEventListener('click', function() {
                blue.style.backgroundColor = 'blue';
                blue.style.color = 'black';
                blue.style.fontSize = '20px';
    });




    const green = document.getElementById('green');
            green.addEventListener('click', function() {
                green.style.backgroundColor = 'green';
                green.style.color = 'white';
                green.style.fontSize = '20px';
    });



    const yellow= document.getElementById('yellow');
            yellow.addEventListener('click', function() {
                yellow.style.backgroundColor = 'yellow';
                yellow.style.color = 'black';
                yellow.style.fontSize = '20px';
    });
document.addEventListener("DOMContentLoaded", function () {

    //récuperer les données à partir du HTML
    let arrayNumbers = [];

    $('li').each(function () {
        arrayNumbers.push($(this).text())
    });

    //calculer le nombre des occurences du chaque numéro

    function calculateOccurences(array, object) {
        array.forEach(element => {
            let num = element;
            object[num] = object[num] ? object[num] + 1 : 1;
        })
    }

    let counts = {};

    calculateOccurences(arrayNumbers, counts);

    // ajouter du CSS aux numéros uniques

    $('li').each(function () {
        let value = $(this).text();
        if (counts[value] === 1) {
            $(this).append('<span class="badge badge-danger badge-margin">Unique</span>').addClass("unique-numbers");
        }
    });

    // former un nouvel array

    let values = Object.values(counts);
    
    let finalCounts = {};
    calculateOccurences(values, finalCounts);

    //afficher les résultats dans le HTML

    let numberOfUniques = finalCounts[1];
    let numberofRepeating = values.length - finalCounts[1];

    $('.unique').html(numberOfUniques);
    $('.repeating').html(numberofRepeating);

});
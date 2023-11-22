// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons){
    return pokemons.filter(pokemons => pokemons.type.includes("Fire"));
}
console.log(getAllFirePokemons(pokemons));

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons){
    let shortest = pokemons[0];
    pokemons.forEach(pokemons => {
        if(pokemons.name.length >shortest.name.length){
            shortest = pokemons;
        }
    });

    return shortest.name;
}
console.log(shortestPokemon(pokemons));

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons){
    let candy = 0;
    pokemons.forEach(pokemons => {
        if(pokemons.candy_count){
            candy += pokemons.candy_count;
        }
    });
    
    const averageCandy = candy/pokemons.length;
    return parseFloat(averageCandy.toFixed(2));
}
console.log(candyAverage(pokemons));


// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons){
    let grounfPoke = pokemons.filter(pokemons => pokemons.type.includes("Ground"));
    let firstTen = grounfPoke.slice(0,10);
    let img = firstTen.map(pokemons => pokemons.img);

    return img;
}

console.log(getGroundPokeImg(pokemons));


// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons){
    let Pikachu = pokemons.filter(pokemons => pokemons.name.includes("Pikachu"));
    let weight = Pikachu[0].weight;
    let heavy =pokemons.filter(pokemons => pokemons.weight > weight);
    let names = heavy.map(pokemons => pokemons.name);

    return names;
}
console.log(getHeavyPokemons(pokemons));

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons){
    let names = pokemons.map(pokemons => pokemons.name);
    let order = names.sort();
    let firstTwenty = order.slice(0,20);

    return firstTwenty;
}
console.log(orderAlphabetically(pokemons));

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons){
    let strong = pokemons.filter(pokemons => pokemons.weaknesses.length === 1);
    let firstFifteen = strong.slice(0,15);
    let names = firstFifteen.map(pokemons => pokemons.name);

    return names;
}
console.log(strongPokemons(pokemons));

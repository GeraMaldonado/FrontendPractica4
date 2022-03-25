const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage("./assets/img/missingno.png");
        }
        else{
            return res.json();
        }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("type").innerHTML = data.types[0].type.name;
        const moves = `·${data.moves[0].move.name}<br>·${data.moves[1].move.name}<br>·${data.moves[2].move.name}<br>·${data.moves[3].move.name}`;
        document.getElementById("moves").innerHTML = moves;
        const ps = `--bar-value:${data.stats[0].base_stat}%`;
        document.getElementById("ps").style = ps;
        const atk = `--bar-value:${data.stats[1].base_stat}%`;
        document.getElementById("atk").style = atk;
        const def = `--bar-value:${data.stats[2].base_stat}%`;
        document.getElementById("def").style = def;
        const spatk = `--bar-value:${data.stats[3].base_stat}%`;
        document.getElementById("spatk").style = spatk;
        const spdef = `--bar-value:${data.stats[4].base_stat}%`;
        document.getElementById("spdef").style = spdef;
        const speed = `--bar-value:${data.stats[5].base_stat}%`;
        document.getElementById("speed").style = speed;
    })
}






const pokeImage = (url) => { 
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}


const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
}
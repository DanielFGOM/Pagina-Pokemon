        fetch ('https://raw.githubusercontent.com/fanzeyi/pokemon.json/refs/heads/master/pokedex.json')
            .then( response => response.json() )
            .then( data => mostrarData(data) )

        const mostrarData = (data) => {
            let body  = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr class="text-center" ><td>${data[i].id}</td><td>${data[i].name.english }</td><td>${data[i].type}</td><td>${data[i].base.HP}</td><td>${data[i].base.Attack}</td><td>${data[i].base.Defense}</td><td>${data[i].base.Speed}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
        }
     

function __main__() {

    var temporada = document.getElementById("temporada")
    var pais = document.getElementById("pais")
    var buscar = document.getElementById("buscar")

    for (var i = 2005; i <= 2020; i++) {
        var option_temp = new Option(i + " - " + (i + 1), i, false, false);
        temporada.appendChild(option_temp);
    }

    buscar.addEventListener("click", (evt) => {
        console.log(temporada.value)

        var settings = {
            "async": true,
            "type": "GET",
            "url": "https://api-football-standings.azharimm.site/leagues/" + pais.value + "/standings?season=" + temporada.value + "&sort=asc",
        };


        $.ajax(settings).done(function (response) {
            console.log(response);
            var tabla = document.getElementById("clasificacion")
            var liga = document.getElementById("nombre_liga")
            liga.innerHTML = response.data.name + "       " + response.data.seasonDisplay
            tabla.innerHTML = "<div>Puesto</div>" +
                "<div>Equipo</div>" +
                "<div>Puntos</div>"


            for (let i = 0; i < response.data.standings.length; i++) {
                var puesto = document.createElement("div")
                puesto.className = "tabla"
                var equipo = document.createElement("div")
                equipo.className = "tabla"
                var puntos = document.createElement("div")
                puntos.className = "tabla"

                puesto.innerHTML = i + 1
                equipo.innerHTML = response.data.standings[i].team.name
                puntos.innerHTML = response.data.standings[i].stats[6].value
                tabla.appendChild(puesto)
                tabla.appendChild(equipo)
                tabla.appendChild(puntos)

            }




        });
    })




}
__main__();
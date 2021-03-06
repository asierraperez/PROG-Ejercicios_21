function borraContenidoHTML(e_content) {
    if (e_content) {
        var contenido = document.getElementsByClassName("contenido")
        var elementos = contenido.length

        for (let i = 0; i < elementos; i++) {
            console.log(contenido)
            document.getElementById("content").removeChild(contenido[0])

        }
    }
}

function fechaAleatoria() {
    var hoy = new Date()
    var max_year = hoy.getFullYear()
    var year = Math.floor(Math.random() * ((max_year + 1) - 2000) + 2000)
    var month = Math.floor(Math.random() * (13 - 1) + 1)
    if (month == 2) {
        if (year % 4 == 0) {
            var day = Math.floor(Math.random() * (30 - 1) + 1)
        } else {
            var day = Math.floor(Math.random() * (29 - 1) + 1)
        }

    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        var day = Math.floor(Math.random() * (32 - 1) + 1)
    } else {
        var day = Math.floor(Math.random() * (31 - 1) + 1)
    }
    return year + "-" + month + "-" + day
}



function __main__() {

    var search = document.getElementById("btn")
    var api_key = "eGcz4CusU7ChsTgFvaJlIFN58h57e01iDGARwcfe"
    var existe_content = false



    search.addEventListener("click", (evt) => {

        borraContenidoHTML(existe_content)
        var date = fechaAleatoria()

        var settings = {
            "async": true,
            "type": "GET",
            "url": "https://api.nasa.gov/planetary/apod?api_key=" + api_key + "&date=" + date,
        }

        $.ajax(settings).done(function (response) {
            console.log(response)
            var image = document.createElement("img")
            image.className = "contenido"
            var title = document.createElement("h3")
            title.className = "contenido"
            var explanation = document.createElement("p")
            explanation.className = "contenido"
            image.src = response.url
            explanation.innerHTML = response.date + "<br>" + "<br>" + response.explanation
            title.innerHTML = response.title
            document.getElementById("content").appendChild(image)
            document.getElementById("content").appendChild(title)
            document.getElementById("content").appendChild(explanation)
            existe_content = true

        });
    })

}
__main__();

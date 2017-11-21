function renderMovie(movie){
document.getElementById("title").innerText = movie.title;
document.getElementById("description").innerText = movie.description;

for (let index = 0; index < movie.actors.length; index++) {
    let actor = movie.actors[index];
    document.getElementById("actors").innerHTML += "<li>" + actor + "</li>";
}
}

renderMovie(moviedata);
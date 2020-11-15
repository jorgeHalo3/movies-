
var movie1 ={
    "name":"Starwars a new hope",
     "year":"1977",
     "director":"George Lucas",
     "picture":"http://cdn.collider.com/wp-content/uploads/2015/12/star-wars-a-new-hope-poster.jpg"
}
var movie2 ={
    "movie":"Pinapple Express",
     "year":"2008",
    "driector":"David Green",
    "picture":"https://fanart.tv/fanart/movies/10189/movieposter/pineapple-express-55634a64717d7.jpg",
}
var movie3 ={
    "movie":"The Princess Bride",
    "year":"1987",
    "director":"Rob Reiner",
    "picture":"http://www.1ksmiles.com/wp-content/uploads/2014/04/Princess-Bride-movie-poster.jpg",
}
var movie4 ={
    "movie":"Akira",
    "year":"1988",
    "director":"Katsuhiro Otomo ",
    "picture":"https://fanart.tv/fanart/movies/149/movieposter/akira-52526e6192867.jpg",
}
var movie5 ={
     "movie":"Bee Movie",
     "year":"2007",
    "director":"Simon Smith,Steve Hickner",
    "picture":"https://fanart.tv/fanart/movies/5559/movieposter/bee-movie-56354f73e3e57.jpg",
}
var movieArray = [movie1,movie2,movie3,movie4,movie5];
document.addEventListener('DOMContentLoaded', function() {
    var ol = document.getElementsByTagName("ol")[0];
    movieArray.forEach(function(item) {
 
        
        let li = document.createElement('li');
 
        let div = document.createElement('div');
        div.innerHTML = item.name + " - " + item.year + " - directed by " + item.director;
 
        let img = document.createElement('img');
        img.src = item.picture;
        img.height = "250";
 
        
        li.appendChild(div);
        li.appendChild(img);
 
        ol.appendChild(li);
 
    });
}, false);

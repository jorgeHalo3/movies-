
var movie1 ={
    "name":"Starwars a new hope",
     "year":"1977",
     "director":"George Lucas",
     "picture":"https://www.google.com/search?q=star+wars+a+new+hope&sxsrf=ALeKk00XQgaHFiMTJr9zuQBYeRzswtCnYA:1605379856638&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjsgdaA2oLtAhUxwFkKHfAeDPkQ_AUoAXoECC4QAw&biw=840&bih=762&dpr=1.13#imgrc=SOVg0iTFqQik-M"
}
var movie2 ={
    "movie":"Pinapple Express",
     "year":"2008",
    "driector":"David Green",
    "picture":"https://www.google.com/search?q=pinapple+express&tbm=isch&ved=2ahUKEwjvuMeB2oLtAhURTlMKHcAYAEYQ2-cCegQIABAA&oq=pinapple+express&gs_lcp=CgNpbWcQAzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECAAQQzoFCAAQsQM6CAgAELEDEIMBOgcIABCxAxBDUILqCVi13wpgtOQKaAFwAHgCgAFaiAG1EpIBAjMxmAEAoAEBqgELZ3dzLXdpei1pbWewAQnAAQE&sclient=img&ei=EiewX-_nHZGczQLAsYCwBA&bih=762&biw=840#imgrc=8jnfU1L2RSY7uM",
}
var movie3 ={
    "movie":"The Princess Bride",
    "year":"1987",
    "director":"Rob Reiner",
    "picture":"https://www.google.com/search?q=princess+bride&tbm=isch&ved=2ahUKEwjLibrW2oLtAhWCL1MKHT70BRIQ2-cCegQIABAA&oq=princess+bride&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQsQMyAggAMgIIADIFCAAQsQMyBQgAELEDMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECAAQQzoICAAQsQMQgwE6BwgAELEDEENQ5cYRWK3kEWCk5RFoAXAAeACAAVOIAZwIkgECMTSYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCcABAQ&sclient=img&ei=xCewX8uXIILfzAK-6JeQAQ&bih=762&biw=840#imgrc=dDu73EhpaObuaM",
}
var movie4 ={
    "movie":"Akira",
    "year":"1988",
    "director":"Katsuhiro Otomo ",
    "picture":"https://www.google.com/search?q=akira&tbm=isch&ved=2ahUKEwio0avi24LtAhWI0FMKHUsuBXUQ2-cCegQIABAA&oq=akira&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIFCAAQsQMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBQgAELEDMgUIABCxAzIFCAAQsQM6BwgjEOoCECc6BAgjECc6AggAOggIABCxAxCDAVCmiwRYq5UEYMWgBGgBcAB4AIABTogB7wKSAQE1mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=6SiwX-i4NoihzwLL3JSoBw&bih=762&biw=840#imgrc=SkI80ejBQcHekM",
}
var movie5 ={
     "movie":"Bee Movie",
     "year":"2007",
    "director":"Simon Smith,Steve Hickner",
    "picture":"https://www.google.com/search?q=bee+movie&tbm=isch&ved=2ahUKEwiH75-E3ILtAhUDslMKHUZIDQMQ2-cCegQIABAA&oq=bee+movie&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQsQMyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQzoHCCMQ6gIQJzoICAAQsQMQgwE6BwgAELEDEENQtLEIWNrCCGCrxAhoAXAAeACAAV2IAfsFkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=MSmwX8cSg-TOAsaQtRg&bih=762&biw=840#imgrc=ootkSMyyo9qoqM",
}
var movieArray = [movie1,movie2,movie3,movie4,movie5];
////var ol = document.getElementsByTagName("ol")[0]///
movieArray.forEach(function(item){ var ol = document.querySelector("ol")
    let li = document.createElement('li');
   ol.appendChild(li);
    li.innerHTML+=item;
});
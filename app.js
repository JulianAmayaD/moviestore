//document.getElementById("spotlight").addEventListener('click',Ejecutar);

var categorys = new Array("accion","aventura","drama","terror");

var data =[
  {
  title: "Spotlight",
  category: categorys[2],
  year: 2016,
  ranking : 459,
  director: "Tom McCarthy",
  actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
  synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
  img_src: new Array("Spotlight.jpg","Spotlight2.jpg"),
  video: "http://www.youtube.com/embed/6B6OBZ-Igv4"
},
{
title: "Los Juegos del Hambre",
category: categorys[1],
year: 2015,
ranking : 380,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("Hungergames.jpg","Hungergames2.jpg"),
video: "http://www.youtube.com/embed/UiMoB7w-ICI"
},
{
title: "Interstellar",
category: categorys[0],
year: 2014,
ranking : 480,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("Interstellar.jpg","Interstellar2.jpg"),
video: "http://www.youtube.com/embed/KgdHelzuS5M"
},
{
title: "El Conjuro",
category: categorys[3],
year: 2014,
ranking : 400,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("conjuro.jpg","conjuro2.jpg"),
video: "http://www.youtube.com/embed/OJgDCNyfWfQ"
},
{
title: "Dallas Buyers Club",
category: categorys[2],
year: 2013,
ranking : 420,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("dallas.jpg","dallas2.jpg"),
video: "http://www.youtube.com/embed/uVwOaqPp4lo"
},
{
title: "Harry Potter",
category: categorys[1],
year: 2012,
ranking : 378,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("potter.jpg","potter2.jpg"),
video: "http://www.youtube.com/embed/yB9YvJ0a9aY"
},
{
title: "El Renacido",
category: categorys[2],
year: 2016,
ranking : 390,
director: "Alejandro González Iñárritu",
actors: "Leonardo DiCaprio, Tom Hardy, Will Poulter, Domhnall Gleeson, Paul Anderson, Lukas Haas, Brendan Fletcher, Brad Carter, Joshua Burge, Kristoffer Joner, Vincent Leclerc, Robert Moloney, Dave Burchill, McCaleb Burnett, Christopher Rosamond ",
synopsis: "En las profundidades de la América salvaje, el trampero Hugh Glass (Leonardo DiCaprio) resulta gravemente herido y es abandonado a su suerte por un traicionero miembro de su equipo, John Fitzgerald (Tom Hardy). Con la fuerza de voluntad como su única arma, Glass deberá enfrentarse a un territorio hostil, a un invierno brutal y a la guerra constante entre las tribus de Nativos Americanos, en una búsqueda heroica e implacable para conseguir vengarse de Fitzgerald.",
img_src: new Array("Renacido.jpg","Renacido2.jpg"),
video: "http://www.youtube.com/embed/xJWb3l1TInI"
},
{
title: "Starwars 7",
category: categorys[1],
year: 2015,
ranking : 389,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("wars.jpg","wars.jpg"),
video: "http://www.youtube.com/embed/6B6OBZ-Igv4"
},
{
title: "El Padrino",
category: categorys[2],
year: 1999,
ranking : 430,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("Padrino.jpg","Padrino2.jpg"),
video: "http://www.youtube.com/embed/gCVj1LeYnsc"
},
{
title: "Mision a Marte",
category: categorys[0],
year: 2015,
ranking : 367,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("mision.jpg","mision2.jpg"),
video: "http://www.youtube.com/embed/bPM7mjLY0ZU"
},
{
title: "El Hobbit",
category: categorys[1],
year: 2015,
ranking : 369,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("hobbit.jpg","hobbit2.jpg"),
video: "http://www.youtube.com/embed/mIeR92fwNtw"
},
{
title: "Anabelle",
category: categorys[3],
year: 2014,
ranking : 250,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("anabelle.jpg","anabelle2.jpg"),
video: "http://www.youtube.com/embed/KN82lPNZyoU"
},
{
title: "Carrie",
category: categorys[3],
year: 2013,
ranking : 210,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("carrie.jpg","carrie2.jpg"),
video: "http://www.youtube.com/embed/brgKDctV59I"
},
{
title: "Siniestro",
category: categorys[3],
year: 2013,
ranking : 312,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("siniester.jpg","siniester2.jpg"),
video: "http://www.youtube.com/embed/6BiMQPil_4M"
},
{
title: "American Sniper",
category: categorys[0],
year: 2013,
ranking : 289,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("sniper.jpg","sniper2.jpg"),
video: "http://www.youtube.com/embed/ZT06OYmA_5s"
},
{
title: "Guerra Mundial Z",
category: categorys[0],
year: 2012,
ranking : 385,
director: "Tom McCarthy",
actors: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, Stanley Tucci, Mark Strong, John Slattery, Brian d’Arcy James, Billy Crudup, Jamey Sheridan, Len Cariou, Paul Guilfoyle, Lana Antonova, Zarrin Darnell-Martin, Neal Huff, Elena Juatco",
synopsis: "'Spotlight' narra la fascinante historia real de la investigación ganadora del Premio Pulitzer llevada a cabo por el Boston Globe que sacudió la ciudad y causó una enorme crisis en una de las instituciones más antiguas y seguidas del mundo. Cuando el tenaz equipo de reporteros de la sección 'Spotlight' ahonda en los alegatos de abuso dentro de la Iglesia Católica, descubren en su investigación el encubrimiento llevado a cabo durante décadas por parte de las altas esferas de organizaciones religiosas, legales y gubernamentales de Boston, desatando una ola de revelaciones alrededor del mundo.",
img_src: new Array("wz.jpg","spotlight2.jpg"),
video: "http://www.youtube.com/embed/CI4U_Hj_nFw"
}
]

function createMovie(img_src, title_ubc) {
  var article = document.createElement("article");
  article.className +="movie animated fadeIn";
  var section = document.getElementById("section");
  section.appendChild(article);
  var imagen = document.createElement("img");
  imagen.src = img_src;
  imagen.className += "img_movie";
  var name = title_ubc;
  imagen.id = name;
  imagen.addEventListener("click",createView);
  article.appendChild(imagen);
}
for (var i = 0; i < data.length; i++) {
   createMovie(data[i].img_src[0],data[i].title);
}

var parameters = new Array("Categoría: "," Puntos: "," Año: ","Director: ","Actores: ","Sinopsis: ");

function createP(texto){
  var p = document.createElement("p");
  p.className += "text_movie";
  var t = document.createTextNode(texto);
  p.appendChild(t);
  return p;
}

function createView(){

  var j=0;

  document.getElementById('section').innerHTML="";

  var id = this.getAttribute("id");
  var h2 = document.createElement("h2");
  h2.id += "title_movie";
  console.log(id);
  console.log(data[j].title);
  while (id!=data[j].title) {
      j=j+1;
  }
  var texto = document.createTextNode(data[j].title);
  var section = document.getElementById("section");
  h2.appendChild(texto);
  section.appendChild(h2);

  var table = document.createElement("table");
  section.appendChild(table);
  var td1 = document.createElement("td");
  table.appendChild(td1);
  var td2 = document.createElement("td");
  table.appendChild(td2);
  var center = document.createElement("center");
  var img2 = document.createElement("img");
  img2.src = data[j].img_src[1];
  img2.className +="img_movieIn";
  center.appendChild(img2);
  td1.appendChild(center);

  //DIV1
  var div1 = document.createElement("div");
  div1.className += "info";
  td1.appendChild(div1);
  div1.appendChild(createP(parameters[0]));
  div1.appendChild(createP(data[j].category+" - "));
  div1.appendChild(createP(parameters[1]));
  div1.appendChild(createP(data[j].ranking+" - "));
  div1.appendChild(createP(parameters[2]));
  div1.appendChild(createP(data[j].year));
  //DIV2
  var div2 = document.createElement("div");
  div2.className += "info";
  td1.appendChild(div2);
  div2.appendChild(createP(parameters[3]));
  div2.appendChild(createP(data[j].director));
  div2.appendChild(createP(parameters[4]));
  var br = document.createElement("br");
  div2.appendChild(br);
  div2.appendChild(createP(data[j].actors));
  div2.appendChild(createP(parameters[5]));
  div2.appendChild(createP(data[j].synopsis));

  //VIDEO
  var center = document.createElement("center");
  var iframe = document.createElement("iframe");
  iframe.type +="text/html";
  iframe.className +="youtube-player";
  iframe.id = "video";
  iframe.src = data[j].video;
  iframe.height = "400";
  iframe.width = "640";
  iframe.frameBorder=0;
  center.appendChild(iframe);
  td2.appendChild(center);
}

//BUSCAR
function search() {
  var word = document.getElementById('box_text');
  for (var i = 0; i < data.length; i++) {
    console.log(word.value);
    console.log(data[i].title);
    if(word.value==data[i].title){
      document.getElementById('section').innerHTML="";
      console.log(word.value);
      console.log(data[i].title);
      createMovie(data[i].img_src[0],data[i].title);
      break;
    }
  }
}
var buttonS = document.getElementById('button');
buttonS.addEventListener("click",search);

//CATEGORIAS
function cat(){
  var categor = this.getAttribute("id");
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    if(categor==data[i].category){
      createMovie(data[i].img_src[0],data[i].title);
    }
  }
}
for (var i = 0; i < categorys.length; i++) {
  var buttonC = document.getElementById(categorys[i]);
  buttonC.addEventListener("click",cat);
}

function catAll(){
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    createMovie(data[i].img_src[0],data[i].title);
  }
}
var buttonA = document.getElementById("todas");
buttonA.addEventListener("click",catAll);


function catE(){
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    if(data[i].year>2014){
      createMovie(data[i].img_src[0],data[i].title);
    }
  }
}
var buttonE = document.getElementById("estrenos");
buttonE.addEventListener("click",catE);


function catA(){
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    if(data[i].year<=2014){
      createMovie(data[i].img_src[0],data[i].title);
    }
  }
}
var buttonA = document.getElementById("antiguas");
buttonA.addEventListener("click",catA);

//TOP 10
function or(){
  var points = [];
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    points[i] = data[i].ranking;
  }
  var result = points.sort();
  var order = result.reverse();
  for (var i = 0; i < 10; i++) {
    for (var n = 0; n < data.length; n++) {
      if(order[i]==data[n].ranking){
        createMovie(data[n].img_src[0],data[n].title);
      }
    }
  }
}
var buttont = document.getElementById("top");
buttont.addEventListener("click",or);

//PeliMes
function mes(){
  var points = [];
  document.getElementById('section').innerHTML="";
  for (var i = 0; i < data.length; i++) {
    points[i] = data[i].ranking;
  }
  var result = points.sort();
  var order = result.reverse();
    for (var n = 0; n < data.length; n++) {
      if(order[0]==data[n].ranking){
        createMovie(data[n].img_src[0],data[n].title);
      }
    }
}
var buttonm = document.getElementById("pelimes");
buttonm.addEventListener("click",mes);

var allIMG = [
    {paire: "img/Dardevil1.jpg"},{paire: "img/Dardevil1.jpg"},
    {paire: "img/DrStrange1.jpg"},{paire: "img/DrStrange1.jpg"},
    {paire: "img/Ghost-Rider1.jpg"},{paire: "img/Ghost-Rider1.jpg"},
    {paire: "img/Hulk.jpg"},{paire: "img/Hulk.jpg"},
    {paire: "img/HumanTorch.jpg"},{paire: "img/HumanTorch.jpg"},
    {paire: "img/ScarletWitch1.jpg"},{paire: "img/ScarletWitch1.jpg"},
    {paire: "img/Spiderman.jpg"},{paire: "img/Spiderman.jpg"},
    {paire: "img/Thor.jpg"},{paire: "img/Thor.jpg"},
    {paire: "img/Vision.jpg"},{paire: "img/Vision.jpg"},
]

var idIMG = 0;
var main = document.querySelector("main");
var v;
var carte = 2;
var id 
var x = "img/dos.jpeg";
var img;
var carte1;
var carte1ID;
var carte2;
var carte2ID;
var carteRetourner = 1;
var seconde = 0;
var minutes = 0;
var timerTotal;

function start(){
    timerTotal = window.setInterval(startTimer,1000);
    carteStart()
    document.querySelector("#start").style.display = "none";
    document.querySelector("#restar").style.display = "block";
}

melanger() 
function carteStart(){
      
    for (var i = 0; i < allIMG.length; i++){  
        
        // permet de faire une variable pour créer une image
        var createIMG = document.createElement("img");
        img = createIMG;

        // recupèrer le lien de l'image 
        v = allIMG[i].paire;
        // x = "img/dos.jpeg";

        // créer l'image deans l'html et l'associée avec sont parent
        main.appendChild(createIMG);
        console.log(allIMG[i]);
       
        // permet de lui Attribuer un id
        createIMG.setAttribute("id", idIMG);
        // permet de lui attribuer ça src pour afficher l'image retourner 
        createIMG.setAttribute("src", x)
        // appel de la fonction montrer pour attribuer un ecouteur a chaque carte 
        montrer(createIMG)
        
        
        idIMG++;
        
    }  
}
// carteStart()

// function qui mélange les carte 
function melanger(){
    allIMG = allIMG.sort(() => Math.random() - 0.1);
}


//permet de montrer les carte 
function montrer(img){
    
    // test recupère l'id des img 
    test = document.getElementById(idIMG);
    // onclick avec l'id de chaque img 
    test.addEventListener('click', function () {
        // condition pour faire voir que 2 carte max 
        
        if (carte > 0){
            carte--;
            // permet de Récupérer encore une foi chaque id avec this 
        id = this.getAttribute('id');
        // permet de Récupérer le lien de l'img par l'id
        v = allIMG[id].paire;
        console.log(v) 
        //afficher quand on click grace a l'id (v)   
        img.setAttribute("src", v);
        console.log(carte)
        console.log(id)
        }else{
            console.log("que deux carte")
            differente()
            win()
        }
        
        if (carte == 1){
            //permet de stocker la src de l'image 1 
            carte1 = allIMG[id].paire
            //permet de stocker l'id de l'image 1 
            carte1ID = id
            console.log(carte1)
        }else if(carte == 0){
            //permet de stocker la src de l'image 2 
            carte2 = allIMG[id].paire
            //permet de stocker l'id de l'image 2 
            carte2ID = id
            console.log(carte2)
        }
    });
}


function differente(){
    // condition pour comparer les 2 carte 
    if (carte1 != carte2){
        // si elle sont different alors changer la src pour avoir celle du dos 
        var img1Swap = document.getElementById(carte1ID)
        img1Swap.setAttribute("src", x)
        var img2Swap = document.getElementById(carte2ID)
        img2Swap.setAttribute("src", x)
        carte = 2;
    }else if (carte1 == carte2){
        // sinon les garder tourner pour voir le  personnage 
        console.log("bien jouer")
        carteRetourner++;
        console.log("carteRetourner : " + carteRetourner)
        carte = 2;
    }
}

function startTimer(){
    seconde++;
  
    // si seconde/60 est Strictement egale a 1 alors seconde sera egale a 0 et minute
    // augmente de 1
    if (seconde/60 ==1){
      seconde=0;
      minutes++;
  
    }
    // si les secondes son inferieur a 10 tu rajoute un 0 devant 
    if (seconde < 10){
      seconde = "0"+seconde;
    }
  
    // permet d'afficher le temps sur html
    document.getElementById('timer').innerHTML = minutes +":"+seconde; 
  }

  function win(){
      if (carteRetourner == 9){
        var winMSG = minutes +":"+seconde
        clearInterval(timerTotal);
        document.getElementById('timer').innerHTML = winMSG; 
      }
  }

  // Code Copyright par Jarod_Wuillaume
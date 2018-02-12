
$('.sd').click(function(){
	$('.hero, .content').addClass('scrolled');
});

$('.hero').mousewheel(function(e){
	if( e.deltaY < 0 ){
		$('.hero, .content').addClass('scrolled');
		return false;
	}
});

// // let tels = document.querySelector("body");
// // tels.addEventListener("onscroll",contt);
//  function contt(){
//      alert("hellllo");

//  };

$(window).mousewheel(function(e){
	if( $('.hero.scrolled').length ){
		if( $(window).scrollTop() == 0 && e.deltaY > 0 ){
			$('.hero, .content').removeClass('scrolled');
		}
	}
});















let tel = document.querySelector("#tel");
tel.addEventListener("click",contact);
function contact(){
    let objet = document.querySelector("#objetcontact");
    objet.style.display="block";
    let afficheur = document.querySelector("#div2");
afficheur.innerHTML = `Abderraouf Nini <br/> Contacts: <br/><br/> email: naraouf@hotmail.com <br/><br/> github:<a> https://github.com/naraouf</a>`;
let bUrl="img/fond_ecran.jpg"
afficheur.style.backgroundImage = "url("+bUrl+")";
afficheur.style.marginTop = "0vw";
afficheur.style.marginLeft = "0vw";
afficheur.style.backgroundSize = "43vw 14.7vw";

};

let read_me = document.querySelector("#read_me");
read_me.addEventListener("click",infos);
function infos(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Afin de naviguer et voir le contenu des differentes rubriques, il suffit de cliquer sur les icones pour voir leur contenu s'afficher sur le tableau, et être orienté vers les pages des projets realisés ou en cours de réalisation.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let slim = document.querySelector("#cadre_slim");
slim.addEventListener("click",cadre_S);
function cadre_S(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise du micro framework Slim de PHP,  nécessaire au routage, à la gestion des requêtes & réponses et à l’affichage/templating d’une page.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let sass = document.querySelector("#cadre_sass");
sass.addEventListener("click",cadre_Ss);
function cadre_Ss(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de l'extension Sass de Css3, qui ajoute de nouvelles règles dans la façon d'intégrer un web design. Les grandes nouveautés sont : les variables, les mixins, l'héritage de sélection et différentes options très utiles.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let docker = document.querySelector("#cadre_docker");
docker.addEventListener("click",cadre_D);
function cadre_D(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Docker, il permet aux développeurs de créer des modèles dits images qui peuvent être utilisés pour créer des machines virtuelles légères dénommées conteneurs, capables d'exécuter les applications métier. Ces conteneurs légers peuvent alors être utilisés dans tous les environnements (intégration, QA, production).Docker facilite énormément l'automatisation des opérations de déploiement, permet d'isoler les applications et d'optimiser l'utilisation de ressources.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let node = document.querySelector("#cadre_node_js");
node.addEventListener("click",cadre_N);
function cadre_N(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Node JS, c'est une plateforme de développement Javascrip coté serveur.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let jquery = document.querySelector("#cadre_jquery");
jquery.addEventListener("click",cadre_J);
function cadre_J(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Jquery, c'est une bibliothèque JavaScript libre et multiplateforme créée pour faciliter l'écriture de scripts côté client dans le code HTML des pages web";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let bootstrap = document.querySelector("#cadre_bootstrap");
bootstrap.addEventListener("click",cadre_B);
function cadre_B(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Bootstrap, un framework CSS, mais pas seulement, puisqu'il embarque également des composants HTML et JavaScript. Il comporte un système de grille simple et efficace pour mettre en ordre l'aspect visuel d'une page web. Il apporte du style pour les boutons, les formulaires, la navigation etc... ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let html = document.querySelector("#cadre_html");
html.addEventListener("click",cadre_H);
function cadre_H(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Html5, dernière version du langage de base pour la création de sites internet, aportant des nouveauté notament en incorporant des balises videos et audio entre autres. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let css = document.querySelector("#cadre_css");
css.addEventListener("click",cadre_C);
function cadre_C(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise du CSS3, dernière version du langage utilisé de mise en forme des sites web. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let js = document.querySelector("#cadre_js");
js.addEventListener("click",cadre_J);
function cadre_J(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de JavaScript, un langage de programmation (de script pour être plus précis) coté client. Il s'agit d'un langage orienté prototype exécuté sur le navigateur. Il est doté d'un grand potentiel est une syntaxe extrêmement riche qui permet de rendre les pages Web plus interactives et plus attrayantes. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let php = document.querySelector("#cadre_php");
php.addEventListener("click",cadre_P);
function cadre_P(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de PHP7, dernière version de ce langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let twig = document.querySelector("#cadre_twig");
twig.addEventListener("click",cadre_T);
function cadre_T(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise du framework twig, un moteur de templates pour le langage de programmation PHP, utilisé par défaut par le framework Symfony. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let npm = document.querySelector("#cadre_npm");
npm.addEventListener("click",cadre_NP);
function cadre_NP(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de NPM, le gestionnaire de paquets officiel de Node.js.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let njinx = document.querySelector("#cadre_nginx");
njinx.addEventListener("click",cadreNJ);
function cadreNJ(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de njinx, logiciel libre de serveur Web (ou HTTP) ainsi qu'un proxy inverse. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let ajax = document.querySelector("#cadre_ajax");
ajax.addEventListener("click",cadreAJ);
function cadreAJ(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Ajax,ce dernier n'est ni une technologie ni un langage de programmation ; AJAX est un concept de programmation Web reposant sur plusieurs technologies comme le JavaScript et le XML – d'où le nom AJAX. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let webpack = document.querySelector("#cadre_webpack");
webpack.addEventListener("click",cadre_W);
function cadre_W(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de webpack, ce dernier propose un système de loader qui permet de transformer tout et n'importe quoi en JavaScript (mais pas que). ... Webpack prend en charge la fonction require() (connue et utilisée dans node.js et browserify) et permet de définir des nouveaux comportements. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let git = document.querySelector("#cadre_git");
git.addEventListener("click",cadre_G);
function cadre_G(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Github, un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let photo = document.querySelector("#cadre_photophiltre");
photo.addEventListener("click",cadrePH);
function cadrePH(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de photophiltre, gimp, photoshop : logiciels de traitements classiques de l'image, ils disposent d'une centaine de filtres pour améliorer et transformer des photos numériques. ";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let press = document.querySelector("#cadre_wordpress");
press.addEventListener("click",cadre_PR);
function cadre_PR(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de Wordpress,  un système de gestion de contenu gratuit et open-source. Ce logiciel libre écrit en PHP repose sur une base de données MySQL.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};
let linux= document.querySelector("#cadre_linux");
linux.addEventListener("click",cadreLX);
function cadreLX(){
    let afficheur = document.querySelector("#div2");
    afficheur.textContent="Maitrise de linux(ubuntu) et langage bash, ubuntu est un système d’exploitation GNU/Linux basé sur la distribution Linux Debian.";
    let bUrl="img/fond_ecran.jpg"
    afficheur.style.backgroundImage = "url("+bUrl+")";
    afficheur.style.marginTop = "0vw";
    afficheur.style.marginLeft = "0vw";
    afficheur.style.backgroundSize = "43vw 14.7vw";
};

let facebook = document.querySelector("#site_web");
facebook.addEventListener("mouseover",inf);
function inf(){
     
    let bUrl="img/facebook.png"
    let elem = document.querySelector("#div2");    
        elem.style.backgroundImage = "url("+bUrl+")";
        elem.style.backgroundSize = "43vw 12.7vw";
        elem.style.marginTop = "1.5vw";
        elem.style.backgroundRepeat = "no-repeat";        
        elem.textContent="  ";
 };

 let todo = document.querySelector("#todo");
 todo.addEventListener("mouseover",tod);
 function tod(){
      
     let bUrl="img/todolist.png"
     let elem = document.querySelector("#div2");    
         elem.style.backgroundImage = "url("+bUrl+")";
         elem.style.backgroundSize = "44vw 12.5vw";
         elem.style.marginTop = "1.7vw";
         elem.style.marginLeft = "2.6vw";
         elem.style.backgroundRepeat = "no-repeat";        
         elem.textContent="  ";
  };

  let game = document.querySelector("#coffre_jouets");
  game.addEventListener("mouseover",games);
  function games(){
       
      let bUrl="img/game.png"
      let elem = document.querySelector("#div2");    
          elem.style.backgroundImage = "url("+bUrl+")";
          elem.style.backgroundSize = "41vw 12.7vw";
          elem.style.marginTop = "1.7vw";
          elem.style.marginLeft = "2.6vw";
          elem.style.backgroundRepeat = "no-repeat";        
          elem.textContent="  ";
   };




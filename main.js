import { emberekLISTA } from "./adat.js";

listaKiir();
listaKiir3();



/* Függvény - működik a hoisting */
function listaKiir(){
    for (let index = 0; index < emberekLISTA.length; index++) {
        const element =emberekLISTA[index];
        console.log(element);
        
    }
}


/* Függvény kifejezés - ne működik a hoisting*/
const listaKiir2 = function(){
    for (let index = 0; index < emberekLISTA.length; index++) {
        const element =emberekLISTA[index];
        console.log(element);
        
    }
}

function listaKiir3(){
    /* csak esetén alkalmazható */
    emberekLISTA.forEach(
        function(elem, index){
            console.log(elem, index);
        }
    );
}

/* a 30 évnél idősebbeket írjuk ki */

function idosebb30nal() {
    const oregebbMint30 = emberekLISTA.filter(function(ember){
        return ember.kor > 30;
    })
    console.log(oregebbMint30);
}
idosebb30nal();

/* férfiak */

function ferfiak(){
    const ferfiakLISTA = emberekLISTA.filter(function(ember){
        return ember.nem;
    });
    console.log(ferfiakLISTA);
}

ferfiak();


/* 20 evnel idosebb ferfiak */

function ferfiak20evfelett(){
    const ferfiak20LISTA = emberekLISTA.filter(function(ember){
        return ember.kor > 20 && ember.nem;
    });
    console.log(ferfiak20LISTA);
}

ferfiak20evfelett();


/* rendezzuk kor szerint novekvo sorrendbe */

function rendez(){
    emberekLISTA.sort(function(e1, e2) {
        return e1.kor - e2.kor;
    });
    console.log(emberekLISTA);
}
rendez();
function veletlen(){
    emberekLISTA.sort(function(e1, e2) {
        /* véletlenszerűen */
        return Math.random()-0.5;
    });
    console.log(emberekLISTA);
}

veletlen();

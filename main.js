//import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";
import { rendez, szures, torol } from "./adatKezelo.js";
import { sorBeszur } from "./urlapKezelo.js";
import { deleteAdat, getAdat } from "./asszinkron.js";
    
    let rIrany = 1;

    getAdat("http://localhost:3000/emberekLISTA", init)
    //init(emberekLISTA);
    szuresNevSzerint();
    

    export function init(lista){
        var txt = tablazatLetrehoz(lista);
        megjelenit(txt);
        rendezesEsemeny();
        torolEsemeny();
        sorBeszur(emberekLISTA);
    }

    function szuresNevSzerint(){
        const szuroElem = $("#sznev");
        szuroElem.on("keyup", function(){
            let szoveg = szuroElem.val();
            init(szures(emberekLISTA, szoveg));
        });
    }

    /* szorgalmi: egyéb mezőkre szűrés */


    function rendezesEsemeny(){

        /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
        const nevMezoElem = $(".adatok table th").eq(0);
        nevMezoElem.on("click", function(){
            const lista = rendez(emberekLISTA, "nev", rIrany);
            console.log(lista);
            init(lista);
            rIrany*=-1;
        })
    }

    /* szorgalmi: tudjunk rendezni a tobbi mezore is */

    function torolEsemeny(){
        const torolELEM =$(".torol");
        torolELEM.on("click", function(event){
            let index = event.target.id;
            /*              ^^az az elem,amelyik kivaltotta az esemenyt  */
            /*const LISTA = torol(emberekLISTA, index);
            init(LISTA);*/
            deleteAdat("http://localhost:3000/emberekLISTA", index)
        });
    }
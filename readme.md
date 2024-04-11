# listakezelő függvények gyakorlás

## Specifikáció

jelenisuk meg az adatainkat egy tablazatban az adatk divben
az urlap div-ben legyen egy urlap, amivel ilyen adatokat tudunk a tablazatba beletenni
a tablazat fejlecere kattintva rendezzuk a tablazatot nev szerint
tudjunk torolni a tablazatbol egy sort
legyen szuromezo, ami segitsegevel nev szerint tudjuk szurni az adatokat 

## függvények

1. tablazatLetrehoz(lista) -> txt - lista alapján készít html tablazat kodot, visszaadja az elkeszult html szoveget. minden sor mellett egy torles gombbal

2. megjelenit(txt) - megjeliniti a parameterben kapott szoveget egy adott html elemben

3. rendez(lista) -> rendezettLista - megrendezi a listat adott parameter szerint, a megrendezett listat ujra megjeleniti, megrendezett listat visszaadjaakkor fut le amikor rakattintunk a tablazat fejlecere

4. szures(lista, keresoSzoveg) -> szurtLista - akkor fog lefutni, ha a szuro mezoben valtozas tortenik (keyup) - a listaban a nev mezoben keres egyezeseket es szur ez alapjan filter

5. sorBeszur(lista) -> ujLista - ha a submit gombra kattintunk akkor fut le urlap adatkat atalakitjuk objektumma es hozzaadjuk a listahoz (push)

6. torol(lista, index) - torli a lista adott sorat minden sor mellett lesz egy torol gomb, amivel megkapjuk az adott sor indexet es meghivodik a torol fuggveny
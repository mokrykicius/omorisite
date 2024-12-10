
document.addEventListener('DOMContentLoaded', function() {

    function zmienFabulę(tekst) {
        const fabulaSection = document.getElementById('fabuła');
        fabulaSection.innerHTML = tekst; 
    }


    document.getElementById('postac').addEventListener('click', function() {
      
        const postacImagesHTML = `
          <div id="postac-images">
    <img id="sunny" src="sunny.png" data-hover="omori.png" alt="Postać 1">
    <img id="mari" src="mari.png" data-hover="hsmari.png" alt="Postać 2">
    <img id="basil" src="basil.png" data-hover="hsbasil.png" alt="Postać 3">
    <img id="aubrey" src="aubrey.png" data-hover="hcaubrey.png" alt="Postać 4">
    <img id="hero" src="hero.png" data-hover="hshero.png" alt="Postać 5">
    <img id="kel" src="kel.png" data-hover="hskel.png" alt="Postać 6">
</div>`
        zmienFabulę(postacImagesHTML);  

    
        document.getElementById('sunny').addEventListener('click', function() {
            zmienFabulę (`<h3>Sunny </h3><p>
            Zarowno w dziecinstwie, jak i w wydarzeniach z gry, Sunny jest niezwykle niesmialy i cichy.<br>
             Rzadko sie odzywa i nie lubi sie usmiechac. Jednak, mimo ze nie wyraza tego tak wyraznie jak inni, nadal wydaje sie, ze bardzo troszczy sie o swoich przyjaciol, <br>
              poniewaz jego najcenniejsze wspomnienia w MEMORY LANE i LOST LIBRARY dotycza czasu spedzonego z nimi. Wiele postaci, takich jak Basil i Aubrey , sunny opisuje jako <br>
              ,naprawde dobrego sluchacza", ktoremu nie przeszkadza sluchanie, jak sie wyzalaja. Hero rowniez stwierdza, ze Sunny ma swietna pamiec. <br>
            Pomimo bycia cichym, Sunny latwo sie wscieka, od drobnych frustracji, takich jak HOUSEFLIES w OTHERMART, po znacznie powazniejsze rzeczy,  <br>
            takie jak jego uraza do skrzypiec. Ta narastajaca uraza ostatecznie prowadzi do tego, ze rzuca skrzypce ze schodow, co powoduje jego i Mari ostateczna klotnie.</p>`);
        });

        document.getElementById('mari').addEventListener('click', function() {
            zmienFabulę(`<h3>Mari</h3><p>Czesto mowi sie o niej, ze jest mila i lagodna, i odgrywa siostrzana role w grupie przyjaciol z Sunnym , Hero, Kelem , Aubrey i Basilem . <br>
            Pierwszy raz pojawia sie psotnej strony, wysmiewajac maniery Kela i Aubrey, a pozniej drazniac Hero. Te cechy sa wspolne z jej odpowiednikiem z HEADSPACE. <br>

            Pozniej w grze okazuje sie rowniez, ze gdy Mari byla mlodsza, robila kawaly zwlaszcza Hero'wi, np. umieszczala robaki w jego szkolnej lawce.  <br>
            Pokazano rowniez, ze byla perfekcjonistka, spedzajac godziny na cwiczenie tego samego utworu fortepianowego w kolko. <br>
            
            Nawet po jej smierci, jej duchowa forma okazuje wybaczenie Sunny'emu pomimo tego, co jej zrobil. Probuje rowniez pomoc  Sunny'emu  wybaczyc sobie i przypomina mu, aby pamietal, co jest wazne.  <br>
            Pomimo swiadomosci, ze jej brat przypadkowo ja zabil w przeszlosci, Mari zyczy sobie, aby Sunny poszedl dalej i przezyl swoje zycie bez zadnych zali.</p>`);
        });

        document.getElementById('basil').addEventListener('click', function() {
            zmienFabulę(`<h3>Basil</h3><p>Basil jest przedstawiany jako stosunkowo niesmialy chlopiec, <br>
            dobrze widoczny zaraz po zapoznaniu sie z grupa przyjaciol, bedac raczej niepewnym siebie i bojac sie mysli, ze bedzie postrzegany jako ciezar. <br>
             Lubi robic zdjecia, poniewaz wspomnienia z przyjaciolmi sa jego najcenniejsza wlasnoscia, postrzegajac je jako sposob na trwale uchwycenie chwili. <br>
              Lubi rowniez dbac o kwiaty, sztuke i czytac. Basil wydaje sie rozwijac silne przywiazanie emocjonalne do wielu swoich rzeczy, <br>
               poniewaz nigdy niczego nie wyrzuci, bez wzgledu na to, jak bezwartosciowe to jest.</p><br>
               <h3>Basil HeadSpace</h3><p> Odpowiednik Basila jest raczej pogodny, ale niesmialy i skromny. Szybko wybacza, jak pokazalo jego spotkanie z BOSS-em po zabawie w chowanego, <br> 
               i jest z natury dosc empatyczny. Basil jest rowniez dosc przyjacielski, a jego niesmialosc wydaje sie wynikac z niskiego mniemania o sobie i stawiania potrzeb innych ponad swoje wlasne. 
               `);
        });

        document.getElementById('aubrey').addEventListener('click', function() {
            zmienFabulę(`<h3>Aubrey</h3><p>W mlodosci Aubrey byla bardzo wesola i zawsze szczesliwa, mogac bawic sie ze swoimi przyjaciolmi. <br>
             Silna i zawsze wierna swoim uczuciom, Aubrey sluzy jako stale zrodlo morale dla swoich przyjaciol. Rozciaga sie to na czeste przypominanie grupie o tym, co nalezy zrobic, gdy sa rozproszeni.<br>
              Pomimo tego, dosc latwo staje sie smutna i zmartwiona; jest najbardziej niespokojna osoba w grupie przyjaciol, gdy znika Basil. <br>
               Czesto jest niezdarna, co skutkuje krzykami Kela, z ktorym zawsze sie kloci. Jej cechy z dziecinstwa sa wspolne z jej odpowiednikiem z HEADSPACE, <br>
               choc nieco roznia sie jej osobowoscia szczeniecej milosci do Omori .W REAL WORLD, po dowiedzeniu sie o smierci Mari , <br>
                zaczela radzic sobie z silnymi uczuciami nienawisci do swojej starej grupy przyjaciol, interpretujac ich reakcje jako zbyt szybkie przejscie dalej.  <br>
                Czula sie obciazona poczuciem samotnosci, biorac pod uwage zarowno smierc jej najlepszej przyjaciolki, jak i brak wsparcia miedzy nia a jej przyjaciolmi. <br>
                Stala sie porywcza i agresywna, wyladowujac te wybuchy gniewu na innych, takich jak BASIL , z pomoca CHULIGANOW . Na poczatku jest zimna i wroga wobec swoich starych przyjaciol, <br>
                 nie boi sie z nimi walczyc. Mimo to nadal probuje znalezc spokoj, modlac sie w lokalnym kosciele i czesto odwiedza grob MARI. </p>`);
        });

        document.getElementById('hero').addEventListener('click', function() {
            zmienFabulę(`<h3>Hero</h3><p>W mlodosci Hero byl mediatorem w grupie, ktory stara sie powstrzymywac swoich przyjaciol, gdy tylko sie za bardzo nakrecaja.<br>
             Opisuje sie go jako osobe o lagodnej osobowosci i pasjonujaca sie pracami domowymi, takimi jak pieczenie, gotowanie i sprzatanie, co czyni go idealnym pracownikiem.<br>
              Hero ma rowniez charyzmatyczna strone, ktora wykorzystuje, aby oczarowac innych. <br>
              Jego charyzma pozwala mu przekonywac innych, aby przystali na jego prosby, otrzymywac znizki w MAILBOX i zaprzyjazniac sie ze zwierzetami, takimi jak EMS. <br>
              Jednak czasami moze byc mieczakiem, gdy jest konfrontowany i ma trudnosci z odmawianiem innym. Wydaje sie rowniez miec arachnofobie do tego stopnia, ze calkowicie zamarza. <br>
              Cechy te sa wspolne z jego odpowiednikiem z HEADSPACE . W terazniejszosci Hero nadal zachowuje swoja przyjazna, serdeczna osobowosc w doroslym zyciu.  <br>
              Jest bardzo kochany przez mieszkancow FARAWAY TOWN i podziwiany za swoja charyzme. Kel nawet opisuje go jako ,,naturalnie dobrego we wszystkim" i jest z niego dumny. <br>
               Posiada on talent do osiagania sukcesow w praktycznie kazdej dziedzinie, ktorej sie podejmuje, choc przyznaje, ze jego reputacja jest mocno przesadzona. <br>
               Hero jest raczej spokojny i wyrozumialy wobec kazdego, kogo spotyka, nawet probujac pocieszyc go w chwilach zwatpienia. <br>
               Pokazal to, gdy pocieszal Aubrey i pomagal jej pogodzic sie z Kelem, Sunnym i Basilem w ONE DAY LEFT. < </p>`);
        });

        document.getElementById('kel').addEventListener('click', function() {
            zmienFabulę(`<h3>Kel</h3><p>W mlodosci Kel jest troche rozpieszczony, impulsywny i niegrzeczny, ciagle wdaje sie w male sprzeczki ze swoimi przyjaciolmi. <br>
             Z natury jest bardzo konkurencyjny, zawsze chce wygrywac gry lub wyscigi, jest tez bardzo energiczny i szybki. Uwaza tez, ze romans jest obrzydliwy, a dziewczyny maja wszy. <br>
             Jednak mimo ze jest glosny i lubi denerwowac swoich przyjaciol, naprawde troszczy sie o nich do tego stopnia, ze stale ich chroni, kierujac sie silnym poczuciem sprawiedliwosci. <br>
             Wydaje sie, ze Kel ma silna wiez ze swoim bratem Hero i czasami kloci sie z Aubrey o drobne nieporozumienia na drobne tematy. Nawet cicha Sunny uwaza za kogos, <br>
             kto jest wspaniala osoba i wierzy w to, co w nim najlepsze. Te cechy dzieli ze swoim odpowiednikiem z HEADSPACE . <br>
              Obecny KEL nadal zachowuje swoj radosny charakter, ale wydaje sie bardziej dojrzaly i wyrozumialy wobec innych. Jest bardzo towarzyski i lubi rozmawiac z nieznajomymi, gdy Sunny jest zajety praca. <br>
              Ciagle probuje pomagac innym w potrzebie, co czesto moze prowadzic go do podejmowania pochopnych decyzji. <br>
               Kel  pragnie rowniez odnowic kontakt ze starymi przyjaciolmi, zwlaszcza gdy zacheca Sunny do wiekszej aktywnosci i zdrowia. <br>
                Probuje nawet zrozumiec powody gniewu Aubrey i wielokrotnie chroni Basila przed lobuzami, wykazujac to samo poczucie sprawiedliwosci, ktore posiadal, gdy byl mlodszy.</p>`);
        });
    });

   
    document.getElementById('fabula').addEventListener('click', function() {
        zmienFabulę(`<h3>Fabula Ogolna</h3>
        <br><p>Fabula i fabula OMORI kreci sie wokol chlopca o imieniu SUNNY i jego ,,alter-ego" OMORI. 
        <br> Gra ma dwie glowne lokacje, w ktorych rozgrywa sie historia. Wyimaginowany swiat HEADSPACE jest eksplorowany noca przez OMORI i jego przyjaciol, 
        <br> podczas gdy SUNNY eksploruje prawdziwy swiat przez FARAWAY TOWN w ciagu dnia. Istnieja rowniez dwie sciezki, ktore ostatecznie okresla, jak zakonczy sie historia.
         <br> W zaleznosci od dokonanych wyborow, glownym celem jest to, ze SUNNY musi przezwyciezyc wszystko, co go trapi w trakcie gry i odejsc od przeszlosci .
          <br> Bedzie musial rowniez pokonac swoje leki i sekrety, probujac na nowo nawiazac kontakt ze starymi przyjaciolmi z dziecinstwa....
          <h5> Screenshoty z gry </h5> <br>
          <img src="treehouse.png" alt="2day" <br>
          <img src="pokojsasiada.jpg" alt="2day" <br>
          <img src="walka.jpg" alt="2day" <br>
          
          </p>
         
          `);
    });

    
    document.getElementById('3day').addEventListener('click', function() {
        zmienFabulę(`<h3>3 Days Left</h3> <br> <p>Sunny budzi sie z white space i slyszy pukanie do drzwi. 
        Otwiera i stoi tam Kel. Wychodzisz z Kelem do parku i widzisz znane miejsca. Pozniej idziesz kupic prezent dla brata Kela, ktory ma niedlugo urodziny czyli Hero. 
        Kupiliscie mu ksiazke kucharska. Potem idziecie do parku i spotykacie sie z Basilem, ktoremu dokucza Aubrey I jej gang. Walczycie z aubrey i wygrywacie.
        Odprowadzacie basila do domu. Walczycie potem z gangiem Aubrey po kolei zeby ja znalezc. Znalezliście ja w kosciele i walczysz z nia. Ona ucieka i 
        mozesz wrocic do domu. Idziesz za Aubrey i widzisz jak wyrzuca album basila do smieci. Udało ci sie go wykopac z smieci i zanosisz go do basila. 
        Ukladacie je i potem jecie razem obiad. Wtedy basil idzie do lazienki i sie zalamuje, musisz z nim pogadac. Potem wracasz do domu i masz walke z arachnofobia. 
        Udaje ci sie uspokoic i wygrales, wracasz do lozka i zasypiasz.<br> <br>
        <img src="3days.jpg" alt="1day" ></p>`);
    });

    document.getElementById('2day').addEventListener('click', function() {
        zmienFabulę(`<h3>2 Days Left</h3><p>Drugiego dnia KEL ponownie przychodzi odebrac SUNNY i oboje biegaja na zakupy, aby przygotowac sie na powrot HERO z college'u. <br>
         Nastepnie ida do HANGOUT SPOT i spotykaja BASIL, ktory nadal jest przesladowany przez THE HOOLIGANS. KEL i SUNNY kloca sie z THE HOOLIGANS , po czym wszyscy oprocz AUBREY odchodza.  <br>
         AUBREY zaczyna klocic sie z KEL, a gdy BASIL probuje ja pocieszyc, odpycha go do jeziora, przez co SUNNY nurkuje za nim i mierzy sie ze swoim strachem przed utonieciem. <br>
          To wlasnie tam uczy sie WYTRWALOSCI, ale mimo to SUNNY nie jest w stanie uratowac BASILA ani siebie. <br>
Podczas gdy jest nieprzytomny, SUNNY na krotko wyobraza sobie, ze to MARI pomaga mu wydostac sie na powierzchnie jeziora. <br>
 Jednak wkrotce odzyskuje przytomnosc i odkrywa, ze postacia, ktora uratowala zarowno jego, jak i BASILA, byl nikt inny, jak HERO. SUNNY, KEL i HERO decyduja sie zabrac BASILA z powrotem do domu, <br>
  aby mogl dojsc do siebie. Kiedy AUBREY pyta, dlaczego odchodza, KEL ja zbywa, a grupa ja zostawia. Po zabraniu BASILA z powrotem do domu, SUNNY, KEL i HERO spedzaja reszte popoludnia, spedzajac razem czas. <br>
   Ostatecznie trojka zjada razem kolacje (po tym, jak HERO i KEL przekonuja swoja matke), a nastepnie spedzaja noc w domu SUNNY'EGO. SUNNY zasypia i ponownie wchodzi do HEADSPACE. <br> 
   <img src="2days.jpg" alt="2day"<br>
      <br>
          </p>
        `)
      

    });
    document.getElementById('1day').addEventListener('click', function() {
        zmienFabulę(`<h3>1 Day Left</h3><p>  Kiedy SUNNY budzi sie rano, HERO informuje go, ze skonczyl robic za niego obowiazki i zrobil sniadanie dla niego i KEL.<br>
        Jednak sniadanie SUNNY zostaje przerwane przez niespodziewane pojawienie sie KIM pukajacej do drzwi. KIM mowi trojce, ze AUBREY nie wychodzi z domu, a CHUDZIALY martwia sie o nia. HERO, wraz z KEL i SUNNY, <br>
         zgadzaja sie pomoc AUBREY i udaja sie do jej domu , aby sprawdzic, co u niej. Po przybyciu na miejsce trzej chlopcy znajduja wszedzie porozrzucane smieci, <br>
         a MAME AUBREY jest nieprzytomna i zapatrzona w telewizor.<br><br><br>
       
      <br>
         <img src="1day.jpg" alt="1day" </p>
        `);
       
    });
    document.getElementById('0day').addEventListener('click', function() {
        zmienFabulę(`<h3>Moving out</h3><p>Jesli SUNNY zdecyduje sie kontynuowac, wykona recital duetu z MARI, wspominajac dobre chwile spedzone z MARI i jej przyjaciolmi w mlodosci. 
        OMORI akceptuje porazke i wpada w ramiona SUNNY, rozpadajac sie i znikajac. SUNNY budzi sie w SZPITALU z bandazem na prawym oku i zaczyna plakac, gdy w koncu godzi sie ze smiercia MARI.
 Wychodzac ze swojego pokoju, SUNNY na krotko ma halucynacje, ze przyjaciele OMORI'EGO z HEADSPACE odchodza, a STRANGER po raz ostatni prowadzi go do pokoju BASILA, zanim znika.
  Po dotarciu do pokoju SUNNY staje twarza w twarz ze swoimi przyjaciolmi i w koncu mowi im prawde o smierci MARI.
        Jesli gracz podjal probe podlania kwiatow BASIL w TWO DAYS LEFT w HEADSPACE, po napisach koncowych pojawia sie dodatkowa scenka przerywnikowa.
         SUNNY i BASIL patrza na siebie i usmiechaja sie, gdy ich SOMETHING zanikaja, pokazujac, ze niezaleznie od tego, jak wszyscy inni zareagowali lub zareaguja, ciezar,
          ktory dzwigali przez cztery lata, zostal zdjety i oboje sa gotowi isc dalej. <br>
          <img src="movout.jpg" alt="1day"</p>
       `);
});
document.getElementById('ogrze').addEventListener('click', function() {
    zmienFabulę(`<h3>O grze</h3><p>Omori to wyjatkowa gra indie z gatunku RPG,
         stworzona przez studio Omocat. Jest to dzielo inspirowane kultura japonska i RPG-ami z ery 16-bitowych konsol,
          a zarazem gleboko osobista opowiesc, ktora porusza trudne tematy, takie jak depresja, leki i utrata. 
          Gra zyskala ogromne uznanie za swoja nieszablonowa fabule, wyjatkowa estetyke i emocjonalny wplyw. 
          Gra rowniez porusza ciezkie tematy takie jak: Depresja i zdrowie psychiczne, Lek spoleczny, Zaloba i trauma, Sila przyjazni i akceptacji. <br>
          Jezeli chcesz sie dowiedziec wiecej kliknij w zdjecie ponizej: <br>
          <a href="https://www.omori-game.com/en/about">
    <img src="something.png" alt="Opis obrazka" style="width: 150px; height: 400px;">
</a>
   `);
});
var image = document.getElementById("image");
var sound = document.getElementById("sound");


image.addEventListener("click", function() {
    sound.play(); 
});
});
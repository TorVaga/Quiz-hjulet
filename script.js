document.addEventListener('DOMContentLoaded', () => {

    // --- SPØRSMÅLSBANK ---
    const questions = {
        Vennskap: [
            { question: "Hva betyr det å være inkluderende?", answers: ["Å la alle som vil få være med i leken.", "Å bare leke med den beste vennen din.", "Plukke ut dine to beste venner og kun ta med dem i leken."], correct: "Å la alle som vil få være med i leken.", difficulty: 0 },
            { question: "Hva kan du gjøre hvis en venn er lei seg?", answers: ["Late som ingenting.", "Spørre hvordan de har det og høre på dem.", "Leke med andre og håpe de blir glade av seg selv."], correct: "Spørre hvordan de har det og høre på dem.", difficulty: 0 },
            { question: "Hvis du og en venn er uenige, hva er lurt å gjøre?", answers: ["Rope og si stygge ting.", "Lytte til hverandre og prøve å forstå.", "Slutte å være venner med en gang."], correct: "Lytte til hverandre og prøve å forstå.", difficulty: 0 },
            { question: "Hva betyr det å være lojal mot en venn?", answers: ["Å støtte hen og å være ærlig.", "Bare være sammen når det passer deg.", "Snakke negativt om dem bak ryggen deres."], correct: "Å støtte hen og å være ærlig.", difficulty: 0 },
            { question: "Hva betyr det å respektere andre mennesker i samfunnet?", answers: ["Å bare være snill mot dem man liker best.", "Å høre på andres meninger, og være rettferdig, selv om andre er ulik deg.", "Å alltid være enig med andre."], correct: "Å høre på andres meninger, og være rettferdig, selv om andre er ulik deg.", difficulty: 0 },
            { question: "Hva betyr det å være empatisk?", answers: ["Å skjule dine meninger og følelser.", "Å være deg selv og stå opp for dine meninger og følelser.", "Å forstå og bry seg om hvordan andre har det."], correct: "Å forstå og bry seg om hvordan andre har det.", difficulty: 0 },
            { question: "Hva beskriver best forskjellen mellom empati og sympati? ⚡", answers: ["Sympati er å forstå andres følelser, empati er å synes synd på andre.", "Sympati er å synes synd på andre, empati er å forstå og dele følelelsene deres.", "Begge deler betyr det samme."], correct: "Sympati er å synes synd på andre, empati er å forstå og dele følelsene deres.", difficulty: 1 }
        ],
        Trafikken: [
            { question: "Hvor bør du gå hvis det ikke finnes fortau?", answers: ["På høyre side av veien (eller i innersving).", "På venstre side av veien (eller i yttersving).", "Midt i veien."], correct: "På venstre side av veien (eller i yttersving).", difficulty: 0 },
            { question: "Hvis du går i mørket, hva gjør det lettere for bilførere å se deg?", answers: ["Refleks.", "Vifte med armer og bein.", "Å gå veldig sakte."], correct: "Refleks.", difficulty: 0 },
            { question: "Hvor gammel må du være for å kjøre elsparkesykkel lovlig i Norge?", answers: ["Det fins ingen aldersgrense.", "10 år.", "12 år."], correct: "12 år.", difficulty: 0 },
            { question: "Hva betyr grønn mann for fotgjengere?", answers: ["Det er trygt å gå over.", "Du må stoppe og vente.", "Du må løpe fort."], correct: "Det er trygt å gå over.", difficulty: 0 },
            { question: "Hva skal du gjøre når du hører en utrykningsbil komme?", answers: ["Løpe ut i veien.", "Flytte deg trygt til siden.", "Late som du ikke hører den."], correct: "Flytte deg trygt til siden.", difficulty: 0 },
            { question: "Er det sant at det er ulovlig å kjøre elsparkesykkel uten hjelm dersom du er under 15 år?", answers: ["Ja", "Nei"], correct: "Ja", difficulty: 0 },
            { question: "Hva betyr dette skiltet?", answers: ["Forbudt for elsparkesykler.", "Forkjørsvei: Kjørende fra sidevei har vikeplikt for deg.", "Vikeplikt: Du må gi vei til trafikk i begge retninger."], correct: "Vikeplikt: Du må gi vei til trafikk i begge retninger.", difficulty: 0 },
            { question: "Hvorfor har vi felles trafikkregler, og hvorfor er det viktig at alle følger dem? ⚡⚡", answers: ["Diskuter i gruppen", "Presenter svaret", "Klar for fasit?"], correct: "Diskuter i gruppen", difficulty: 2 }
        ],
        Internett: [
            { question: "Hva bør du gjøre hvis en fremmed sender deg en melding?", answers: ["Svare og spørre hvem de er.", "Ikke svare og fortelle en voksen.", "Gi dem telefonnummeret ditt."], correct: "Ikke svare og fortelle en voksen.", difficulty: 0 },
            { question: "Hva er et sterkt passord?", answers: ["Navnet ditt.", "1234", "En blanding av bokstaver, tall og spesialtegn."], correct: "En blanding av bokstaver, tall og spesialtegn.", difficulty: 0 },
            { question: "Hvem kan du dele passordet ditt med?", answers: ["Ingen, bortsett fra foreldrene dine.", "Alle vennene dine.", "Alle på nettet som spør."], correct: "Ingen, bortsett fra foreldrene dine.", difficulty: 0 },
            { question: "Hva bør du gjøre hvis noen sender deg et ubehagelig bilde?", answers: ["Slette det og ikke si noe.", "Vise det til en voksen du stoler på.", "Sende det videre til andre."], correct: "Vise det til en voksen du stoler på.", difficulty: 0 },
            { question: "Hvorfor kan det være lurt å ha privat profil på sosiale medier?", answers: ["For å virke hemmelighetsfull.", "For å få flest mulig følgere.", "Så bare folk du kjenner kan se det du deler."], correct: "Så bare folk du kjenner kan se det du deler.", difficulty: 0 },
            { question: "Hva menes med ekkokammer på nettet? ⚡", answers: ["En gruppe bestående av lederne i Facebook, X og Tiktok.", "En gruppechat med mer enn 100 deltakere.", "Et miljø der man bare møter meninger som ligner det man mener fra før."], correct: "Et miljø der man bare møter meninger som ligner det man mener fra før.", difficulty: 1 },
            { question: "Hva kan skje hvis du bare leser nyheter fra én kilde?", answers: ["Du får et mer balansert og mangfoldig verdensbilde.", "Du kan få et ensidig syn på saker.", "Du lærer mer fakta enn de som følger mange kilder."], correct: "Du kan få et ensidig syn på saker.", difficulty: 0 },
            { question: "Hva betyr polarisering i samfunnet? ⚡", answers: ["At folk blir mer uenige med hverandre, og samarbeider mindre.", "At alle blir mer og mer enige om alt, og samarbeider mer.", "At folk flytter nærmere Nordpolen."], correct: "At folk blir mer uenige med hverandre, og samarbeider mindre.", difficulty: 1 },
            { question: "Hvorfor bør vi unngå polarisering?", answers: ["Polarisering øker konkurransen mellom land.", "Polarisering gjør det vanskeligere å ta valg.", "Folk blir misfornøyde og samarbeider mindre."], correct: "Folk blir misfornøyde og samarbeider mindre.", difficulty: 0 },
            { question: "Hvordan kan man motvirke ekkokammer og polarisering?", answers: ["Kun stole på det du leser i sosiale medier.", "Aktivt oppsøke flere ulike kilder og lytte til hva andre sier.", "Unngå å diskutere med folk som er uenig med deg."], correct: "Aktivt oppsøke flere ulike kilder og lytte til hva andre sier.", difficulty: 0 },
            { question: "Hva betyr «tofaktor-autentisering»? ⚡", answers: ["To personer må logge inn samtidig.", "Du må skrive inn passordet ditt to ganger.", "Du må skrive passord og godkjenne med en app."], correct: "Du må skrive passord og godkjenne med en app.", difficulty: 1 }
        ],
        Naturen: [
            { question: "Hvorfor er det viktig å fortelle noen hvor du skal på tur?", answers: ["Så de kan bli med.", "For at noen vet hvor du er hvis noe skjer.", "Det er ikke viktig."], correct: "For at noen vet hvor du er hvis noe skjer.", difficulty: 0 },
            { question: "Hvis du går deg bort, hva bør du gjøre?", answers: ["Fortsette å gå uten mål.", "Holde deg på ett sted og prøve å lage lyd eller synlige tegn.", "Gjemme deg."], correct: "Holde deg på ett sted og prøve å lage lyd eller synlige tegn.", difficulty: 0 },
            { question: "Hvorfor er det lurt å ha kart eller kompass med seg?", answers: ["For å finne veien lettere.", "For å ha noe å leke med.", "For å se kul ut."], correct: "For å finne veien lettere.", difficulty: 0 },
            { question: "Hva er viktig å sjekke før du drar på tur?", answers: ["TV-programmet for kvelden", "Hvor mange butikker som er åpne.", "Værmeldingen"], correct: "Værmeldingen", difficulty: 0 },
            { question: "Hva betyr biologisk mangfold?", answers: ["At det finnes mange ulike dyr og planter.", "At alle dyr og planter er veldig like.", "At forskjellige dyr og planter lever adskilt fra hverandre."], correct: "At det finnes mange ulike dyr og planter.", difficulty: 0 },
            { question: "Hva skjer med et økosystem om en art forsvinner?", answers: ["Ingenting, alle andre arter klarer seg godt.", "Balansen forstyrres, fordi artene er avhengige av hverandre.", "Naturen blir alltid sunnere med færre arter."], correct: "Balansen forstyrres, fordi artene er avhengige av hverandre.", difficulty: 0 },
            { question: "Omtrent hvor mye vann mister man per time ved hard fysisk aktivitet? ⚡", answers: ["1 l", "2 dl", "2,5 l"], correct: "1 l", difficulty: 1 },
            { question: "Hvor lenge klarer et menneske seg uten vann? ⚡", answers: ["2-3 dager", "4-6 dager", "7-10 dager"], correct: "2-3 dager", difficulty: 1 }
        ],
        Hverdagen: [
            { question: "Hvis du brenner deg på noe varmt, hva er lurt å gjøre?", answers: ["Vente til det slutter å gjøre vondt.", "Skylde med iskaldt vann i flere minutter.", "Skylde med lunkent vann i flere minutter."], correct: "Skylde med lunkent vann i flere minutter.", difficulty: 0 },
            { question: "Hva er lurt å gjøre hvis brannalarmen går?", answers: ["Se etter røyk og prøve å finne ut hvor den kommer fra først.", "Gå raskt ut av bygget til et trygt sted og varsle en voksen.", "Skru av alarmen og fortsette som vanlig."], correct: "Gå raskt ut av bygget til et trygt sted og varsle en voksen.", difficulty: 0 },
            { question: "Hva gjør du hvis en fremmed tilbyr deg godteri eller en tur i bilen?", answers: ["Si nei og gå bort raskt.", "Takke ja hvis de virker hyggelige.", "Spørre hvor de skal."], correct: "Si nei og gå bort raskt.", difficulty: 0 },
            { question: "Hvordan kan du være trygg når du er på vei hjem fra skolen alene?", answers: ["Gå med hodetelefoner så du ikke hører noe.", "Ta snarveier gjennom mørke områder.", "Gå på steder med mye folk og lys."], correct: "Gå på steder med mye folk og lys.", difficulty: 0 },
            { question: "Hvor mange liter vann bør man ha i beredskap i et bolighus?", answers: ["20 liter per person", "30 liter per person", "40 liter per person"], correct: "20 liter per person", difficulty: 0 },
            { question: "I hvilken årstid arrangeres den nasjonale brannvernuka?", answers: ["Våren", "Sommeren", "Høsten", "Vinteren"], correct: "Høsten", difficulty: 0 },
            { question: "Hvorfor er det viktig å ikke kaste batterier i vanlig søppel?", answers: ["De kan ta fyr i søppelsorteringsanlegget.", "De er for harde for søppelkvernen.", "De gir vond lukt i søppelsorteringsanlegget."], correct: "De kan ta fyr i søppelsorteringsanlegget.", difficulty: 0 },
            { question: "Hva kalles strålingen som gjør at man blir solbrent?", answers: ["IR-stråling", "CT-stråling", "UV-stråling", "Alpha-stråling"], correct: "UV-stråling", difficulty: 0 },
            { question: "Hvorfor er det viktig å lese nyheter?", answers: ["For å kunne snakke med venner om kjendiser og TV-serier.", "For å forstå hva som skjer i samfunnet og kunne ta gode valg.", "Fordi det er påbudt for alle nordmenn å lese nyheter."], correct: "For å forstå hva som skjer i samfunnet og kunne ta gode valg.", difficulty: 0 },
            { question: "Du er president i et nytt land. Hva er tre ting du ville sørget for at alle innbyggerne har, for at landet skal være trygt og godt å bo i? ⚡⚡", answers: ["Diskuter i gruppen", "Presenter svaret", "Klar for fasit?"], correct: "Diskuter i gruppen", difficulty: 2 },
            { question: "Et romvesen besøker Jorda for første gang. Du får ett minutt til å forklare hvordan vi mennesker jobber for å skape en trygg verden. Hva sier du? ⚡⚡", answers: ["Diskuter i gruppen", "Presenter svaret", "Klar for fasit?"], correct: "Diskuter i gruppen", difficulty: 2 }
        ]
    };

    let availableQuestions = JSON.parse(JSON.stringify(questions));
    const categorySelectionView = document.getElementById('category-selection');
    const questionView = document.getElementById('question-view');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const questionText = document.getElementById('question-text');
    const answerOptionsContainer = document.getElementById('answer-options');
    const timerDisplay = document.getElementById('timer-display');
    const startTimerBtn = document.getElementById('start-timer-btn');
    const stopTimerBtn = document.getElementById('stop-timer-btn');
    const revealAnswerBtn = document.getElementById('reveal-answer-btn');
    const backToCategoriesBtn = document.getElementById('back-to-categories-btn');

    let currentCorrectAnswer = '';
    let timerInterval;

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            displayQuestion(category);
        });
    });

    function displayQuestion(category) {
        if (availableQuestions[category].length === 0) {
            alert("Tomt for spørsmål i denne kategorien!");
            const btn = document.querySelector(`.category-btn[data-category="${category}"]`);
            btn.disabled = true;
            return;
        }

        const questionIndex = Math.floor(Math.random() * availableQuestions[category].length);
        const questionData = availableQuestions[category].splice(questionIndex, 1)[0];
        currentCorrectAnswer = questionData.correct;
        
        questionText.innerText = questionData.question;
        answerOptionsContainer.innerHTML = '';
        questionData.answers.forEach(answer => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerText = answer;
            answerOptionsContainer.appendChild(optionElement);
        });

        categorySelectionView.classList.add('hidden');
        questionView.classList.remove('hidden');
        resetState();
    }

    function resetState() {
        clearInterval(timerInterval);
        timerDisplay.innerText = "15";
        timerDisplay.style.color = '#007bff';

        startTimerBtn.classList.remove('hidden');
        startTimerBtn.disabled = false;
        
        stopTimerBtn.classList.add('hidden'); // Skjul stopp-knapp
        revealAnswerBtn.classList.add('hidden');
        backToCategoriesBtn.classList.add('hidden');
    }

    function showAnswer() {
        const options = answerOptionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            if (option.innerText === currentCorrectAnswer) {
                option.classList.add('correct');
            }
        });
        revealAnswerBtn.classList.add('hidden');
        stopTimerBtn.classList.add('hidden');
        backToCategoriesBtn.classList.remove('hidden');
    }

    startTimerBtn.addEventListener('click', () => {
        // ENDRING: Skjul knappen når timeren starter
        startTimerBtn.classList.add('hidden');
        
        let timeLeft = 15;
        stopTimerBtn.classList.remove('hidden'); // Vis stopp-knapp

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = timeLeft;
            if (timeLeft <= 5) {
                timerDisplay.style.color = 'red';
            }
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerText = "Tiden er ute!";
                revealAnswerBtn.classList.remove('hidden');
                stopTimerBtn.classList.add('hidden');
            }
        }, 1000);
    });
    
    // NYTT: Event listener for stopp-knappen
    stopTimerBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        showAnswer();
    });

    revealAnswerBtn.addEventListener('click', showAnswer);

    backToCategoriesBtn.addEventListener('click', () => {
        questionView.classList.add('hidden');
        categorySelectionView.classList.remove('hidden');
    });

});
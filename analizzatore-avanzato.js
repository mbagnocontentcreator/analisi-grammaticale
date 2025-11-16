// Analizzatore grammaticale avanzato con analisi contestuale
// Utilizza il dizionario morfologico per un'analisi più accurata

// Dizionario delle parole invariabili e ambigue
const dizionarioParole = {
    // ARTICOLI
    articoli: {
        determinativi: ["il", "lo", "la", "i", "gli", "le", "l'"],
        indeterminativi: ["un", "uno", "una", "un'"]
    },
    
    // PREPOSIZIONI
    preposizioni: {
        semplici: ["di", "a", "da", "in", "con", "su", "per", "tra", "fra", "senza", "sotto", "sopra", "dentro", "fuori", "verso", "contro", "durante", "mediante", "secondo"],
        articolate: ["del", "dello", "della", "dei", "degli", "delle", "al", "allo", "alla", "ai", "agli", "alle", "dal", "dallo", "dalla", "dai", "dagli", "dalle", "nel", "nello", "nella", "nei", "negli", "nelle", "sul", "sullo", "sulla", "sui", "sugli", "sulle", "col", "coi"]
    },
    
    // CONGIUNZIONI
    congiunzioni: {
        coordinanti: ["e", "ed", "o", "oppure", "ma", "però", "tuttavia", "anzi", "infatti", "dunque", "quindi", "perciò", "pertanto", "né", "neppure", "neanche", "nemmeno"],
        subordinanti: ["che", "perché", "poiché", "giacché", "siccome", "quando", "mentre", "finché", "dopo", "prima", "appena", "se", "qualora", "purché", "affinché", "benché", "sebbene", "nonostante", "quantunque", "come"]
    },
    
    // PRONOMI
    pronomi: {
        personali_soggetto: ["io", "tu", "egli", "ella", "lui", "lei", "esso", "essa", "noi", "voi", "essi", "esse", "loro"],
        personali_complemento: ["mi", "ti", "lo", "la", "gli", "le", "ci", "vi", "li", "si", "ne", "me", "te", "sé"],
        possessivi: ["mio", "mia", "miei", "mie", "tuo", "tua", "tuoi", "tue", "suo", "sua", "suoi", "sue", "nostro", "nostra", "nostri", "nostre", "vostro", "vostra", "vostri", "vostre", "loro", "proprio", "propria", "propri", "proprie"],
        dimostrativi: ["questo", "questa", "questi", "queste", "quello", "quella", "quelli", "quelle", "codesto", "codesta", "codesti", "codeste", "stesso", "stessa", "stessi", "stesse", "medesimo", "medesima", "medesimi", "medesime", "ciò", "costui", "costei", "costoro", "colui", "colei", "coloro"],
        indefiniti: ["uno", "una", "qualcuno", "qualcuna", "nessuno", "nessuna", "ognuno", "ognuna", "chiunque", "chicchessia", "alcuno", "alcuna", "alcuni", "alcune", "taluno", "taluna", "certuno", "certuna", "altro", "altra", "altri", "altre", "tutto", "tutta", "tutti", "tutte", "molto", "molta", "molti", "molte", "poco", "poca", "pochi", "poche", "tanto", "tanta", "tanti", "tante", "troppo", "troppa", "troppi", "troppe", "parecchio", "parecchia", "parecchi", "parecchie", "quanto", "quanta", "quanti", "quante", "altrettanto", "altrettanta", "altrettanti", "altrettante", "niente", "nulla", "qualcosa", "qualche"],
        relativi: ["che", "cui", "quale", "quali", "chi", "quanto", "quanta", "quanti", "quante", "dove", "donde", "onde"],
        interrogativi: ["chi", "che", "quale", "quali", "quanto", "quanta", "quanti", "quante"]
    },
    
    // AVVERBI
    avverbi: {
        modo: ["bene", "male", "meglio", "peggio", "volentieri", "malvolentieri", "insieme", "così", "come", "piano", "forte", "presto", "tardi", "velocemente", "lentamente", "facilmente", "difficilmente"],
        tempo: ["ora", "adesso", "oggi", "ieri", "domani", "prima", "dopo", "poi", "già", "ancora", "sempre", "mai", "spesso", "raramente", "talvolta", "subito", "presto", "tardi", "stamattina", "stasera", "stanotte"],
        luogo: ["qui", "qua", "lì", "là", "su", "giù", "sopra", "sotto", "dentro", "fuori", "davanti", "dietro", "vicino", "lontano", "dove", "dovunque", "ovunque", "altrove", "dappertutto"],
        quantità: ["molto", "poco", "troppo", "tanto", "quanto", "assai", "più", "meno", "parecchio", "abbastanza", "appena", "circa", "almeno", "piuttosto"],
        affermazione: ["sì", "certo", "certamente", "sicuramente", "davvero", "proprio", "appunto"],
        negazione: ["no", "non", "né", "neppure", "neanche", "nemmeno", "mai"],
        dubbio: ["forse", "probabilmente", "magari", "eventualmente"],
        interrogativi: ["come", "quando", "dove", "perché", "quanto"]
    },
    
    // AGGETTIVI
    aggettivi: {
        qualificativi_comuni: ["bello", "brutto", "grande", "piccolo", "alto", "basso", "lungo", "corto", "largo", "stretto", "nuovo", "vecchio", "giovane", "anziano", "buono", "cattivo", "bravo", "veloce", "lento", "felice", "triste", "allegro", "facile", "difficile", "caldo", "freddo", "secco", "bagnato", "pulito", "sporco", "ricco", "povero", "forte", "debole", "dolce", "amaro", "simpatico", "antipatico", "intelligente", "stupido", "gentile", "scortese", "rosso", "blu", "verde", "giallo", "bianco", "nero", "grigio", "marrone", "rosa", "viola", "arancione", "azzurro"],
        possessivi: ["mio", "tuo", "suo", "nostro", "vostro", "loro", "proprio", "altrui"],
        dimostrativi: ["questo", "quello", "codesto", "stesso", "medesimo", "tale"],
        indefiniti: ["ogni", "qualche", "qualsiasi", "qualunque", "alcuno", "nessuno", "altro", "certo", "tale", "vario", "diverso", "parecchio", "molto", "poco", "tutto", "tanto", "troppo", "altrettanto"],
        interrogativi: ["quale", "che", "quanto"],
        numerali_cardinali: ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta", "cento", "mille"],
        numerali_ordinali: ["primo", "secondo", "terzo", "quarto", "quinto", "sesto", "settimo", "ottavo", "nono", "decimo", "ultimo", "penultimo"]
    },
    
    // INTERIEZIONI
    interiezioni: ["oh", "ah", "eh", "uh", "ahi", "ohi", "ahimè", "ohimè", "uffa", "bah", "mah", "boh", "ehi", "ehilà", "olà", "pss", "bravo", "bene", "male", "evviva", "urrà", "ops", "accidenti", "peccato", "magari", "macché", "ciao", "salve", "addio", "arrivederci", "buongiorno", "buonasera", "grazie", "prego", "scusa", "perdono", "aiuto", "attenzione", "zitto", "silenzio", "coraggio", "forza"],
    
    // NOMI COMUNI PIÙ FREQUENTI
    nomi_comuni: ["uomo", "donna", "bambino", "bambina", "ragazzo", "ragazza", "persona", "gente", "casa", "scuola", "lavoro", "tempo", "anno", "mese", "giorno", "ora", "minuto", "secondo", "vita", "morte", "amore", "odio", "guerra", "pace", "mondo", "paese", "città", "strada", "mare", "montagna", "cielo", "terra", "sole", "luna", "stella", "acqua", "fuoco", "aria", "vento", "pioggia", "neve", "albero", "fiore", "animale", "cane", "gatto", "uccello", "pesce", "libro", "quaderno", "penna", "matita", "tavolo", "sedia", "letto", "porta", "finestra", "muro", "tetto", "pavimento", "cibo", "pane", "pasta", "pizza", "carne", "pesce", "frutta", "verdura", "mela", "pera", "banana", "arancia", "pomodoro", "patata", "carota", "insalata", "macchina", "auto", "bicicletta", "treno", "aereo", "nave", "autobus", "moto", "amico", "amica", "nemico", "nemica", "padre", "madre", "figlio", "figlia", "fratello", "sorella", "nonno", "nonna", "zio", "zia", "cugino", "cugina", "marito", "moglie", "maestro", "maestra", "professore", "professoressa", "studente", "studentessa", "medico", "infermiere", "infermiera", "poliziotto", "vigile", "pompiere", "soldato", "re", "regina", "principe", "principessa", "presidente", "ministro", "sindaco", "capo", "direttore", "segretario", "impiegato", "operaio", "contadino", "pescatore", "cacciatore", "commerciante", "negoziante", "cliente", "paziente", "malattia", "salute", "dolore", "febbre", "medicina", "ospedale", "farmacia", "chiesa", "piazza", "parco", "giardino", "bosco", "campo", "prato", "fiume", "lago", "isola", "ponte", "torre", "castello", "palazzo", "museo", "teatro", "cinema", "ristorante", "bar", "albergo", "hotel", "negozio", "mercato", "supermercato", "banca", "ufficio", "fabbrica", "cantiere", "porto", "aeroporto", "stazione", "fermata", "semaforo", "incrocio", "curva", "salita", "discesa", "scala", "ascensore", "bagno", "cucina", "salotto", "camera", "balcone", "terrazzo", "giardino", "cortile", "garage", "cantina", "soffitta", "armadio", "cassetto", "scaffale", "libreria", "scrivania", "computer", "telefono", "televisore", "radio", "giornale", "rivista", "lettera", "messaggio", "email", "internet", "sito", "pagina", "foto", "immagine", "video", "film", "musica", "canzone", "concerto", "spettacolo", "mostra", "festa", "compleanno", "matrimonio", "vacanza", "viaggio", "valigia", "borsa", "zaino", "scarpa", "vestito", "giacca", "pantalone", "camicia", "maglietta", "gonna", "cappotto", "cappello", "guanto", "sciarpa", "cintura", "orologio", "anello", "collana", "braccialetto", "orecchino", "occhiali", "ombrello", "chiave", "serratura", "bottone", "cerniera", "tasca", "manica", "collo", "spalla", "braccio", "mano", "dito", "unghia", "gamba", "piede", "ginocchio", "caviglia", "testa", "capello", "fronte", "occhio", "naso", "bocca", "labbro", "dente", "lingua", "orecchio", "guancia", "mento", "barba", "baffi", "collo", "petto", "schiena", "pancia", "cuore", "polmone", "stomaco", "fegato", "rene", "cervello", "sangue", "osso", "muscolo", "pelle", "voce", "parola", "frase", "discorso", "domanda", "risposta", "consiglio", "ordine", "comando", "preghiera", "promessa", "giuramento", "segreto", "bugia", "verità", "errore", "sbaglio", "colpa", "peccato", "perdono", "scusa", "ringraziamento", "saluto", "bacio", "abbraccio", "carezza", "sorriso", "risata", "pianto", "lacrima", "grido", "urlo", "sussurro", "silenzio", "rumore", "suono", "eco", "ombra", "luce", "buio", "colore", "forma", "linea", "punto", "cerchio", "quadrato", "triangolo", "rettangolo", "numero", "cifra", "lettera", "alfabeto", "nome", "cognome", "titolo", "grado", "classe", "gruppo", "squadra", "società", "compagnia", "ditta", "azienda", "impresa", "affare", "commercio", "industria", "agricoltura", "arte", "scienza", "tecnica", "mestiere", "professione", "carriera", "stipendio", "paga", "salario", "guadagno", "spesa", "costo", "prezzo", "valore", "moneta", "denaro", "soldo", "euro", "dollaro", "cambio", "credito", "debito", "prestito", "mutuo", "interesse", "tassa", "imposta", "multa", "diritto", "dovere", "legge", "norma", "regola", "decreto", "sentenza", "processo", "giudice", "avvocato", "testimone", "imputato", "vittima", "colpevole", "innocente", "prigione", "carcere", "cella", "libertà", "schiavitù", "potere", "forza", "violenza", "pace", "guerra", "battaglia", "vittoria", "sconfitta", "esercito", "arma", "fucile", "pistola", "bomba", "esplosione", "fumo", "cenere", "polvere", "fango", "sabbia", "sasso", "roccia", "minerale", "metallo", "oro", "argento", "ferro", "rame", "alluminio", "legno", "carta", "cartone", "plastica", "vetro", "stoffa", "tessuto", "lana", "cotone", "seta", "cuoio", "pelle", "pelliccia", "piuma", "cera", "sapone", "profumo", "odore", "puzza", "sapore", "gusto", "fame", "sete", "appetito", "digestione", "respiro", "sonno", "sogno", "incubo", "fantasia", "immaginazione", "pensiero", "idea", "opinione", "giudizio", "critica", "elogio", "complimento", "insulto", "offesa", "scherzo", "battuta", "barzelletta", "storia", "racconto", "favola", "leggenda", "mito", "romanzo", "poesia", "verso", "rima", "canzone", "melodia", "ritmo", "nota", "accordo", "strumento", "pianoforte", "chitarra", "violino", "flauto", "tromba", "tamburo", "orchestra", "banda", "coro", "danza", "ballo", "passo", "salto", "corsa", "marcia", "cammino", "passeggiata", "gita", "escursione", "avventura", "scoperta", "invenzione", "creazione", "produzione", "costruzione", "distruzione", "rovina", "maceria", "resto", "avanzo", "rifiuto", "spazzatura", "immondizia", "sporcizia", "pulizia", "ordine", "disordine", "confusione", "caos", "calma", "tranquillità", "agitazione", "movimento", "fermata", "sosta", "pausa", "riposo", "fatica", "stanchezza", "energia", "forza", "debolezza", "malattia", "guarigione", "cura", "rimedio", "ricetta", "dose", "pillola", "iniezione", "operazione", "intervento", "esame", "analisi", "diagnosi", "prognosi", "sintomo", "causa", "effetto", "conseguenza", "risultato", "scopo", "fine", "mezzo", "modo", "metodo", "sistema", "piano", "progetto", "programma", "schema", "disegno", "pittura", "quadro", "scultura", "statua", "monumento", "architettura", "edificio", "costruzione", "struttura", "fondamento", "base", "cima", "vetta", "punta", "vertice", "angolo", "lato", "faccia", "superficie", "volume", "peso", "misura", "grandezza", "dimensione", "distanza", "velocità", "accelerazione", "freno", "motore", "macchina", "apparecchio", "congegno", "meccanismo", "ingranaggio", "pezzo", "parte", "elemento", "componente", "materia", "sostanza", "corpo", "oggetto", "cosa", "fatto", "evento", "avvenimento", "caso", "occasione", "opportunità", "possibilità", "probabilità", "certezza", "dubbio", "speranza", "fiducia", "fede", "credenza", "religione", "dio", "diavolo", "angelo", "santo", "miracolo", "preghiera", "benedizione", "maledizione", "destino", "fortuna", "sfortuna", "caso", "sorte", "rischio", "pericolo", "sicurezza", "protezione", "difesa", "attacco", "offesa", "vendetta", "punizione", "premio", "ricompensa", "regalo", "dono", "offerta", "sacrificio", "rinuncia", "scelta", "decisione", "proposito", "intenzione", "volontà", "desiderio", "voglia", "bisogno", "necessità", "urgenza", "fretta", "calma", "pazienza", "impazienza", "attesa", "speranza", "delusione", "soddisfazione", "insoddisfazione", "contentezza", "felicità", "gioia", "allegria", "tristezza", "dolore", "sofferenza", "pena", "dispiacere", "rammarico", "rimorso", "pentimento", "vergogna", "pudore", "timidezza", "coraggio", "audacia", "paura", "timore", "terrore", "panico", "ansia", "preoccupazione", "inquietudine", "nervosismo", "tranquillità", "serenità", "pace", "rabbia", "ira", "collera", "furore", "odio", "rancore", "risentimento", "invidia", "gelosia", "amore", "affetto", "tenerezza", "passione", "simpatia", "antipatia", "indifferenza", "interesse", "curiosità", "noia", "divertimento", "gioco", "sport", "calcio", "tennis", "pallavolo", "basket", "nuoto", "corsa", "atletica", "ginnastica", "sci", "pattinaggio", "ciclismo", "automobilismo", "motociclismo", "ippica", "vela", "canottaggio", "pesca", "caccia", "tiro", "scherma", "pugilato", "lotta", "arti", "karate", "judo", "gara", "partita", "incontro", "match", "campionato", "torneo", "coppa", "medaglia", "trofeo", "premio", "vittoria", "sconfitta", "pareggio", "record", "classifica", "punteggio", "goal", "rete", "punto", "set", "partita", "tempo", "minuto", "secondo", "periodo", "stagione", "primavera", "estate", "autunno", "inverno", "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica", "settimana", "mese", "anno", "secolo", "millennio", "era", "epoca", "periodo", "momento", "istante", "attimo", "secondo", "minuto", "ora", "mattina", "pomeriggio", "sera", "notte", "alba", "tramonto", "mezzogiorno", "mezzanotte", "data", "calendario", "orologio", "sveglia", "cronometro", "timer", "passato", "presente", "futuro", "inizio", "fine", "principio", "conclusione", "apertura", "chiusura", "entrata", "uscita", "arrivo", "partenza", "andata", "ritorno", "viaggio", "tragitto", "percorso", "itinerario", "tappa", "meta", "destinazione", "origine", "provenienza", "direzione", "senso", "verso", "nord", "sud", "est", "ovest", "centro", "periferia", "confine", "frontiera", "limite", "margine", "bordo", "orlo", "estremità", "interno", "esterno", "superficie", "profondità", "altezza", "larghezza", "lunghezza", "spessore", "circonferenza", "diametro", "raggio", "area", "perimetro", "volume", "capacità", "contenuto", "forma", "figura", "aspetto", "apparenza", "immagine", "vista", "sguardo", "occhiata", "visione", "panorama", "paesaggio", "orizzonte", "prospettiva", "punto", "vista", "osservazione", "attenzione", "concentrazione", "distrazione", "memoria", "ricordo", "oblio", "dimenticanza", "amnesia", "conoscenza", "ignoranza", "sapere", "cultura", "istruzione", "educazione", "insegnamento", "apprendimento", "studio", "ricerca", "indagine", "inchiesta", "esame", "prova", "test", "quiz", "domanda", "risposta", "soluzione", "problema", "difficoltà", "ostacolo", "impedimento", "facilitazione", "aiuto", "assistenza", "sostegno", "appoggio", "collaborazione", "cooperazione", "competizione", "rivalità", "conflitto", "accordo", "disaccordo", "consenso", "dissenso", "approvazione", "disapprovazione", "permesso", "divieto", "autorizzazione", "proibizione", "obbligo", "dovere", "diritto", "libertà", "schiavitù", "indipendenza", "dipendenza", "autonomia", "responsabilità", "colpa", "merito", "onore", "disonore", "gloria", "fama", "celebrità", "notorietà", "oscurità", "anonimato", "successo", "insuccesso", "fallimento", "riuscita", "progresso", "regresso", "sviluppo", "crescita", "diminuzione", "aumento", "calo", "salita", "discesa", "ascesa", "caduta", "crollo", "rovina", "disastro", "catastrofe", "tragedia", "commedia", "dramma", "farsa", "scena", "atto", "rappresentazione", "recita", "interpretazione", "ruolo", "personaggio", "protagonista", "antagonista", "eroe", "eroina", "cattivo", "buono", "maschera", "costume", "trucco", "scenografia", "sipario", "palcoscenico", "platea", "palco", "loggione", "galleria", "posto", "sedia", "poltrona", "fila", "biglietto", "ingresso", "uscita", "intervallo", "applauso", "fischio", "bis", "recensione", "critica", "pubblico", "spettatore", "attore", "attrice", "regista", "autore", "scrittore", "poeta", "pittore", "scultore", "musicista", "cantante", "ballerino", "artista", "maestro", "allievo", "discepolo", "seguace", "ammiratore", "fan", "tifoso", "sostenitore", "avversario", "oppositore", "nemico", "amico", "compagno", "collega", "socio", "partner", "rivale", "concorrente", "competitore", "vincitore", "vinto", "perdente", "campione", "sfidante", "arbitro", "giudice", "allenatore", "istruttore", "insegnante", "professore", "studente", "alunno", "scolaro", "universitario", "laureato", "diplomato", "dottore", "ingegnere", "architetto", "avvocato", "notaio", "commercialista", "ragioniere", "geometra", "perito", "tecnico", "operaio", "impiegato", "dirigente", "manager", "direttore", "presidente", "amministratore", "segretario", "assistente", "collaboratore", "consulente", "esperto", "specialista", "professionista", "dilettante", "principiante", "veterano", "anziano", "giovane", "adulto", "adolescente", "bambino", "neonato", "bebè", "piccolo", "fanciullo", "ragazzo", "giovanotto", "uomo", "signore", "donna", "signora", "signorina", "dama", "cavaliere", "gentiluomo", "villano", "contadino", "cittadino", "paesano", "provinciale", "metropolitano", "straniero", "forestiero", "indigeno", "nativo", "immigrato", "emigrato", "profugo", "rifugiato", "esule", "nomade", "vagabondo", "pellegrino", "viaggiatore", "turista", "escursionista", "esploratore", "pioniere", "colono", "abitante", "residente", "inquilino", "proprietario", "padrone", "ospite", "visitatore", "cliente", "paziente", "malato", "sano", "invalido", "disabile", "handicappato", "cieco", "sordo", "muto", "zoppo", "storpio", "gobbo", "nano", "gigante", "grasso", "magro", "obeso", "snello", "robusto", "gracile", "forte", "debole", "atletico", "sportivo", "sedentario", "pigro", "attivo", "dinamico", "energico", "vivace", "calmo", "tranquillo", "nervoso", "agitato", "inquieto", "sereno", "preoccupato", "ansioso", "rilassato", "teso", "stanco", "riposato", "sveglio", "assonnato", "vigile", "attento", "distratto", "concentrato", "assorto", "pensieroso", "riflessivo", "meditativo", "contemplativo", "distratto", "sbadato", "smemorato", "preciso", "accurato", "meticoloso", "superficiale", "approssimativo", "negligente", "diligente", "scrupoloso", "coscienzioso", "responsabile", "irresponsabile", "affidabile", "inaffidabile", "fedele", "infedele", "leale", "sleale", "sincero", "bugiardo", "onesto", "disonesto", "giusto", "ingiusto", "equo", "iniquo", "imparziale", "parziale", "neutrale", "schierato", "obiettivo", "soggettivo", "razionale", "irrazionale", "logico", "illogico", "sensato", "insensato", "saggio", "stolto", "prudente", "imprudente", "cauto", "incauto", "previdente", "improvvido", "accorto", "ingenuo", "furbo", "astuto", "scaltro", "semplice", "complicato", "complesso", "facile", "difficile", "semplice", "elaborato", "raffinato", "rozzo", "grezzo", "fine", "grossolano", "delicato", "rude", "gentile", "cortese", "educato", "maleducato", "civile", "incivile", "urbano", "villano", "elegante", "inelegante", "raffinato", "volgare", "distinto", "ordinario", "comune", "raro", "frequente", "infrequente", "usuale", "inusuale", "normale", "anormale", "regolare", "irregolare", "tipico", "atipico", "standard", "speciale", "particolare", "generale", "specifico", "generico", "individuale", "collettivo", "personale", "impersonale", "privato", "pubblico", "segreto", "palese", "nascosto", "evidente", "manifesto", "occulto", "aperto", "chiuso", "scoperto", "coperto", "nudo", "vestito", "calvo", "peloso", "liscio", "ruvido", "morbido", "duro", "tenero", "rigido", "flessibile", "elastico", "fragile", "resistente", "solido", "liquido", "gassoso", "denso", "rado", "spesso", "sottile", "trasparente", "opaco", "lucido", "opaco", "brillante", "spento", "luminoso", "oscuro", "chiaro", "scuro", "bianco", "nero", "grigio", "rosso", "blu", "giallo", "verde", "arancione", "viola", "rosa", "marrone", "beige", "celeste", "azzurro", "turchese", "indaco", "magenta", "ciano", "vermiglio", "scarlatto", "cremisi", "bordeaux", "amaranto", "porpora", "lilla", "lavanda", "pervinca", "cobalto", "oltremare", "smeraldo", "giada", "oliva", "kaki", "ocra", "seppia", "ambra", "oro", "argento", "bronzo", "rame", "ferro", "acciaio", "alluminio", "piombo", "zinco", "stagno", "nichel", "cromo", "titanio", "platino", "uranio", "radio", "carbonio", "silicio", "ossigeno", "idrogeno", "azoto", "elio", "neon", "argon", "cloro", "fluoro", "bromo", "iodio", "zolfo", "fosforo", "calcio", "sodio", "potassio", "magnesio", "bario", "litio", "berillio", "boro", "scandio", "vanadio", "manganese", "cobalto", "gallio", "germanio", "arsenico", "selenio", "rubidio", "stronzio", "ittrio", "zirconio", "niobio", "molibdeno", "tecnezio", "rutenio", "rodio", "palladio", "cadmio", "indio", "antimonio", "tellurio", "cesio", "bario", "lantanio", "cerio", "praseodimio", "neodimio", "promezio", "samario", "europio", "gadolinio", "terbio", "disprosio", "olmio", "erbio", "tulio", "itterbio", "lutezio", "afnio", "tantalio", "tungsteno", "renio", "osmio", "iridio", "mercurio", "tallio", "bismuto", "polonio", "astato", "radon", "francio", "attinio", "torio", "protoattinio", "nettunio", "plutonio", "americio", "curio", "berkelio", "californio", "einsteinio", "fermio", "mendelevio", "nobelio", "laurenzio", "rutherfordio", "dubnio", "seaborgio", "bohrio", "hassio", "meitnerio", "darmstadtio", "roentgenio", "copernicio", "nihonio", "flerovio", "moscovio", "livermorio", "tennessinio", "oganessio"]
};

// Classe principale dell'analizzatore avanzato
class AnalizzatoreAvanzato {
    constructor() {
        this.risultatiAnalisi = [];
    }
    
    // Metodo principale per analizzare una frase
    analizzaFrase(frase) {
        // Prepara la frase
        const frasePulita = this.pulisciFrase(frase);
        const parole = frasePulita.split(' ').filter(p => p.length > 0);
        
        // Analizza ogni parola con contesto
        const risultati = [];
        for (let i = 0; i < parole.length; i++) {
            const parola = parole[i];
            const parolaPrecedente = i > 0 ? parole[i-1] : null;
            const parolaSuccessiva = i < parole.length - 1 ? parole[i+1] : null;
            
            const analisi = this.analizzaParolaConContesto(
                parola, 
                parolaPrecedente, 
                parolaSuccessiva,
                i,
                parole
            );
            
            risultati.push({
                parola: parola,
                tipo: analisi.tipo,
                sottotipo: analisi.sottotipo,
                spiegazione: analisi.spiegazione,
                dettagli: analisi.dettagli
            });
        }
        
        // Applica regole di disambiguazione globale
        this.disambiguazioneGlobale(risultati);
        
        return risultati;
    }
    
    // Pulisce la frase da punteggiatura e normalizza gli spazi
    pulisciFrase(frase) {
        // Mantieni apostrofi interni alle parole
        let frasePulita = frase.replace(/([.,!?;:])(\s|$)/g, ' $1 ');
        frasePulita = frasePulita.replace(/\s+/g, ' ').trim();
        return frasePulita;
    }
    
    // Analizza una singola parola con il suo contesto
    analizzaParolaConContesto(parola, parolaPrecedente, parolaSuccessiva, indice, tutteLeParole) {
        const parolaLower = parola.toLowerCase();
        
        // 1. Controlla se è punteggiatura
        if (/^[.,!?;:]$/.test(parola)) {
            return {
                tipo: 'punteggiatura',
                sottotipo: this.tipoPunteggiatura(parola),
                spiegazione: `Segno di ${this.tipoPunteggiatura(parola)}`,
                dettagli: {}
            };
        }
        
        // 2. Controlla se è un'interiezione
        if (dizionarioParole.interiezioni.includes(parolaLower)) {
            return {
                tipo: 'interiezione',
                sottotipo: 'esclamativa',
                spiegazione: 'Esprime emozione o richiamo',
                dettagli: {}
            };
        }
        
        // 3. Controlla se è un articolo
        const tipoArticolo = this.identificaArticolo(parolaLower);
        if (tipoArticolo) {
            return {
                tipo: 'articolo',
                sottotipo: tipoArticolo,
                spiegazione: `Articolo ${tipoArticolo}`,
                dettagli: {}
            };
        }
        
        // 4. Controlla se è una preposizione
        const tipoPreposizione = this.identificaPreposizione(parolaLower);
        if (tipoPreposizione) {
            return {
                tipo: 'preposizione',
                sottotipo: tipoPreposizione,
                spiegazione: `Preposizione ${tipoPreposizione}`,
                dettagli: {}
            };
        }
        
        // 5. Controlla se è una forma verbale nel dizionario
        const infoVerbo = isFormaVerbale(parolaLower);
        if (infoVerbo) {
            return {
                tipo: 'verbo',
                sottotipo: infoVerbo.tempo,
                spiegazione: `Verbo "${infoVerbo.verbo}" - ${this.descriviTempo(infoVerbo.tempo)}`,
                dettagli: infoVerbo
            };
        }
        
        // 6. Controlla parole ambigue con contesto
        const analisiAmbigua = this.analizzaParoleAmbigue(parolaLower, parolaPrecedente, parolaSuccessiva, indice, tutteLeParole);
        if (analisiAmbigua) {
            return analisiAmbigua;
        }
        
        // 7. Controlla se è una congiunzione
        const tipoCongiunzione = this.identificaCongiunzione(parolaLower);
        if (tipoCongiunzione) {
            return {
                tipo: 'congiunzione',
                sottotipo: tipoCongiunzione,
                spiegazione: `Congiunzione ${tipoCongiunzione}`,
                dettagli: {}
            };
        }
        
        // 8. Controlla se è un avverbio
        const tipoAvverbio = this.identificaAvverbio(parolaLower);
        if (tipoAvverbio) {
            return {
                tipo: 'avverbio',
                sottotipo: tipoAvverbio,
                spiegazione: `Avverbio di ${tipoAvverbio}`,
                dettagli: {}
            };
        }
        
        // 9. Controlla se è un pronome
        const tipoPronome = this.identificaPronome(parolaLower);
        if (tipoPronome) {
            return {
                tipo: 'pronome',
                sottotipo: tipoPronome,
                spiegazione: `Pronome ${tipoPronome}`,
                dettagli: {}
            };
        }
        
        // 10. Controlla se è un aggettivo
        const tipoAggettivo = this.identificaAggettivo(parolaLower, parolaPrecedente, parolaSuccessiva);
        if (tipoAggettivo) {
            return {
                tipo: 'aggettivo',
                sottotipo: tipoAggettivo,
                spiegazione: `Aggettivo ${tipoAggettivo}`,
                dettagli: {}
            };
        }
        
        // 11. Controlla se potrebbe essere un verbo non nel dizionario
        if (this.potrebbeEssereVerbo(parolaLower, parolaPrecedente)) {
            return {
                tipo: 'verbo',
                sottotipo: 'possibile',
                spiegazione: 'Possibile forma verbale',
                dettagli: {}
            };
        }
        
        // 12. Default: è un nome
        return {
            tipo: 'nome',
            sottotipo: this.tipoNome(parola),
            spiegazione: `Nome ${this.tipoNome(parola)}`,
            dettagli: {}
        };
    }
    
    // Analizza parole ambigue usando il contesto
    analizzaParoleAmbigue(parola, parolaPrecedente, parolaSuccessiva, indice, tutteLeParole) {
        const precLower = parolaPrecedente ? parolaPrecedente.toLowerCase() : '';
        const succLower = parolaSuccessiva ? parolaSuccessiva.toLowerCase() : '';
        
        // "che" - può essere pronome, congiunzione o aggettivo
        if (parola === 'che') {
            // Se segue un articolo o aggettivo possessivo, è aggettivo interrogativo/esclamativo
            if (dizionarioParole.articoli.determinativi.includes(succLower) ||
                dizionarioParole.articoli.indeterminativi.includes(succLower) ||
                dizionarioParole.aggettivi.possessivi.includes(succLower)) {
                return {
                    tipo: 'aggettivo',
                    sottotipo: 'interrogativo/esclamativo',
                    spiegazione: 'Aggettivo interrogativo o esclamativo',
                    dettagli: {}
                };
            }
            
            // Se collega due frasi (dopo virgola o verbo), è congiunzione
            if (precLower === ',' || isFormaVerbale(precLower)) {
                return {
                    tipo: 'congiunzione',
                    sottotipo: 'subordinante',
                    spiegazione: 'Congiunzione subordinante',
                    dettagli: {}
                };
            }
            
            // Default: pronome relativo
            return {
                tipo: 'pronome',
                sottotipo: 'relativo',
                spiegazione: 'Pronome relativo',
                dettagli: {}
            };
        }
        
        // "la", "le", "li", "lo" - possono essere articoli o pronomi
        if (['la', 'le', 'li', 'lo'].includes(parola)) {
            // Se la parola successiva è un nome/aggettivo, è articolo
            if (succLower && !isFormaVerbale(succLower) && !dizionarioParole.preposizioni.semplici.includes(succLower)) {
                return {
                    tipo: 'articolo',
                    sottotipo: 'determinativo',
                    spiegazione: 'Articolo determinativo',
                    dettagli: {}
                };
            }
            
            // Se segue un verbo, è pronome
            if (isFormaVerbale(precLower) || isFormaVerbale(succLower)) {
                return {
                    tipo: 'pronome',
                    sottotipo: 'personale complemento',
                    spiegazione: 'Pronome personale complemento',
                    dettagli: {}
                };
            }
        }
        
        // "uno", "una" - possono essere articoli, pronomi o numerali
        if (['uno', 'una'].includes(parola)) {
            // Se seguito da nome, è articolo
            if (succLower && !isFormaVerbale(succLower) && !dizionarioParole.preposizioni.semplici.includes(succLower)) {
                return {
                    tipo: 'articolo',
                    sottotipo: 'indeterminativo',
                    spiegazione: 'Articolo indeterminativo',
                    dettagli: {}
                };
            }
            
            // Se isolato o in contesto numerico, è numerale
            if (!succLower || dizionarioParole.aggettivi.numerali_cardinali.includes(succLower)) {
                return {
                    tipo: 'aggettivo',
                    sottotipo: 'numerale cardinale',
                    spiegazione: 'Numerale cardinale',
                    dettagli: {}
                };
            }
        }
        
        // "sei" - può essere verbo essere o numerale
        if (parola === 'sei') {
            // Se preceduto da "tu" o seguito da aggettivo/nome, è verbo
            if (precLower === 'tu' || 
                dizionarioParole.aggettivi.qualificativi_comuni.includes(succLower) ||
                dizionarioParole.pronomi.personali_soggetto.includes(precLower)) {
                return {
                    tipo: 'verbo',
                    sottotipo: 'presente',
                    spiegazione: 'Verbo "essere" - indicativo presente, 2ª persona singolare',
                    dettagli: { verbo: 'essere', tempo: 'presente', forma: 'sei' }
                };
            }
            
            // Se in contesto numerico, è numerale
            if (dizionarioParole.aggettivi.numerali_cardinali.includes(precLower) ||
                dizionarioParole.aggettivi.numerali_cardinali.includes(succLower)) {
                return {
                    tipo: 'aggettivo',
                    sottotipo: 'numerale cardinale',
                    spiegazione: 'Numerale cardinale',
                    dettagli: {}
                };
            }
            
            // Default in base al contesto
            // Se all'inizio della frase seguito da aggettivo, è probabilmente verbo
            if (indice === 0 && succLower) {
                return {
                    tipo: 'verbo',
                    sottotipo: 'presente',
                    spiegazione: 'Verbo "essere" - indicativo presente, 2ª persona singolare',
                    dettagli: { verbo: 'essere', tempo: 'presente', forma: 'sei' }
                };
            }
        }
        
        // "come" - può essere avverbio o congiunzione
        if (parola === 'come') {
            // Se introduce una domanda (seguito da verbo), è avverbio interrogativo
            if (isFormaVerbale(succLower) || indice === 0) {
                return {
                    tipo: 'avverbio',
                    sottotipo: 'interrogativo',
                    spiegazione: 'Avverbio interrogativo',
                    dettagli: {}
                };
            }
            
            // Se paragona (in mezzo alla frase), è congiunzione
            if (indice > 0 && indice < tutteLeParole.length - 1) {
                return {
                    tipo: 'congiunzione',
                    sottotipo: 'subordinante',
                    spiegazione: 'Congiunzione subordinante comparativa',
                    dettagli: {}
                };
            }
        }
        
        // "perché" - distinzione tra congiunzione causale e avverbio interrogativo
        if (parola === 'perché') {
            // Se all'inizio della frase o dopo punteggiatura interrogativa, è avverbio
            if (indice === 0 || (indice > 0 && tutteLeParole[indice-1] === '?')) {
                return {
                    tipo: 'avverbio',
                    sottotipo: 'interrogativo',
                    spiegazione: 'Avverbio interrogativo - introduce una domanda',
                    dettagli: {}
                };
            }
            
            // Altrimenti è congiunzione causale
            return {
                tipo: 'congiunzione',
                sottotipo: 'subordinante causale',
                spiegazione: 'Congiunzione subordinante causale',
                dettagli: {}
            };
        }
        
        // "molto", "poco", "tanto", "troppo" - possono essere avverbi, aggettivi o pronomi
        if (['molto', 'poco', 'tanto', 'troppo', 'molta', 'poca', 'tanta', 'troppa', 
             'molti', 'pochi', 'tanti', 'troppi', 'molte', 'poche', 'tante', 'troppe'].includes(parola)) {
            // Se modifica un verbo o un aggettivo, è avverbio
            if (isFormaVerbale(precLower) || isFormaVerbale(succLower) ||
                dizionarioParole.aggettivi.qualificativi_comuni.includes(succLower)) {
                return {
                    tipo: 'avverbio',
                    sottotipo: 'quantità',
                    spiegazione: 'Avverbio di quantità',
                    dettagli: {}
                };
            }
            
            // Se seguito da nome, è aggettivo
            if (succLower && !isFormaVerbale(succLower)) {
                return {
                    tipo: 'aggettivo',
                    sottotipo: 'indefinito',
                    spiegazione: 'Aggettivo indefinito',
                    dettagli: {}
                };
            }
            
            // Se isolato, è pronome
            return {
                tipo: 'pronome',
                sottotipo: 'indefinito',
                spiegazione: 'Pronome indefinito',
                dettagli: {}
            };
        }
        
        return null;
    }
    
    // Identifica il tipo di articolo
    identificaArticolo(parola) {
        if (dizionarioParole.articoli.determinativi.includes(parola)) {
            return 'determinativo';
        }
        if (dizionarioParole.articoli.indeterminativi.includes(parola)) {
            return 'indeterminativo';
        }
        return null;
    }
    
    // Identifica il tipo di preposizione
    identificaPreposizione(parola) {
        if (dizionarioParole.preposizioni.semplici.includes(parola)) {
            return 'semplice';
        }
        if (dizionarioParole.preposizioni.articolate.includes(parola)) {
            return 'articolata';
        }
        return null;
    }
    
    // Identifica il tipo di congiunzione
    identificaCongiunzione(parola) {
        if (dizionarioParole.congiunzioni.coordinanti.includes(parola)) {
            return 'coordinante';
        }
        if (dizionarioParole.congiunzioni.subordinanti.includes(parola)) {
            return 'subordinante';
        }
        return null;
    }
    
    // Identifica il tipo di avverbio
    identificaAvverbio(parola) {
        for (const tipo in dizionarioParole.avverbi) {
            if (dizionarioParole.avverbi[tipo].includes(parola)) {
                return tipo;
            }
        }
        
        // Avverbi in -mente
        if (parola.endsWith('mente') && parola.length > 6) {
            return 'modo';
        }
        
        return null;
    }
    
    // Identifica il tipo di pronome
    identificaPronome(parola) {
        for (const tipo in dizionarioParole.pronomi) {
            if (dizionarioParole.pronomi[tipo].includes(parola)) {
                return tipo.replace(/_/g, ' ');
            }
        }
        return null;
    }
    
    // Identifica il tipo di aggettivo
    identificaAggettivo(parola, parolaPrecedente, parolaSuccessiva) {
        for (const tipo in dizionarioParole.aggettivi) {
            if (dizionarioParole.aggettivi[tipo].includes(parola)) {
                return tipo.replace(/_/g, ' ');
            }
        }
        
        // Aggettivi derivati (suffissi comuni)
        const suffissiAggettivi = ['oso', 'osa', 'osi', 'ose', 'bile', 'bili', 'evole', 'evoli', 
                                   'ale', 'ali', 'are', 'ari', 'ico', 'ica', 'ici', 'iche',
                                   'ivo', 'iva', 'ivi', 'ive', 'ato', 'ata', 'ati', 'ate',
                                   'uto', 'uta', 'uti', 'ute', 'ito', 'ita', 'iti', 'ite'];
        
        for (const suffisso of suffissiAggettivi) {
            if (parola.endsWith(suffisso) && parola.length > suffisso.length + 2) {
                // Verifica che non sia un verbo
                if (!isFormaVerbale(parola)) {
                    return 'qualificativo';
                }
            }
        }
        
        return null;
    }
    
    // Verifica se potrebbe essere un verbo non presente nel dizionario
    potrebbeEssereVerbo(parola, parolaPrecedente) {
        const precLower = parolaPrecedente ? parolaPrecedente.toLowerCase() : '';
        
        // Se preceduto da pronome personale soggetto, potrebbe essere verbo
        if (dizionarioParole.pronomi.personali_soggetto.includes(precLower)) {
            return true;
        }
        
        // Se preceduto da "non", molto probabilmente è un verbo
        if (precLower === 'non') {
            return true;
        }
        
        // Controlla desinenze verbali comuni
        const desinenze = ['are', 'ere', 'ire', 'ando', 'endo', 'ato', 'uto', 'ito'];
        for (const desinenza of desinenze) {
            if (parola.endsWith(desinenza) && parola.length > desinenza.length + 2) {
                return true;
            }
        }
        
        return false;
    }
    
    // Determina il tipo di nome
    tipoNome(parola) {
        // Nome proprio (inizia con maiuscola)
        if (parola[0] === parola[0].toUpperCase() && parola[0] !== parola[0].toLowerCase()) {
            return 'proprio';
        }
        
        // Nome comune
        if (dizionarioParole.nomi_comuni.includes(parola.toLowerCase())) {
            return 'comune';
        }
        
        // Nome astratto (suffissi comuni)
        const suffissiAstratti = ['zione', 'sione', 'ezza', 'anza', 'enza', 'ità', 'tà', 'ismo', 'mento'];
        for (const suffisso of suffissiAstratti) {
            if (parola.toLowerCase().endsWith(suffisso)) {
                return 'astratto';
            }
        }
        
        return 'comune';
    }
    
    // Tipo di punteggiatura
    tipoPunteggiatura(segno) {
        const tipi = {
            '.': 'punto',
            ',': 'virgola',
            '!': 'esclamazione',
            '?': 'interrogazione',
            ';': 'punto e virgola',
            ':': 'due punti'
        };
        return tipi[segno] || 'punteggiatura';
    }
    
    // Descrivi il tempo verbale
    descriviTempo(tempo) {
        const descrizioni = {
            presente: 'indicativo presente',
            imperfetto: 'indicativo imperfetto',
            passatoRemoto: 'passato remoto',
            futuro: 'futuro semplice',
            condizionale: 'condizionale presente',
            congPresente: 'congiuntivo presente',
            congImperfetto: 'congiuntivo imperfetto',
            imperativo: 'imperativo',
            participioPassato: 'participio passato',
            gerundio: 'gerundio',
            infinito: 'infinito'
        };
        return descrizioni[tempo] || tempo;
    }
    
    // Disambiguazione globale dopo l'analisi iniziale
    disambiguazioneGlobale(risultati) {
        // Applica regole di coerenza grammaticale
        for (let i = 0; i < risultati.length; i++) {
            // Articolo + Nome/Aggettivo
            if (i < risultati.length - 1 && risultati[i].tipo === 'articolo') {
                if (risultati[i+1].tipo === 'verbo') {
                    // Probabilmente il verbo è stato identificato male
                    // Riconsidera come nome
                    if (!isFormaVerbale(risultati[i+1].parola.toLowerCase())) {
                        risultati[i+1].tipo = 'nome';
                        risultati[i+1].sottotipo = 'comune';
                        risultati[i+1].spiegazione = 'Nome comune';
                    }
                }
            }
            
            // Non + Verbo
            if (risultati[i].parola.toLowerCase() === 'non' && i < risultati.length - 1) {
                if (risultati[i+1].tipo !== 'verbo') {
                    // Riconsidera la parola successiva come possibile verbo
                    const possibileVerbo = risultati[i+1].parola.toLowerCase();
                    if (this.potrebbeEssereVerbo(possibileVerbo, 'non')) {
                        risultati[i+1].tipo = 'verbo';
                        risultati[i+1].sottotipo = 'possibile';
                        risultati[i+1].spiegazione = 'Possibile forma verbale';
                    }
                }
            }
            
            // Preposizione + Articolo/Nome
            if (risultati[i].tipo === 'preposizione' && i < risultati.length - 1) {
                if (risultati[i+1].tipo === 'verbo' && !isFormaVerbale(risultati[i+1].parola.toLowerCase())) {
                    risultati[i+1].tipo = 'nome';
                    risultati[i+1].sottotipo = 'comune';
                    risultati[i+1].spiegazione = 'Nome comune';
                }
            }
        }
    }
}

// Export per l'uso nel file HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalizzatoreAvanzato;
}
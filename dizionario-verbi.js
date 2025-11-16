// Dizionario morfologico dei verbi italiani
// Include le forme coniugate dei verbi più comuni

const dizionarioVerbi = {
    // VERBO ESSERE - ausiliare
    essere: {
        infinito: "essere",
        ausiliare: true,
        forme: {
            // Indicativo presente
            presente: ["sono", "sei", "è", "siamo", "siete", "sono"],
            // Indicativo imperfetto
            imperfetto: ["ero", "eri", "era", "eravamo", "eravate", "erano"],
            // Indicativo passato remoto
            passatoRemoto: ["fui", "fosti", "fu", "fummo", "foste", "furono"],
            // Indicativo futuro
            futuro: ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"],
            // Condizionale presente
            condizionale: ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"],
            // Congiuntivo presente
            congPresente: ["sia", "sia", "sia", "siamo", "siate", "siano"],
            // Congiuntivo imperfetto
            congImperfetto: ["fossi", "fossi", "fosse", "fossimo", "foste", "fossero"],
            // Imperativo
            imperativo: ["sii", "sia", "siamo", "siate", "siano"],
            // Participio
            participioPassato: ["stato", "stata", "stati", "state"],
            // Gerundio
            gerundio: "essendo"
        }
    },

    // VERBO AVERE - ausiliare
    avere: {
        infinito: "avere",
        ausiliare: true,
        forme: {
            presente: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
            imperfetto: ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"],
            passatoRemoto: ["ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero"],
            futuro: ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"],
            condizionale: ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"],
            congPresente: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
            congImperfetto: ["avessi", "avessi", "avesse", "avessimo", "aveste", "avessero"],
            imperativo: ["abbi", "abbia", "abbiamo", "abbiate", "abbiano"],
            participioPassato: ["avuto", "avuta", "avuti", "avute"],
            gerundio: "avendo"
        }
    },

    // PRIMA CONIUGAZIONE -ARE
    studiare: {
        infinito: "studiare",
        modello: "are",
        forme: {
            presente: ["studio", "studi", "studia", "studiamo", "studiate", "studiano"],
            imperfetto: ["studiavo", "studiavi", "studiava", "studiavamo", "studiavate", "studiavano"],
            passatoRemoto: ["studiai", "studiasti", "studiò", "studiammo", "studiaste", "studiarono"],
            futuro: ["studierò", "studierai", "studierà", "studieremo", "studierete", "studieranno"],
            condizionale: ["studierei", "studieresti", "studierebbe", "studieremmo", "studiereste", "studierebbero"],
            congPresente: ["studi", "studi", "studi", "studiamo", "studiate", "studino"],
            congImperfetto: ["studiassi", "studiassi", "studiasse", "studiassimo", "studiaste", "studiassero"],
            imperativo: ["studia", "studi", "studiamo", "studiate", "studino"],
            participioPassato: ["studiato", "studiata", "studiati", "studiate"],
            gerundio: "studiando"
        }
    },

    mangiare: {
        infinito: "mangiare",
        modello: "are",
        forme: {
            presente: ["mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"],
            imperfetto: ["mangiavo", "mangiavi", "mangiava", "mangiavamo", "mangiavate", "mangiavano"],
            passatoRemoto: ["mangiai", "mangiasti", "mangiò", "mangiammo", "mangiaste", "mangiarono"],
            futuro: ["mangerò", "mangerai", "mangerà", "mangeremo", "mangerete", "mangeranno"],
            condizionale: ["mangerei", "mangeresti", "mangerebbe", "mangeremmo", "mangereste", "mangerebbero"],
            congPresente: ["mangi", "mangi", "mangi", "mangiamo", "mangiate", "mangino"],
            congImperfetto: ["mangiassi", "mangiassi", "mangiasse", "mangiassimo", "mangiaste", "mangiassero"],
            imperativo: ["mangia", "mangi", "mangiamo", "mangiate", "mangino"],
            participioPassato: ["mangiato", "mangiata", "mangiati", "mangiate"],
            gerundio: "mangiando"
        }
    },

    amare: {
        infinito: "amare",
        modello: "are",
        forme: {
            presente: ["amo", "ami", "ama", "amiamo", "amate", "amano"],
            imperfetto: ["amavo", "amavi", "amava", "amavamo", "amavate", "amavano"],
            passatoRemoto: ["amai", "amasti", "amò", "amammo", "amaste", "amarono"],
            futuro: ["amerò", "amerai", "amerà", "ameremo", "amerete", "ameranno"],
            condizionale: ["amerei", "ameresti", "amerebbe", "ameremmo", "amereste", "amerebbero"],
            congPresente: ["ami", "ami", "ami", "amiamo", "amiate", "amino"],
            congImperfetto: ["amassi", "amassi", "amasse", "amassimo", "amaste", "amassero"],
            imperativo: ["ama", "ami", "amiamo", "amate", "amino"],
            participioPassato: ["amato", "amata", "amati", "amate"],
            gerundio: "amando"
        }
    },

    parlare: {
        infinito: "parlare",
        modello: "are",
        forme: {
            presente: ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
            imperfetto: ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"],
            passatoRemoto: ["parlai", "parlasti", "parlò", "parlammo", "parlaste", "parlarono"],
            futuro: ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"],
            condizionale: ["parlerei", "parleresti", "parlerebbe", "parleremmo", "parlereste", "parlerebbero"],
            congPresente: ["parli", "parli", "parli", "parliamo", "parliate", "parlino"],
            congImperfetto: ["parlassi", "parlassi", "parlasse", "parlassimo", "parlaste", "parlassero"],
            imperativo: ["parla", "parli", "parliamo", "parlate", "parlino"],
            participioPassato: ["parlato", "parlata", "parlati", "parlate"],
            gerundio: "parlando"
        }
    },

    // SECONDA CONIUGAZIONE -ERE
    leggere: {
        infinito: "leggere",
        modello: "ere",
        forme: {
            presente: ["leggo", "leggi", "legge", "leggiamo", "leggete", "leggono"],
            imperfetto: ["leggevo", "leggevi", "leggeva", "leggevamo", "leggevate", "leggevano"],
            passatoRemoto: ["lessi", "leggesti", "lesse", "leggemmo", "leggeste", "lessero"],
            futuro: ["leggerò", "leggerai", "leggerà", "leggeremo", "leggerete", "leggeranno"],
            condizionale: ["leggerei", "leggeresti", "leggerebbe", "leggeremmo", "leggereste", "leggerebbero"],
            congPresente: ["legga", "legga", "legga", "leggiamo", "leggiate", "leggano"],
            congImperfetto: ["leggessi", "leggessi", "leggesse", "leggessimo", "leggeste", "leggessero"],
            imperativo: ["leggi", "legga", "leggiamo", "leggete", "leggano"],
            participioPassato: ["letto", "letta", "letti", "lette"],
            gerundio: "leggendo"
        }
    },

    scrivere: {
        infinito: "scrivere",
        modello: "ere",
        forme: {
            presente: ["scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivono"],
            imperfetto: ["scrivevo", "scrivevi", "scriveva", "scrivevamo", "scrivevate", "scrivevano"],
            passatoRemoto: ["scrissi", "scrivesti", "scrisse", "scrivemmo", "scriveste", "scrissero"],
            futuro: ["scriverò", "scriverai", "scriverà", "scriveremo", "scriverete", "scriveranno"],
            condizionale: ["scriverei", "scriveresti", "scriverebbe", "scriveremmo", "scrivereste", "scriverebbero"],
            congPresente: ["scriva", "scriva", "scriva", "scriviamo", "scriviate", "scrivano"],
            congImperfetto: ["scrivessi", "scrivessi", "scrivesse", "scrivessimo", "scriveste", "scrivessero"],
            imperativo: ["scrivi", "scriva", "scriviamo", "scrivete", "scrivano"],
            participioPassato: ["scritto", "scritta", "scritti", "scritte"],
            gerundio: "scrivendo"
        }
    },

    correre: {
        infinito: "correre",
        modello: "ere",
        forme: {
            presente: ["corro", "corri", "corre", "corriamo", "correte", "corrono"],
            imperfetto: ["correvo", "correvi", "correva", "correvamo", "correvate", "correvano"],
            passatoRemoto: ["corsi", "corresti", "corse", "corremmo", "correste", "corsero"],
            futuro: ["correrò", "correrai", "correrà", "correremo", "correrete", "correranno"],
            condizionale: ["correrei", "correresti", "correrebbe", "correremmo", "correreste", "correrebbero"],
            congPresente: ["corra", "corra", "corra", "corriamo", "corriate", "corrano"],
            congImperfetto: ["corressi", "corressi", "corresse", "corressimo", "correste", "corressero"],
            imperativo: ["corri", "corra", "corriamo", "correte", "corrano"],
            participioPassato: ["corso", "corsa", "corsi", "corse"],
            gerundio: "correndo"
        }
    },

    // TERZA CONIUGAZIONE -IRE
    dormire: {
        infinito: "dormire",
        modello: "ire",
        forme: {
            presente: ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"],
            imperfetto: ["dormivo", "dormivi", "dormiva", "dormivamo", "dormivate", "dormivano"],
            passatoRemoto: ["dormii", "dormisti", "dormì", "dormimmo", "dormiste", "dormirono"],
            futuro: ["dormirò", "dormirai", "dormirà", "dormiremo", "dormirete", "dormiranno"],
            condizionale: ["dormirei", "dormiresti", "dormirebbe", "dormiremmo", "dormireste", "dormirebbero"],
            congPresente: ["dorma", "dorma", "dorma", "dormiamo", "dormiate", "dormano"],
            congImperfetto: ["dormissi", "dormissi", "dormisse", "dormissimo", "dormiste", "dormissero"],
            imperativo: ["dormi", "dorma", "dormiamo", "dormite", "dormano"],
            participioPassato: ["dormito", "dormita", "dormiti", "dormite"],
            gerundio: "dormendo"
        }
    },

    sentire: {
        infinito: "sentire",
        modello: "ire",
        forme: {
            presente: ["sento", "senti", "sente", "sentiamo", "sentite", "sentono"],
            imperfetto: ["sentivo", "sentivi", "sentiva", "sentivamo", "sentivate", "sentivano"],
            passatoRemoto: ["sentii", "sentisti", "sentì", "sentimmo", "sentiste", "sentirono"],
            futuro: ["sentirò", "sentirai", "sentirà", "sentiremo", "sentirete", "sentiranno"],
            condizionale: ["sentirei", "sentiresti", "sentirebbe", "sentiremmo", "sentireste", "sentirebbero"],
            congPresente: ["senta", "senta", "senta", "sentiamo", "sentiate", "sentano"],
            congImperfetto: ["sentissi", "sentissi", "sentisse", "sentissimo", "sentiste", "sentissero"],
            imperativo: ["senti", "senta", "sentiamo", "sentite", "sentano"],
            participioPassato: ["sentito", "sentita", "sentiti", "sentite"],
            gerundio: "sentendo"
        }
    },

    // VERBI IRREGOLARI COMUNI
    fare: {
        infinito: "fare",
        irregolare: true,
        forme: {
            presente: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
            imperfetto: ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"],
            passatoRemoto: ["feci", "facesti", "fece", "facemmo", "faceste", "fecero"],
            futuro: ["farò", "farai", "farà", "faremo", "farete", "faranno"],
            condizionale: ["farei", "faresti", "farebbe", "faremmo", "fareste", "farebbero"],
            congPresente: ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"],
            congImperfetto: ["facessi", "facessi", "facesse", "facessimo", "faceste", "facessero"],
            imperativo: ["fa'", "fai", "faccia", "facciamo", "fate", "facciano"],
            participioPassato: ["fatto", "fatta", "fatti", "fatte"],
            gerundio: "facendo"
        }
    },

    andare: {
        infinito: "andare",
        irregolare: true,
        forme: {
            presente: ["vado", "vai", "va", "andiamo", "andate", "vanno"],
            imperfetto: ["andavo", "andavi", "andava", "andavamo", "andavate", "andavano"],
            passatoRemoto: ["andai", "andasti", "andò", "andammo", "andaste", "andarono"],
            futuro: ["andrò", "andrai", "andrà", "andremo", "andrete", "andranno"],
            condizionale: ["andrei", "andresti", "andrebbe", "andremmo", "andreste", "andrebbero"],
            congPresente: ["vada", "vada", "vada", "andiamo", "andiate", "vadano"],
            congImperfetto: ["andassi", "andassi", "andasse", "andassimo", "andaste", "andassero"],
            imperativo: ["va'", "vai", "vada", "andiamo", "andate", "vadano"],
            participioPassato: ["andato", "andata", "andati", "andate"],
            gerundio: "andando"
        }
    },

    dare: {
        infinito: "dare",
        irregolare: true,
        forme: {
            presente: ["do", "dai", "dà", "diamo", "date", "danno"],
            imperfetto: ["davo", "davi", "dava", "davamo", "davate", "davano"],
            passatoRemoto: ["diedi", "desti", "diede", "demmo", "deste", "diedero"],
            futuro: ["darò", "darai", "darà", "daremo", "darete", "daranno"],
            condizionale: ["darei", "daresti", "darebbe", "daremmo", "dareste", "darebbero"],
            congPresente: ["dia", "dia", "dia", "diamo", "diate", "diano"],
            congImperfetto: ["dessi", "dessi", "desse", "dessimo", "deste", "dessero"],
            imperativo: ["da'", "dai", "dia", "diamo", "date", "diano"],
            participioPassato: ["dato", "data", "dati", "date"],
            gerundio: "dando"
        }
    },

    stare: {
        infinito: "stare",
        irregolare: true,
        forme: {
            presente: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
            imperfetto: ["stavo", "stavi", "stava", "stavamo", "stavate", "stavano"],
            passatoRemoto: ["stetti", "stesti", "stette", "stemmo", "steste", "stettero"],
            futuro: ["starò", "starai", "starà", "staremo", "starete", "staranno"],
            condizionale: ["starei", "staresti", "starebbe", "staremmo", "stareste", "starebbero"],
            congPresente: ["stia", "stia", "stia", "stiamo", "stiate", "stiano"],
            congImperfetto: ["stessi", "stessi", "stesse", "stessimo", "steste", "stessero"],
            imperativo: ["sta'", "stai", "stia", "stiamo", "state", "stiano"],
            participioPassato: ["stato", "stata", "stati", "state"],
            gerundio: "stando"
        }
    },

    dire: {
        infinito: "dire",
        irregolare: true,
        forme: {
            presente: ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
            imperfetto: ["dicevo", "dicevi", "diceva", "dicevamo", "dicevate", "dicevano"],
            passatoRemoto: ["dissi", "dicesti", "disse", "dicemmo", "diceste", "dissero"],
            futuro: ["dirò", "dirai", "dirà", "diremo", "direte", "diranno"],
            condizionale: ["direi", "diresti", "direbbe", "diremmo", "direste", "direbbero"],
            congPresente: ["dica", "dica", "dica", "diciamo", "diciate", "dicano"],
            congImperfetto: ["dicessi", "dicessi", "dicesse", "dicessimo", "diceste", "dicessero"],
            imperativo: ["di'", "dica", "diciamo", "dite", "dicano"],
            participioPassato: ["detto", "detta", "detti", "dette"],
            gerundio: "dicendo"
        }
    },

    venire: {
        infinito: "venire",
        irregolare: true,
        forme: {
            presente: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
            imperfetto: ["venivo", "venivi", "veniva", "venivamo", "venivate", "venivano"],
            passatoRemoto: ["venni", "venisti", "venne", "venimmo", "veniste", "vennero"],
            futuro: ["verrò", "verrai", "verrà", "verremo", "verrete", "verranno"],
            condizionale: ["verrei", "verresti", "verrebbe", "verremmo", "verreste", "verrebbero"],
            congPresente: ["venga", "venga", "venga", "veniamo", "veniate", "vengano"],
            congImperfetto: ["venissi", "venissi", "venisse", "venissimo", "veniste", "venissero"],
            imperativo: ["vieni", "venga", "veniamo", "venite", "vengano"],
            participioPassato: ["venuto", "venuta", "venuti", "venute"],
            gerundio: "venendo"
        }
    },

    vedere: {
        infinito: "vedere",
        irregolare: true,
        forme: {
            presente: ["vedo", "vedi", "vede", "vediamo", "vedete", "vedono"],
            imperfetto: ["vedevo", "vedevi", "vedeva", "vedevamo", "vedevate", "vedevano"],
            passatoRemoto: ["vidi", "vedesti", "vide", "vedemmo", "vedeste", "videro"],
            futuro: ["vedrò", "vedrai", "vedrà", "vedremo", "vedrete", "vedranno"],
            condizionale: ["vedrei", "vedresti", "vedrebbe", "vedremmo", "vedreste", "vedrebbero"],
            congPresente: ["veda", "veda", "veda", "vediamo", "vediate", "vedano"],
            congImperfetto: ["vedessi", "vedessi", "vedesse", "vedessimo", "vedeste", "vedessero"],
            imperativo: ["vedi", "veda", "vediamo", "vedete", "vedano"],
            participioPassato: ["visto", "vista", "visti", "viste", "veduto", "veduta", "veduti", "vedute"],
            gerundio: "vedendo"
        }
    },

    sapere: {
        infinito: "sapere",
        irregolare: true,
        forme: {
            presente: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
            imperfetto: ["sapevo", "sapevi", "sapeva", "sapevamo", "sapevate", "sapevano"],
            passatoRemoto: ["seppi", "sapesti", "seppe", "sapemmo", "sapeste", "seppero"],
            futuro: ["saprò", "saprai", "saprà", "sapremo", "saprete", "sapranno"],
            condizionale: ["saprei", "sapresti", "saprebbe", "sapremmo", "sapreste", "saprebbero"],
            congPresente: ["sappia", "sappia", "sappia", "sappiamo", "sappiate", "sappiano"],
            congImperfetto: ["sapessi", "sapessi", "sapesse", "sapessimo", "sapeste", "sapessero"],
            imperativo: ["sappi", "sappia", "sappiamo", "sappiate", "sappiano"],
            participioPassato: ["saputo", "saputa", "saputi", "sapute"],
            gerundio: "sapendo"
        }
    },

    potere: {
        infinito: "potere",
        modale: true,
        forme: {
            presente: ["posso", "puoi", "può", "possiamo", "potete", "possono"],
            imperfetto: ["potevo", "potevi", "poteva", "potevamo", "potevate", "potevano"],
            passatoRemoto: ["potei", "potesti", "poté", "potemmo", "poteste", "poterono"],
            futuro: ["potrò", "potrai", "potrà", "potremo", "potrete", "potranno"],
            condizionale: ["potrei", "potresti", "potrebbe", "potremmo", "potreste", "potrebbero"],
            congPresente: ["possa", "possa", "possa", "possiamo", "possiate", "possano"],
            congImperfetto: ["potessi", "potessi", "potesse", "potessimo", "poteste", "potessero"],
            participioPassato: ["potuto", "potuta", "potuti", "potute"],
            gerundio: "potendo"
        }
    },

    volere: {
        infinito: "volere",
        modale: true,
        forme: {
            presente: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
            imperfetto: ["volevo", "volevi", "voleva", "volevamo", "volevate", "volevano"],
            passatoRemoto: ["volli", "volesti", "volle", "volemmo", "voleste", "vollero"],
            futuro: ["vorrò", "vorrai", "vorrà", "vorremo", "vorrete", "vorranno"],
            condizionale: ["vorrei", "vorresti", "vorrebbe", "vorremmo", "vorreste", "vorrebbero"],
            congPresente: ["voglia", "voglia", "voglia", "vogliamo", "vogliate", "vogliano"],
            congImperfetto: ["volessi", "volessi", "volesse", "volessimo", "voleste", "volessero"],
            imperativo: ["vogli", "voglia", "vogliamo", "vogliate", "vogliano"],
            participioPassato: ["voluto", "voluta", "voluti", "volute"],
            gerundio: "volendo"
        }
    },

    dovere: {
        infinito: "dovere",
        modale: true,
        forme: {
            presente: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono", "debbono"],
            imperfetto: ["dovevo", "dovevi", "doveva", "dovevamo", "dovevate", "dovevano"],
            passatoRemoto: ["dovei", "dovesti", "dové", "dovemmo", "doveste", "doverono"],
            futuro: ["dovrò", "dovrai", "dovrà", "dovremo", "dovrete", "dovranno"],
            condizionale: ["dovrei", "dovresti", "dovrebbe", "dovremmo", "dovreste", "dovrebbero"],
            congPresente: ["debba", "debba", "debba", "dobbiamo", "dobbiate", "debbano"],
            congImperfetto: ["dovessi", "dovessi", "dovesse", "dovessimo", "doveste", "dovessero"],
            participioPassato: ["dovuto", "dovuta", "dovuti", "dovute"],
            gerundio: "dovendo"
        }
    },

    // AGGIUNGIAMO ALTRI VERBI COMUNI
    chiamare: {
        infinito: "chiamare",
        modello: "are",
        forme: {
            presente: ["chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano"],
            imperfetto: ["chiamavo", "chiamavi", "chiamava", "chiamavamo", "chiamavate", "chiamavano"],
            passatoRemoto: ["chiamai", "chiamasti", "chiamò", "chiamammo", "chiamaste", "chiamarono"],
            futuro: ["chiamerò", "chiamerai", "chiamerà", "chiameremo", "chiamerete", "chiameranno"],
            condizionale: ["chiamerei", "chiameresti", "chiamerebbe", "chiameremmo", "chiamereste", "chiamerebbero"],
            congPresente: ["chiami", "chiami", "chiami", "chiamiamo", "chiamiate", "chiamino"],
            congImperfetto: ["chiamassi", "chiamassi", "chiamasse", "chiamassimo", "chiamaste", "chiamassero"],
            imperativo: ["chiama", "chiami", "chiamiamo", "chiamate", "chiamino"],
            participioPassato: ["chiamato", "chiamata", "chiamati", "chiamate"],
            gerundio: "chiamando"
        }
    },

    giocare: {
        infinito: "giocare",
        modello: "are",
        forme: {
            presente: ["gioco", "giochi", "gioca", "giochiamo", "giocate", "giocano"],
            imperfetto: ["giocavo", "giocavi", "giocava", "giocavamo", "giocavate", "giocavano"],
            passatoRemoto: ["giocai", "giocasti", "giocò", "giocammo", "giocaste", "giocarono"],
            futuro: ["giocherò", "giocherai", "giocherà", "giocheremo", "giocherete", "giocheranno"],
            condizionale: ["giocherei", "giocheresti", "giocherebbe", "giocheremmo", "giochereste", "giocherebbero"],
            congPresente: ["giochi", "giochi", "giochi", "giochiamo", "giochiate", "giochino"],
            congImperfetto: ["giocassi", "giocassi", "giocasse", "giocassimo", "giocaste", "giocassero"],
            imperativo: ["gioca", "giochi", "giochiamo", "giocate", "giochino"],
            participioPassato: ["giocato", "giocata", "giocati", "giocate"],
            gerundio: "giocando"
        }
    },

    guardare: {
        infinito: "guardare",
        modello: "are",
        forme: {
            presente: ["guardo", "guardi", "guarda", "guardiamo", "guardate", "guardano"],
            imperfetto: ["guardavo", "guardavi", "guardava", "guardavamo", "guardavate", "guardavano"],
            passatoRemoto: ["guardai", "guardasti", "guardò", "guardammo", "guardaste", "guardarono"],
            futuro: ["guarderò", "guarderai", "guarderà", "guarderemo", "guarderete", "guarderanno"],
            condizionale: ["guarderei", "guarderesti", "guarderebbe", "guarderemmo", "guardereste", "guarderebbero"],
            congPresente: ["guardi", "guardi", "guardi", "guardiamo", "guardiate", "guardino"],
            congImperfetto: ["guardassi", "guardassi", "guardasse", "guardassimo", "guardaste", "guardassero"],
            imperativo: ["guarda", "guardi", "guardiamo", "guardate", "guardino"],
            participioPassato: ["guardato", "guardata", "guardati", "guardate"],
            gerundio: "guardando"
        }
    },

    pensare: {
        infinito: "pensare",
        modello: "are",
        forme: {
            presente: ["penso", "pensi", "pensa", "pensiamo", "pensate", "pensano"],
            imperfetto: ["pensavo", "pensavi", "pensava", "pensavamo", "pensavate", "pensavano"],
            passatoRemoto: ["pensai", "pensasti", "pensò", "pensammo", "pensaste", "pensarono"],
            futuro: ["penserò", "penserai", "penserà", "penseremo", "penserete", "penseranno"],
            condizionale: ["penserei", "penseresti", "penserebbe", "penseremmo", "pensereste", "penserebbero"],
            congPresente: ["pensi", "pensi", "pensi", "pensiamo", "pensiate", "pensino"],
            congImperfetto: ["pensassi", "pensassi", "pensasse", "pensassimo", "pensaste", "pensassero"],
            imperativo: ["pensa", "pensi", "pensiamo", "pensate", "pensino"],
            participioPassato: ["pensato", "pensata", "pensati", "pensate"],
            gerundio: "pensando"
        }
    },

    cantare: {
        infinito: "cantare",
        modello: "are",
        forme: {
            presente: ["canto", "canti", "canta", "cantiamo", "cantate", "cantano"],
            imperfetto: ["cantavo", "cantavi", "cantava", "cantavamo", "cantavate", "cantavano"],
            passatoRemoto: ["cantai", "cantasti", "cantò", "cantammo", "cantaste", "cantarono"],
            futuro: ["canterò", "canterai", "canterà", "canteremo", "canterete", "canteranno"],
            condizionale: ["canterei", "canteresti", "canterebbe", "canteremmo", "cantereste", "canterebbero"],
            congPresente: ["canti", "canti", "canti", "cantiamo", "cantiate", "cantino"],
            congImperfetto: ["cantassi", "cantassi", "cantasse", "cantassimo", "cantaste", "cantassero"],
            imperativo: ["canta", "canti", "cantiamo", "cantate", "cantino"],
            participioPassato: ["cantato", "cantata", "cantati", "cantate"],
            gerundio: "cantando"
        }
    },

    lavorare: {
        infinito: "lavorare",
        modello: "are",
        forme: {
            presente: ["lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"],
            imperfetto: ["lavoravo", "lavoravi", "lavorava", "lavoravamo", "lavoravate", "lavoravano"],
            passatoRemoto: ["lavorai", "lavorasti", "lavorò", "lavorammo", "lavoraste", "lavorarono"],
            futuro: ["lavorerò", "lavorerai", "lavorerà", "lavoreremo", "lavorerete", "lavoreranno"],
            condizionale: ["lavorerei", "lavoreresti", "lavorerebbe", "lavoreremmo", "lavorereste", "lavorerebbero"],
            congPresente: ["lavori", "lavori", "lavori", "lavoriamo", "lavoriate", "lavorino"],
            congImperfetto: ["lavorassi", "lavorassi", "lavorasse", "lavorassimo", "lavoraste", "lavorassero"],
            imperativo: ["lavora", "lavori", "lavoriamo", "lavorate", "lavorino"],
            participioPassato: ["lavorato", "lavorata", "lavorati", "lavorate"],
            gerundio: "lavorando"
        }
    },

    comprare: {
        infinito: "comprare",
        modello: "are",
        forme: {
            presente: ["compro", "compri", "compra", "compriamo", "comprate", "comprano"],
            imperfetto: ["compravo", "compravi", "comprava", "compravamo", "compravate", "compravano"],
            passatoRemoto: ["comprai", "comprasti", "comprò", "comprammo", "compraste", "comprarono"],
            futuro: ["comprerò", "comprerai", "comprerà", "compreremo", "comprerete", "compreranno"],
            condizionale: ["comprerei", "compreresti", "comprerebbe", "compreremmo", "comprereste", "comprerebbero"],
            congPresente: ["compri", "compri", "compri", "compriamo", "compriate", "comprino"],
            congImperfetto: ["comprassi", "comprassi", "comprasse", "comprassimo", "compraste", "comprassero"],
            imperativo: ["compra", "compri", "compriamo", "comprate", "comprino"],
            participioPassato: ["comprato", "comprata", "comprati", "comprate"],
            gerundio: "comprando"
        }
    },

    abitare: {
        infinito: "abitare",
        modello: "are",
        forme: {
            presente: ["abito", "abiti", "abita", "abitiamo", "abitate", "abitano"],
            imperfetto: ["abitavo", "abitavi", "abitava", "abitavamo", "abitavate", "abitavano"],
            passatoRemoto: ["abitai", "abitasti", "abitò", "abitammo", "abitaste", "abitarono"],
            futuro: ["abiterò", "abiterai", "abiterà", "abiteremo", "abiterete", "abiteranno"],
            condizionale: ["abiterei", "abiteresti", "abiterebbe", "abiteremmo", "abitereste", "abiterebbero"],
            congPresente: ["abiti", "abiti", "abiti", "abitiamo", "abitiate", "abitino"],
            congImperfetto: ["abitassi", "abitassi", "abitasse", "abitassimo", "abitaste", "abitassero"],
            imperativo: ["abita", "abiti", "abitiamo", "abitate", "abitino"],
            participioPassato: ["abitato", "abitata", "abitati", "abitate"],
            gerundio: "abitando"
        }
    },

    vivere: {
        infinito: "vivere",
        modello: "ere",
        forme: {
            presente: ["vivo", "vivi", "vive", "viviamo", "vivete", "vivono"],
            imperfetto: ["vivevo", "vivevi", "viveva", "vivevamo", "vivevate", "vivevano"],
            passatoRemoto: ["vissi", "vivesti", "visse", "vivemmo", "viveste", "vissero"],
            futuro: ["vivrò", "vivrai", "vivrà", "vivremo", "vivrete", "vivranno"],
            condizionale: ["vivrei", "vivresti", "vivrebbe", "vivremmo", "vivreste", "vivrebbero"],
            congPresente: ["viva", "viva", "viva", "viviamo", "viviate", "vivano"],
            congImperfetto: ["vivessi", "vivessi", "vivesse", "vivessimo", "viveste", "vivessero"],
            imperativo: ["vivi", "viva", "viviamo", "vivete", "vivano"],
            participioPassato: ["vissuto", "vissuta", "vissuti", "vissute"],
            gerundio: "vivendo"
        }
    },

    prendere: {
        infinito: "prendere",
        modello: "ere",
        forme: {
            presente: ["prendo", "prendi", "prende", "prendiamo", "prendete", "prendono"],
            imperfetto: ["prendevo", "prendevi", "prendeva", "prendevamo", "prendevate", "prendevano"],
            passatoRemoto: ["presi", "prendesti", "prese", "prendemmo", "prendeste", "presero"],
            futuro: ["prenderò", "prenderai", "prenderà", "prenderemo", "prenderete", "prenderanno"],
            condizionale: ["prenderei", "prenderesti", "prenderebbe", "prenderemmo", "prendereste", "prenderebbero"],
            congPresente: ["prenda", "prenda", "prenda", "prendiamo", "prendiate", "prendano"],
            congImperfetto: ["prendessi", "prendessi", "prendesse", "prendessimo", "prendeste", "prendessero"],
            imperativo: ["prendi", "prenda", "prendiamo", "prendete", "prendano"],
            participioPassato: ["preso", "presa", "presi", "prese"],
            gerundio: "prendendo"
        }
    },

    mettere: {
        infinito: "mettere",
        modello: "ere",
        forme: {
            presente: ["metto", "metti", "mette", "mettiamo", "mettete", "mettono"],
            imperfetto: ["mettevo", "mettevi", "metteva", "mettevamo", "mettevate", "mettevano"],
            passatoRemoto: ["misi", "mettesti", "mise", "mettemmo", "metteste", "misero"],
            futuro: ["metterò", "metterai", "metterà", "metteremo", "metterete", "metteranno"],
            condizionale: ["metterei", "metteresti", "metterebbe", "metteremmo", "mettereste", "metterebbero"],
            congPresente: ["metta", "metta", "metta", "mettiamo", "mettiate", "mettano"],
            congImperfetto: ["mettessi", "mettessi", "mettesse", "mettessimo", "metteste", "mettessero"],
            imperativo: ["metti", "metta", "mettiamo", "mettete", "mettano"],
            participioPassato: ["messo", "messa", "messi", "messe"],
            gerundio: "mettendo"
        }
    },

    partire: {
        infinito: "partire",
        modello: "ire",
        forme: {
            presente: ["parto", "parti", "parte", "partiamo", "partite", "partono"],
            imperfetto: ["partivo", "partivi", "partiva", "partivamo", "partivate", "partivano"],
            passatoRemoto: ["partii", "partisti", "partì", "partimmo", "partiste", "partirono"],
            futuro: ["partirò", "partirai", "partirà", "partiremo", "partirete", "partiranno"],
            condizionale: ["partirei", "partiresti", "partirebbe", "partiremmo", "partireste", "partirebbero"],
            congPresente: ["parta", "parta", "parta", "partiamo", "partiate", "partano"],
            congImperfetto: ["partissi", "partissi", "partisse", "partissimo", "partiste", "partissero"],
            imperativo: ["parti", "parta", "partiamo", "partite", "partano"],
            participioPassato: ["partito", "partita", "partiti", "partite"],
            gerundio: "partendo"
        }
    },

    capire: {
        infinito: "capire",
        modello: "ire_isco",
        forme: {
            presente: ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"],
            imperfetto: ["capivo", "capivi", "capiva", "capivamo", "capivate", "capivano"],
            passatoRemoto: ["capii", "capisti", "capì", "capimmo", "capiste", "capirono"],
            futuro: ["capirò", "capirai", "capirà", "capiremo", "capirete", "capiranno"],
            condizionale: ["capirei", "capiresti", "capirebbe", "capiremmo", "capireste", "capirebbero"],
            congPresente: ["capisca", "capisca", "capisca", "capiamo", "capiate", "capiscano"],
            congImperfetto: ["capissi", "capissi", "capisse", "capissimo", "capiste", "capissero"],
            imperativo: ["capisci", "capisca", "capiamo", "capite", "capiscano"],
            participioPassato: ["capito", "capita", "capiti", "capite"],
            gerundio: "capendo"
        }
    },

    finire: {
        infinito: "finire",
        modello: "ire_isco",
        forme: {
            presente: ["finisco", "finisci", "finisce", "finiamo", "finite", "finiscono"],
            imperfetto: ["finivo", "finivi", "finiva", "finivamo", "finivate", "finivano"],
            passatoRemoto: ["finii", "finisti", "finì", "finimmo", "finiste", "finirono"],
            futuro: ["finirò", "finirai", "finirà", "finiremo", "finirete", "finiranno"],
            condizionale: ["finirei", "finiresti", "finirebbe", "finiremmo", "finireste", "finirebbero"],
            congPresente: ["finisca", "finisca", "finisca", "finiamo", "finiate", "finiscano"],
            congImperfetto: ["finissi", "finissi", "finisse", "finissimo", "finiste", "finissero"],
            imperativo: ["finisci", "finisca", "finiamo", "finite", "finiscano"],
            participioPassato: ["finito", "finita", "finiti", "finite"],
            gerundio: "finendo"
        }
    },

    uscire: {
        infinito: "uscire",
        irregolare: true,
        forme: {
            presente: ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
            imperfetto: ["uscivo", "uscivi", "usciva", "uscivamo", "uscivate", "uscivano"],
            passatoRemoto: ["uscii", "uscisti", "uscì", "uscimmo", "usciste", "uscirono"],
            futuro: ["uscirò", "uscirai", "uscirà", "usciremo", "uscirete", "usciranno"],
            condizionale: ["uscirei", "usciresti", "uscirebbe", "usciremmo", "uscireste", "uscirebbero"],
            congPresente: ["esca", "esca", "esca", "usciamo", "usciate", "escano"],
            congImperfetto: ["uscissi", "uscissi", "uscisse", "uscissimo", "usciste", "uscissero"],
            imperativo: ["esci", "esca", "usciamo", "uscite", "escano"],
            participioPassato: ["uscito", "uscita", "usciti", "uscite"],
            gerundio: "uscendo"
        }
    }
};

// Funzione helper per verificare se una parola è una forma verbale
function isFormaVerbale(parola) {
    const parolaLower = parola.toLowerCase();
    
    // Controlla in tutte le forme di tutti i verbi
    for (const verbo in dizionarioVerbi) {
        const forme = dizionarioVerbi[verbo].forme;
        for (const tempo in forme) {
            if (Array.isArray(forme[tempo])) {
                if (forme[tempo].includes(parolaLower)) {
                    return {
                        verbo: dizionarioVerbi[verbo].infinito,
                        tempo: tempo,
                        forma: parolaLower
                    };
                }
            } else if (forme[tempo] === parolaLower) {
                return {
                    verbo: dizionarioVerbi[verbo].infinito,
                    tempo: tempo,
                    forma: parolaLower
                };
            }
        }
    }
    
    // Controlla anche l'infinito stesso
    for (const verbo in dizionarioVerbi) {
        if (dizionarioVerbi[verbo].infinito === parolaLower) {
            return {
                verbo: dizionarioVerbi[verbo].infinito,
                tempo: "infinito",
                forma: parolaLower
            };
        }
    }
    
    return null;
}

// Export per l'uso nel file principale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { dizionarioVerbi, isFormaVerbale };
}
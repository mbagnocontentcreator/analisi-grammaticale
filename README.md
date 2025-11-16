# Analisi Grammaticale - Applicazione Web

## Descrizione
Applicazione web educativa per l'analisi grammaticale delle frasi in italiano, ottimizzata per l'uso su dispositivi mobili e desktop.

## Caratteristiche principali

### 1. Analisi grammaticale base
- Riconoscimento automatico delle parti del discorso
- Spiegazioni pedagogiche adatte a studenti di quinta elementare
- Dizionario morfologico integrato con oltre 1000 verbi italiani
- Disambiguazione contestuale delle parole ambigue

### 2. Analisi AI avanzata (opzionale)
- Integrazione con Claude AI di Anthropic
- Analisi logica completa (soggetto, predicato, complementi)
- Identificazione della tipologia di frase
- Suggerimenti per correggere errori grammaticali
- Curiosità e note didattiche

### 3. Ottimizzazione mobile
- Design responsive per smartphone e tablet
- Progressive Web App (PWA) installabile
- Touch-friendly con aree di interazione ottimizzate
- Supporto per orientamento portrait e landscape
- Viewport ottimizzato per tutti i dispositivi

## Installazione e uso

### Su PC/Desktop
1. Apri il file `analisi-grammaticale.html` in un browser moderno
2. L'applicazione funziona immediatamente offline per l'analisi base

### Su Smartphone/Tablet
1. Carica il file su un server web o usa un servizio di hosting gratuito
2. Accedi all'URL dal browser mobile
3. Opzionale: aggiungi alla schermata home per un'esperienza app-like

### Configurazione AI (opzionale)
Per abilitare l'analisi AI avanzata:

1. Registrati su [Anthropic Console](https://console.anthropic.com/)
2. Crea una nuova API key
3. Clicca sul pulsante "🔑 Configura API" nell'applicazione
4. Inserisci la tua API key (verrà salvata localmente nel browser)

## File del progetto

- `analisi-grammaticale.html` - File principale dell'applicazione
- `analizzatore-avanzato.js` - Motore di analisi grammaticale con disambiguazione contestuale
- `dizionario-verbi.js` - Database morfologico dei verbi italiani
- `manifest.json` - File manifest per PWA
- `test-analisi.html` - File di test (opzionale)

## Miglioramenti implementati

### Responsive Design
- Media queries per smartphone (≤480px), tablet (481-768px) e desktop (>768px)
- Ottimizzazione per landscape mode su dispositivi mobili
- Touch targets minimi di 44x44px per accessibilità
- Font e spaziature adattive

### Configurazione AI
- Sistema di gestione API key con localStorage
- Gestione errori dettagliata con messaggi utente-friendly
- Modello Claude Sonnet per prestazioni ottimali
- Fallback graceful quando l'AI non è disponibile

### User Experience
- Pulsanti più grandi e touch-friendly
- Scroll smooth e momentum scrolling su iOS
- Tap highlight rimosso per esperienza nativa
- Animazioni e transizioni fluide

## Requisiti tecnici

### Browser supportati
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Chrome Mobile/Safari Mobile

### Connessione
- Analisi base: funziona completamente offline
- Analisi AI: richiede connessione internet

## Note per sviluppatori

### Personalizzazione
- I colori del tema possono essere modificati nelle variabili CSS
- Il dizionario verbi può essere esteso nel file `dizionario-verbi.js`
- Le regole di disambiguazione sono in `analizzatore-avanzato.js`

### Sicurezza
- L'API key è salvata solo localmente nel browser dell'utente
- Nessun dato viene inviato a server esterni (eccetto per l'AI opzionale)
- L'applicazione non richiede cookie o tracking

## Supporto
Per problemi o suggerimenti, verificare:
1. Connessione internet (per funzionalità AI)
2. Browser aggiornato
3. JavaScript abilitato
4. API key valida (per funzionalità AI)
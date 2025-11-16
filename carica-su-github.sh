#!/bin/bash

echo "📦 Preparazione dei file per GitHub..."

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Prima versione dell'applicazione di analisi grammaticale"

# Rinomina il branch principale in 'main' (standard GitHub)
git branch -M main

echo ""
echo "⚠️ IMPORTANTE: Ora devi collegare il tuo repository GitHub!"
echo ""
echo "1. Hai già creato il repository su GitHub? (s/n)"
read risposta

if [ "$risposta" = "s" ] || [ "$risposta" = "S" ]; then
    echo ""
    echo "Perfetto! Ora inserisci il tuo nome utente GitHub:"
    read username
    
    echo ""
    echo "📤 Collegamento al repository GitHub..."
    
    # Aggiungi il remote
    git remote add origin "https://github.com/$username/analisi-grammaticale.git"
    
    echo "📤 Caricamento dei file su GitHub..."
    echo "(Ti verrà chiesta la password di GitHub o un token)"
    echo ""
    
    # Push dei file
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ File caricati con successo!"
        echo ""
        echo "🌐 Ora configura GitHub Pages:"
        echo "1. Vai su: https://github.com/$username/analisi-grammaticale/settings/pages"
        echo "2. In 'Source' seleziona: 'Deploy from a branch'"
        echo "3. In 'Branch' seleziona: 'main' e '/ (root)'"
        echo "4. Clicca 'Save'"
        echo ""
        echo "⏰ Attendi 2-3 minuti e il sito sarà disponibile su:"
        echo "   https://$username.github.io/analisi-grammaticale/analisi-grammaticale.html"
    else
        echo ""
        echo "❌ Errore nel caricamento. Possibili cause:"
        echo "• Nome utente errato"
        echo "• Repository non creato"
        echo "• Problemi di autenticazione"
        echo ""
        echo "Suggerimento: Crea un Personal Access Token su GitHub:"
        echo "https://github.com/settings/tokens"
    fi
else
    echo ""
    echo "📝 Prima crea il repository su GitHub:"
    echo "1. Vai su https://github.com"
    echo "2. Clicca sul '+' → 'New repository'"
    echo "3. Nome: analisi-grammaticale"
    echo "4. Pubblico, senza README"
    echo "5. Crea repository"
    echo ""
    echo "Poi rilancia questo script!"
fi
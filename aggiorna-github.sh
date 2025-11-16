#!/bin/bash

echo "📤 Aggiornamento dei file su GitHub..."
echo ""

# Assicurati che index.html sia aggiornato
cp analisi-grammaticale.html index.html

# Aggiungi le modifiche
git add .

# Chiedi il messaggio di commit
echo "Descrivi brevemente le modifiche (es: 'Aggiunta API key'):"
read messaggio

if [ -z "$messaggio" ]; then
    messaggio="Aggiornamento applicazione"
fi

# Crea il commit
git commit -m "$messaggio"

# Push su GitHub
echo ""
echo "📤 Caricamento su GitHub..."
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Aggiornamento completato con successo!"
    echo ""
    echo "🌐 Il sito si aggiornerà automaticamente in 1-2 minuti su:"
    echo "   https://mbagnocontentcreator.github.io/analisi-grammaticale/"
    echo ""
    echo "⚠️  IMPORTANTE: Ricordati di inserire la tua API key!"
    echo "   Cerca 'INSERISCI-QUI-LA-TUA-API-KEY' nel file e sostituiscilo"
else
    echo ""
    echo "❌ Errore nell'aggiornamento. Verifica la connessione e riprova."
fi
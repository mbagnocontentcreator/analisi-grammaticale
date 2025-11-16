#!/bin/bash
# Script per avviare un server locale per l'applicazione

echo "🚀 Avvio del server locale per Analisi Grammaticale..."
echo ""
echo "Il server sarà disponibile su: http://localhost:8000"
echo ""
echo "Per fermare il server, premi Ctrl+C"
echo ""

# Vai nella directory del progetto
cd "$(dirname "$0")"

# Avvia il server Python (disponibile su tutti i Mac)
python3 -m http.server 8000

# Se Python 3 non è disponibile, prova con Python 2
if [ $? -ne 0 ]; then
    echo "Provo con Python 2..."
    python -m SimpleHTTPServer 8000
fi
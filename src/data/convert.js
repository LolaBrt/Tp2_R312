import fs from 'fs';

// Lire le fichier CSV
const csvText = fs.readFileSync('olympians.csv', 'utf8');

// Couper en lignes
const lines = csvText.trim().split('\n');

// La 1re ligne = les noms de colonnes
const headers = lines[0].split(',');

// Transformer chaque ligne suivante en objet
const data = lines.slice(1).map(line => {
  const values = line.split(',');
  const obj = {};
  headers.forEach((header, i) => {
    obj[header] = values[i];
  });
  return obj;
});

// Écrire le résultat en JSON
fs.writeFileSync('olympians.json', JSON.stringify(data, null, 2));
console.log(data.length, 'lignes converties');
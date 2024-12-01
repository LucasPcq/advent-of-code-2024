import * as fs from "fs";

export const getLists = () => {
  // Lire le contenu du fichier
  const data = fs.readFileSync(__dirname + "/aoc-1-input.txt", "utf-8");

  // Séparer les lignes du fichier
  const lines = data.split("\n");

  // Initialiser les listes pour les deux colonnes
  const firstList: number[] = [];
  const secondList: number[] = [];

  // Parcourir chaque ligne du fichier
  lines.forEach((line) => {
    // Séparer les valeurs par des espaces
    const valeurs = line.split(/\s+/);
    if (valeurs.length === 2) {
      // Ajouter les valeurs aux listes correspondantes
      firstList.push(parseInt(valeurs[0], 10));
      secondList.push(parseInt(valeurs[1], 10));
    }
  });

  // Afficher les listes
  return { firstList, secondList };
};

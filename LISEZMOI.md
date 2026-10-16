# Mon portfolio, mode d'emploi

## 1. Ce que contient le dossier

```
portfolio/
├── index.html        <- TOUT le contenu du site (textes, projets...)
├── css/style.css     <- l'apparence (couleurs, tailles)
├── js/script.js      <- le menu sur téléphone (rien à modifier)
├── img/              <- tes images (photo, schémas, captures)
├── docs/             <- tes documents (mets ton CV ici : cv.pdf)
└── LISEZMOI.md       <- ce fichier
```

Pour modifier le contenu, tu n'as besoin que de **index.html**.

## 2. Voir le site sur ton ordinateur

Double-clique sur `index.html` : il s'ouvre dans ton navigateur.
Après chaque modification, enregistre le fichier (Ctrl + S) puis actualise la page du navigateur (F5).

**Éditeur conseillé :** [Visual Studio Code](https://code.visualstudio.com/) (gratuit).
Ouvre le dossier `portfolio` avec lui (Fichier > Ouvrir un dossier). Avec l'extension "Live Server", la page se met à jour toute seule quand tu enregistres.

## 3. Les 4 gestes à connaître

Dans `index.html`, tu cherches les repères `✏️` : ce sont les endroits à modifier.

**Changer un texte.** Modifie uniquement ce qui est entre les balises.
`<h3>Mon titre</h3>` : change "Mon titre", garde le reste.

**Ajouter un projet.** Dans la section "Projets scolaires", copie un bloc entier :
de `<article class="projet">` jusqu'à `</article>`. Colle-le en dessous et change les textes.

**Ajouter une compétence.** Copie une ligne `<li>Réseaux</li>` et change le mot.

**Ajouter une étape de parcours.** Copie un bloc `<li>` ... `</li>` dans la section Parcours.

> Astuce : si le site se casse après une modification, annule avec Ctrl + Z.
> Vérifie que tu n'as pas effacé un `<` ou un `>` par erreur.

## 4. Changer la photo

1. Mets ta photo carrée dans le dossier `img/` (par exemple `photo.jpg`).
2. Dans `index.html`, cherche `img/photo.svg` (il y en a 2) et remplace par `img/photo.jpg`.

## 5. Ajouter une image dans un projet

1. Mets l'image dans `img/` (par exemple `schema-reseau.png`). Évite les espaces dans les noms de fichiers.
2. Dans le projet, sous le texte, ajoute :
   `<img src="img/schema-reseau.png" alt="Schéma du réseau">`
   Le texte de `alt` décrit l'image (utile pour l'accessibilité).

## 6. Ajouter ton CV

Mets ton CV en PDF dans le dossier `docs/` avec le nom `cv.pdf`. Le bouton "Voir mon CV" fonctionnera.

## 6 bis. Chiffres, outils, certifications, contact

- **Chiffres** (section À propos) : change le nombre dans `<p class="chiffre">`.
- **Outils** : copie une ligne `<li class="outil">`. Pour un vrai logo, mets l'image dans `img/` et remplace `<span class="logo">Deb</span>` par `<img src="img/logo-debian.png" alt="">`.
- **Certification** : copie un bloc `<article class="certif">`. Badge vert : `badge ok`.
- **Formulaire** : mets ton adresse dans `data-mail="..."`. Le bouton Envoyer ouvre la messagerie du visiteur.

## 7. Changer les couleurs

Ouvre `css/style.css`. Tout en haut, dans le bloc `:root`, change les codes de couleur (`#2a1b14`, etc.).
Pour choisir une couleur : cherche "color picker" sur Internet et copie le code qui commence par #.

## 8. Mettre le site en ligne avec GitHub (sans ligne de commande)

1. Crée un compte sur [github.com](https://github.com).
2. Clique sur **New repository**. Nom du dépôt : `ton-pseudo.github.io` (remplace par ton vrai pseudo). Choisis **Public**.
3. Dans le dépôt, clique sur **Add file > Upload files**.
   Glisse-y **le contenu** du dossier (index.html, css, js, img, docs), pas le dossier lui-même. Clique sur **Commit changes**.
4. Va dans **Settings > Pages**. Sous "Branch", choisis `main` et `/ (root)`, puis **Save**.
5. Attends 1 à 2 minutes : ton site est à l'adresse `https://ton-pseudo.github.io`.

Pour modifier plus tard : ouvre le fichier sur GitHub, clique sur le crayon, modifie, puis **Commit changes**. Ou renvoie le fichier modifié avec **Upload files**.

## 9. Avant de publier, vérifie

- Aucune adresse postale, aucun numéro de téléphone personnel.
- Rien de confidentiel venant d'un stage (IP, noms de machines, mots de passe).
- Tous les `[crochets]` et les `20XX` sont remplacés.
- Les mentions "exemple à remplacer" sont supprimées.
- Les liens du bas (mail, LinkedIn, GitHub) sont à toi.
- Le site s'affiche bien sur ton téléphone.

# ROADMAP

## Liste des taches

- Ajouter la possibilité d'un provider pour partager un context entre les pages
- Supprimer la dep à la window pour `__INITIAL_DATA__`
  (passera surement par de l'import dynamique)
- Retirer les any et typer fortement
- Code splitting par défaut sur les routes (coté server et client)
- Mutualiser les props de `_App` coté client et server

- Importer comme middleware sans server (Objectif BWA)

---

## Ajouter la possibilité d'un provider pour partager un context entre les pages

- avoir un espace common qu'on combinerait avec les props de la page demandée
- Ou alors un fetch avec cache puisque qu'on ne tape que sur une route à la fois <--
- Il faudrait une fonction qui récupèrerait ces infos puis l'ensemble des props serait accessibles via un useConstext

---

## Supprimer la dep à la window pour `__INITIAL_DATA__`

Fais dans la MR sur [le dynamic import](https://github.com/Quentin1006/react-ssr/pull/1) (pas mergeable)

## Code splitting par défaut sur les routes (coté server et client)

Tentative via @loadable/component [dans la MR sur les dynamic import](https://github.com/Quentin1006/react-ssr/pull/1)

Tentative via renderToPipeableStream [dans la MR sur le streaming du résultat](https://github.com/Quentin1006/react-ssr/pull/2)

# P14_HRnet_02-2022

Openclassrooms - Parcours développeur Front-end

## Projet 14 : Faites passer une librairie jQuery vers React

### Scénario :

WealthHealth est une société qui utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne.

### Mission :

- Convertir l'ensemble du projet HRNet en React.
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React.
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

#### Conversion du projet HRNet

- Faire une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Ajouter un système de gestion d'état (la version actuelle utilise un stockage local).
- S'assurer que tout est cohérent au niveau du style. Pas d'obligation de refaire le design de l'application, mais possibilité de changer le style pour quelque chose de plus moderne.
- Tester le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires.

#### Conversion des plugins

Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis :

- Plugin de sélection de date
- Plugin de fenêtre modale - jQuery.modal.js
- Menus déroulants
- Plugin pour les tables de données

Lors de la conversion d'un plugin jQuery en un composant React, il faut garder à l'esprit de ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin. Par exemple, si un plugin jQuery inclut du code AJAX, pas besoin de le convertir.

#### Tests de performance

Mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) pour s'assurer que la conversion de l'application à React améliore effectivement les performances. Pour cela, faire des audits de performance Lighthouse. Pour comparer, faire un audit pour l'application jQuery HRnet actuelle, puis un autre une fois que l'application et le plugin jQuery choisi seront convertis en React.

C'est tout ! Une fois que l'application HRnet en React fonctionne, publier le composant React sur npm sous forme de package et partager le lien. Possibilité d'utiliser les paquets GitHub comme alternative.

## Installation :

### Prérequis

- [NodeJS](https://nodejs.org/en/) Version 14.16.0
- [npm](https://www.npmjs.com/) Version 6.14.11
- [Visual Studio Code](https://code.visualstudio.com/) ou un autre IDE de votre choix

### Dependencies

- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Version 6.2.1
- [Styled-components](https://styled-components.com/) Version 5.3.3
- ...

### Installation et exécution du projet

#### Frontend App

- Clonez ce référentiel sur votre ordinateur :
  git clone https://github.com/lallieau/P14_HRnet_02-2022.git

- Dans ce dépôt, installez les paquets/dépendances : npm

- Exécutez l'application frontale : npm start

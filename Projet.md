# Plateforme de Soumission de Sujets Académiques avec Détection de Doublons

**Porteur du projet** : Jules MUKADI 
**Date** : 10 Février 2025 
**Lien GitHub** : https://github.com/2MJ-DEV/uniq-topic

---

## 📌 Sommaire
1. [Objectifs](#objectifs)
2. [Fonctionnalités Clés](#fonctionnalites)
3. [Stack Technique](#technologie)
4. [Design d'Interface](#design)
5. [Installation](#installation)
6. [Roadmap](#roadmap)
7. [Contacts](#contacts)

---

## 🎯 Objectifs <a name="objectifs"></a>
- Centraliser les propositions de sujets académiques
- Eviter le plagiat sur ce que les autres ont déjà réaliser et être créatif
- Garantir l’originalité via une analyse automatisée
- Simplifier le processus de validation

---

## 🚀 Fonctionnalités Clés <a name="fonctionnalites"></a>
| Fonctionnalité               | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Soumission de sujets          | Formulaire interactif avec prévisualisation                                |
| Détection de similarité       | Comparaison TF-IDF + BERT (Jaccard) en temps réel                                     |
| Dashboard utilisateur         | Suivi des soumissions et statistiques personnalisées                        |
| Recherche avancée             | Filtres par domaine, date, et mots-clés                                    |
| Gestion des doublons          | Alerte visuelle et suggestions de reformulation                            |

---

## 💻 Stack Technique <a name="technologie"></a>
**Frontend**  
- Framework : Vite  
- UI : Tailwind CSS  
- Visualisation : D3.js  

**Backend**  
- Langage : Node.js/Express  
- Base de données : MongoDB + Elasticsearch  
- NLP : Python (FastAPI microservice)  à revoir

**DevOps**  
- Conteneurisation : (Docker)  
- Déploiement : AWS EC2  

---

## 🎨 Design d'Interface <a name="design"></a>
### Mockups clés
1. **Page d'accueil**  
   ![Homepage](https://via.placeholder.com/400x200?text=Homepage+Preview)  
   *Features : Barre de recherche, CTA principal, Statistiques globales*

2. **Formulaire intelligent**  
   ![Form](https://via.placeholder.com/400x200?text=Submission+Form)  
   *Indicateur d'originalité dynamique, suggestions de mots-clés*

3. **Résultats d'analyse**  
   ![Results](https://via.placeholder.com/400x200?text=Analysis+Results)  
   *Jauge de similarité, listes comparatives*

---

## ⚙️ Installation <a name="installation"></a>
```bash
# Cloner le dépôt
git clone https://git@github.com:2MJ-DEV/uniq-topic.git

# Installer les dépendances
cd uniq-topic && npm install
cd uniq-topic && npm install

# Démarrer (mode développement)
npm run dev
```
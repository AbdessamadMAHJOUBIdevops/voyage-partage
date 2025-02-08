# Voyage Partage - Carnet de Voyage Interactif

Une application web interactive permettant de créer et visualiser des carnets de voyage avec des points d'intérêt, photos et itinéraires.

## 🌟 Fonctionnalités

- 🗺️ Affichage de carte interactive avec React-Leaflet
- 📍 Marqueurs pour les points d'intérêt (musées, monuments, etc.)
- 🖼️ Popups interactives avec photos des lieux
- 🚶‍♂️ Tracés des itinéraires (piéton/voiture) entre les points
- 📅 Navigation entre les différents jours du voyage
- ⏱️ Calcul des temps de transport et durées de visite
- 🌍 Support pour plusieurs voyages
- 🔍 Recherche de lieux par géocodage

## 🛠️ Technologies Utilisées

- Next.js / React
- React-Leaflet pour la cartographie
- OSRM pour le calcul d'itinéraires
- Turf.js pour les calculs géospatiaux
- Mantine UI pour l'interface utilisateur
- TailwindCSS pour le styling
- Zustand pour la gestion d'état

## 🚀 Installation

### Méthode Classique

1. Cloner le repository :
   ```bash
   git clone https://github.com/AbdessamadMAHJOUBIdevops/voyage-partage.git
   cd voyage-partage
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

### 🐳 Avec Docker

1. Construire l'image :
   ```bash
   docker build -t voyage-partage .
   ```

2. Lancer le conteneur :
   ```bash
   docker run -p 3000:3000 voyage-partage
   ```

L'application sera accessible sur `http://localhost:3000`

## 📊 Structure des Données

Les voyages sont stockés avec la structure suivante :
```typescript
interface Voyage {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  days: {
    day: number;
    date: string;
    transport: 'foot' | 'driving';
    points: {
      id: number;
      name: string;
      position: [number, number]; // [latitude, longitude]
      arrival: string;
      departure: string;
      description: string;
      photos: string[];
    }[];
  }[];
}
```

## 🌐 APIs Utilisées

- OSRM pour le calcul d'itinéraires
- Nominatim pour le géocodage
- OpenStreetMap pour les tuiles de carte

## 📱 Fonctionnalités Principales

1. **Gestion des Voyages**
   - Création et sélection de voyages
   - Navigation entre les jours
   - Visualisation des points d'intérêt

2. **Cartographie**
   - Affichage des marqueurs et itinéraires
   - Calcul des distances et temps de trajet
   - Recherche de lieux

3. **Interface Utilisateur**
   - Design responsive
   - Thème clair/sombre
   - Popups interactives avec photos

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 License

MIT License

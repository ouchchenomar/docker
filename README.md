# ProjetNode.js

Application Node.js simple utilisant Express, Docker et Kubernetes.

## Description
Cette application expose deux endpoints :
- `/` : Affiche un message de bienvenue.
- `/health` : Endpoint de santé pour vérifier que l'application fonctionne.

## Prérequis
- Node.js >= 18
- npm
- Docker
- Kubernetes (minikube, kind, ou cluster réel)

## Installation et Lancement Local
```bash
cd app
npm install
npm start
```
L'application sera disponible sur : [http://localhost:8000](http://localhost:8000)

## Conteneurisation avec Docker
Construire l'image Docker :
```bash
docker build -t projetnodejs:latest ./app
```
Lancer le conteneur :
```bash
docker run -p 8000:8000 projetnodejs:latest
```

## Déploiement sur Kubernetes
1. Construisez l'image Docker et assurez-vous qu'elle est accessible par votre cluster (locale ou registry).
2. Appliquez les fichiers de déploiement :
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
3. Accédez à l'application via le NodePort : [http://localhost:30081](http://localhost:30081)

## Fichiers importants
- `app/index.js` : Code principal de l'application Express
- `app/Dockerfile` : Construction de l'image Docker
- `deployment.yaml` : Déploiement Kubernetes
- `service.yaml` : Service Kubernetes

## Endpoints
- `GET /` : Message de bienvenue
- `GET /health` : Statut de santé JSON

## Auteur
- Projet de virtualisation Node.js 
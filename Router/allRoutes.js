import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/habitat", "Visite des habitats", "/pages/habitat.html"),
  new Route("/habitats", "Les habitats", "/pages/habitats.html"),
  new Route("/tigre", "tigre", "/pages/animaux/félins/tigre.html"),
  new Route("/leopard", "leopard", "/pages/animaux/félins/leopard.html"),
  new Route("/lion", "lion", "/pages/animaux/félins/lion.html"),
  new Route("/gorille", "gorille", "/pages/animaux/singes/gorille.html"),
];

  //Le titre s'affiche comme ceci : Route.titre - websitename
  export const websiteName = "Quai Antique";
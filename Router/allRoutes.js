import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/habitat", "Visite des habitats", "/pages/habitat.html"),
  new Route("/habitats", "Les habitats", "/pages/habitats.html"),
  new Route("/tigre", "tigre", "/pages/animaux/félins/tigre.html"),
];

  //Le titre s'affiche comme ceci : Route.titre - websitename
  export const websiteName = "Quai Antique";
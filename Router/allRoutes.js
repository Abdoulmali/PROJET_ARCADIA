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
  new Route("/macaque", "macaque", "/pages/animaux/singes/macaque.html"),
  new Route("/orangOutan", "orangOutan", "/pages/animaux/singes/orangOutan.html"),

  new Route("/oursBrun", "oursBrun", "/pages/animaux/ours/brun.html"),
  new Route("/oursPolaire", "oursPolaire", "/pages/animaux/ours/polaire.html"),
  new Route("/oursNoir", "oursNoir", "/pages/animaux/ours/ours_noir.html"),

  new Route("/pandaRoux", "pandaRoux", "/pages/animaux/panda/pandaRoux.html"),
  new Route("/pandaGeant", "pandaGeant", "/pages/animaux/panda/pandaGeant.html"),
  new Route("/koala", "koala", "/pages/animaux/koala.html"),

  new Route("/restauration", "restauration", "/pages/restauration.html"),
  new Route("/contact", "contact", "/pages/contact.html"),

  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),


];

  //Le titre s'affiche comme ceci : Route.titre - websitename
  export const websiteName = "Quai Antique";
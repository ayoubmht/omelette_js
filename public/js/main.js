// Créer un objet personne 
let personne = {
    nom: 'Ayoub',
    lieu: 'maison',
    argent: 100,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(x){
        this.lieu = x;
        console.log(`${this.nom} se déplace vers ${this.lieu.nom}`);
    },
    payerArticle(ingredients){
            this.argent = this.argent - ingredients.prix
            console.log(`${this.nom} paye ses articles`);
    },
    couper(ingredients){
        ingredients.etat = "coupé"
        console.log(`${ingredients.nom} est maintenant ${ingredients.etat}`);
    }
}


// Créer un lieu maison 
let maison = {
    nom: 'maison',
    personnes: [],
}


// Créer un outil couteau
let outil = {
    nom: 'couteau',
    action: 'coupé',
}


// Créer des produits ingredite,s
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let oignon = new Ingredients('oignon', 'entier', 2.5);
let oeufs = new Ingredients('oeufs', 'entier', 4.5);
let epice = new Ingredients('epice', 'moulu', 3.75);
let fromage = new Ingredients('fromage', 'coupé', 2.5);


// Créer lieu épicerie 
let epicerie = {
    nom: 'épicerie',
    personnes: [],
    paniers: [ panier= {
        type: 'panier', 
        contenu: [],
    }],
    ingredients: [oignon, oeufs, epice, fromage],
}


// Créer une poele avec comme contenu un tableau
let poele = {
    contenue : [0],
    cuir() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('cuisson');  
            }
        }, 4000)
    }
}


//Créer un bol qui contient un tableau
let bol = {
    contenu: [],
    melanger(nomMelange){
        let newMelange = {
            nom: nomMelange,
            etat: 'pas cuit'
        }
        this.contenu = [newMelange];
    }
}
bol.melanger('omelette');
console.log(bol);

// DEBUT de l'omelette 

console.log(personne.nom + " est actuellement à la " + personne.lieu);

personne.seDeplacer(epicerie);
console.log(personne.nom + " va à l' " + epicerie.nom);

personne.mainDroite.push(epicerie.paniers[0]);
console.log(personne.mainDroite);

epicerie.paniers[panier.contenu.splice(0, 1)]
console.log(epicerie);

console.log(`${personne.nom} a pris un ${panier.type}`);

epicerie.ingredients.forEach(element => {
    personne.mainDroite[0].contenu.push(element);
    console.log(`${personne.nom} a pris quelques ${element.nom}`);
})
console.log(personne.mainDroite);

personne.mainDroite[0].contenu.forEach(element => {
    personne.payerArticle(element)
});

console.log(`Il reste ${personne.argent} euros a ${personne.nom}`);

personne.seDeplacer(maison);

personne.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element)
    personne.mainDroite[0].contenu = personne.mainDroite[0].contenu.filter(item => item !== element)
    console.log(`l'${element.nom} a été ajouter dans le bol`);
});

personne.mainDroite.splice(epicerie.paniers);

personne.seDeplacer(epicerie);

console.log(`${personne.nom} a remis le ${panier.type}`);

personne.seDeplacer(maison);

personne.couper(bol.contenu[1]);

bol.melanger('omelette');
console.log(bol.contenu);

console.log(`${bol.contenu} sont melangés`);

bol.contenu.push(poele);
console.log(poele);
console.log(bol);

poele.cuir();

let prete = {
    contenue : [0],
    cuir2() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('notre omelette est cuite');
            }
        }, 5000)
    }
}
prete.cuir2();
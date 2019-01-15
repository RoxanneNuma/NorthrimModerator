import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'northrim';
  niveauExplo;
  resultatObjet;
  resultatDecouverte;
  resultatAncetres;
  jaugeKarmique;
  gueriOuiNon;
  randomNumberObjet;
  randomNumberDecouverte;
  randomNumberAncetres;

  random() {
    return Math.floor(Math.random() * (101 - 0) + 0);
  }

  reset() {
    this.randomNumberObjet = this.random();
    this.randomNumberDecouverte = this.random();
    this.randomNumberAncetres = this.random();
    this.resultatAncetres = undefined;
    this.jaugeKarmique = 50;
    this.gueriOuiNon = false;
    this.resultatObjet = undefined;
    this.resultatDecouverte = undefined;
    this.niveauExplo = 0;
  }

  ngOnInit() {
    this.randomNumberObjet = this.random();
    this.randomNumberDecouverte = this.random();
    this.randomNumberAncetres = this.random();
  }

  /*MODERATION DE DECOUVERTE OBJET*/
  decouverteObjet() {
    console.log('ma bute', this.resultatObjet);
    switch (this.niveauExplo) {
      case 0: {
        if (this.randomNumberObjet <= 20) {
          this.resultatObjet = 'Trouve un objet pointu et s\'écorche le coussinet ou le museau, rien de bien grave';
        } else if (this.randomNumberObjet > 20 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 80 && this.randomNumberObjet <= 90) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant des Nims';
        }
        break;
      }
      case 1: {
        if (this.randomNumberObjet <= 15) {
          this.resultatObjet = 'Trouve un objet pointu et s\'écorche le coussinet ou le museau, rien de bien grave';
        } else if (this.randomNumberObjet > 15 && this.randomNumberObjet <= 40) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 40 && this.randomNumberObjet <= 65) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 65 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant des Nims';
        }
        break;
      }
      case 2: {
        if (this.randomNumberObjet <= 10) {
          this.resultatObjet = 'Trouve un objet pointu et s\'écorche le coussinet ou le museau, rien de bien grave';
        } else if (this.randomNumberObjet > 10 && this.randomNumberObjet <= 40) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 40 && this.randomNumberObjet <= 60) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 60 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 80 && this.randomNumberObjet <= 90) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de proies';
        }
        break;
      }
      case 3: {
        if (this.randomNumberObjet <= 30) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 30 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 70) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 70 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 80 && this.randomNumberObjet <= 90) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }
      case 4: {
        if (this.randomNumberObjet <= 10) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 10 && this.randomNumberObjet <= 30) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 30 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 70) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 70 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }
      case 5: {
        if (this.randomNumberObjet <= 5) {
          this.resultatObjet = 'Trouve un cadavre d\'animal, indigestion si consommé';
        } else if (this.randomNumberObjet > 5 && this.randomNumberObjet <= 35) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 35 && this.randomNumberObjet <= 55) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 55 && this.randomNumberObjet <= 70) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 70 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }

      case 6: {
        if (this.randomNumberObjet <= 30) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 30 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 70) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 70 && this.randomNumberObjet <= 80) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }

      case 7: {
        if (this.randomNumberObjet <= 30) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 30 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 65) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 65 && this.randomNumberObjet <= 75) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }

      case 8: {
        if (this.randomNumberObjet <= 30) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 30 && this.randomNumberObjet <= 45) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 45 && this.randomNumberObjet <= 60) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 60 && this.randomNumberObjet <= 70) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }

      case 9: {
        if (this.randomNumberObjet <= 25) {
          this.resultatObjet = 'Trouve une proie morte et encore fraîche / aliment humain comestible';
        } else if (this.randomNumberObjet > 25 && this.randomNumberObjet <= 50) {
          this.resultatObjet = 'Trouve une objet donnant des Nims';
        } else if (this.randomNumberObjet > 50 && this.randomNumberObjet <= 65) {
          this.resultatObjet = 'Trouve une objet donnant un bonus de proies';
        } else if (this.randomNumberObjet > 65 && this.randomNumberObjet <= 75) {
          this.resultatObjet = 'Trouve un objet attrait à la jauge karmique';
        } else {
          this.resultatObjet = 'Trouve un objet donnant un bonus de statistiques';
        }
        break;
      }
    }
  }

  /* MODERATION DE DECOUVERTE SPECIALE */
  decouverte() {
    switch (this.niveauExplo) {
      case 0: {
        this.resultatDecouverte = "Rencontre avec un PNJ";
      }
        break;

      case 1: {
        this.resultatDecouverte = "Rencontre avec un PNJ";
      }
        break;

      case 3: {
        this.resultatDecouverte = "Rencontre avec un PNJ";
      }
        break;

      case 4: {
        this.resultatDecouverte = "Rencontre avec un PNJ";
      }
        break;

      case 5: {
        if (this.randomNumberDecouverte <= 90) {
          this.resultatDecouverte = "Rencontre avec un PNJ";
        }
        else {
          this.resultatDecouverte = "Découverte de secret ou bâtiment";
        }
      }
        break;

      case 6: {
        if (this.randomNumberDecouverte <= 80) {
          this.resultatDecouverte = "Rencontre avec un PNJ";
        }
        else {
          this.resultatDecouverte = "Découverte de secret ou bâtiment";
        }
      }
        break;

      case 7: {
        if (this.randomNumberDecouverte <= 10) {
          this.resultatDecouverte = "Rencontre avec un PNJ";
        } else if (this.randomNumberDecouverte > 10 && this.randomNumberDecouverte <= 50) {
          this.resultatDecouverte = "Rencontre avec un PNJ rare";
        }
        else {
          this.resultatDecouverte = "Découverte de secret ou bâtiment";
        }
      }
        break;

      case 8: {
        if (this.randomNumberDecouverte <= 50) {
          this.resultatDecouverte = "Rencontre avec un PNJ rare";
        }
        else {
          this.resultatDecouverte = "Découverte de secret ou bâtiment";
        }
      }
        break;

      case 9: {
        if (this.randomNumberDecouverte <= 25) {
          this.resultatDecouverte = "Rencontre avec un PNJ rare";
        } else if (this.randomNumberDecouverte > 25 && this.randomNumberObjet <= 50) {
          this.resultatDecouverte = "Découverte de secret ou bâtiment";
        }
        else {
          this.resultatDecouverte = "Découverte de nouvelle terre";
        }
      }
        break;
    }
  }

  /*MODERATION INTERVENTION ANCETRES*/
  ancetres() {
    /*Boucle guérisseur*/
    console.log(this.gueriOuiNon);
    if (this.gueriOuiNon === true) {
      if (this.jaugeKarmique >= 70 || this.jaugeKarmique <= 30) {
        if (this.randomNumberAncetres <= 90) {
          this.resultatAncetres = "L'Esprit invoqué intervient";
        }
        else {
          this.resultatAncetres = "Un autre Esprit que celui invoqué intervient";
        }
      }

      else {
        if (this.randomNumberAncetres <= 50) {
          this.resultatAncetres = "L'Esprit invoqué intervient";
        }
        else if (this.randomNumberAncetres > 50 && this.randomNumberAncetres <= 75) {
          this.resultatAncetres = "Un autre Esprit que celui invoqué intervient";
        }
        else {
          this.resultatAncetres = "Aucun Esprit n'intervient";
        }
      }
    }

    /*Boucle non-guérisseur, this.gueriOuiNon = false*/
    else {
      if (this.jaugeKarmique >= 70 || this.jaugeKarmique <= 30) {
        if (this.randomNumberAncetres <= 50) {
          this.resultatAncetres = "L'Esprit invoqué intervient";
        }
        else if(this.randomNumberAncetres > 50 && this.randomNumberAncetres <= 60){
          this.resultatAncetres = "Un autre Esprit que celui invoqué intervient";
        }
        else {
          this.resultatAncetres = "Aucun Esprit n'intervient";
        }
      }

      else {
        if (this.randomNumberAncetres <= 20) {
          this.resultatAncetres = "L'Esprit invoqué intervient";
        }
        else if (this.randomNumberAncetres > 20 && this.randomNumberAncetres <= 35) {
          this.resultatAncetres = "Un autre Esprit que celui invoqué intervient";
        }
        else {
          this.resultatAncetres = "Aucun Esprit n'intervient";
        }
      }

    }




  }
}

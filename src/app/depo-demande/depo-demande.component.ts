import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-depo-demande',
  templateUrl: './depo-demande.component.html',
  styleUrls: ['./depo-demande.component.scss']
})
export class DepoDemandeComponent {
  ingenieurs:any=[]
  cadres:any=[]
  tech:any=[]
  moyens_huamains:any=[]
  moyens_materiel:any=[]
  travail_tech:any=[]
  prestation:any=[]
  sous_traitance:any=[]
  qualifications:any=[]
  qualifications_deja:any=[]
  dirigants:any=[]
  sec:any = {

  }

  ca_par_secteur:any=[
    {
      annee:2023,
      total_ca_ht:0,
      total_ca_ttc:0,
      secteurs:[
        {
          nom:"secteur1",
          total_par_secteur_ht:0,
          total_par_secteur_ttc:0
        }
      ]

    }
    ,
    {
      annee:2022,
      total_ca_ht:0,
      total_ca_ttc:0,
      secteurs:[
        {
          nom:"secteur1",
          total_par_secteur_ht:0,
          total_par_secteur_ttc:0
        }
      ]

    }
    ,
    {
      annee:2021,
      total_ca_ht:0,
      total_ca_ttc:0,
      secteurs:[
        {
          nom:"secteur1",
          total_par_secteur_ht:0,
          total_par_secteur_ttc:0
        }
      ]

    }
    ,
    {
      annee:2020,
      total_ca_ht:0,
      total_ca_ttc:0,
      secteurs:[
        {
          nom:"secteur1",
          total_par_secteur_ht:0,
          total_par_secteur_ttc:0
        }
      ]

    }
    ,
    {
      annee:2019,
      total_ca_ht:0,
      total_ca_ttc:0,
      secteurs:[
        {
          nom:"secteur1",
          total_par_secteur_ht:0,
          total_par_secteur_ttc:0
        }
      ]

    }
  ]

  object:any={}
  showADDingenieurs:boolean=false
  showADDcadrs:boolean=false
  showADDTech:boolean=false
  showADDmoyenH:boolean=false
  showADDmoyenM:boolean=false
  showADDTravail_tech: boolean=false
  showADDPrestation: boolean=false
  showADDsous_traitance: boolean=false
  showADDqualifications: boolean=false
  showADDqualifications_deja: boolean=false
  showADDdirigants: boolean=false

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  index!: number;

  selected(i:number){
    console.log(this.ingenieurs[i])
    this.object =  this.ingenieurs[i];
    this.index = i;
  }
  
  selected_cadr(i:number){
    console.log(this.cadres[i])
    this.object =  this.cadres[i];
    this.index = i;
  }
  
  selected_tech(i:number){
    console.log(this.tech[i])
    this.object =  this.tech[i];
    this.index = i;
  }
  selected_Moyen_humain(i:number){
    console.log(this.moyens_huamains[i])
    this.object =  this.moyens_huamains[i];
    this.index = i;
  }
  selected_moyens_materiel(i:number){
    console.log(this.moyens_materiel[i])
    this.object =  this.moyens_materiel[i];
    this.index = i;
  }
  selected_travail_techboolean(i:number){
    console.log(this.travail_tech[i])
    this.object =  this.travail_tech[i];
    this.index = i;
  }
  selected_showADDPrestation(i:number){
    console.log(this.prestation[i])
    this.object =  this.prestation[i];
    this.index = i;
  }
  selected_sous_traitance(i:number){
    console.log(this.sous_traitance[i])
    this.object =  this.sous_traitance[i];
    this.index = i;
  }
  selected_qualification(i:number){
    console.log(this.qualifications[i])
    this.object =  this.qualifications[i];
    this.index = i;
  }
  selected_qualifications_deja(i:number){
    console.log(this.qualifications_deja[i])
    this.object =  this.qualifications_deja[i];
    this.index = i;
  }
  selected_dirigants(i:number){
    console.log(this.dirigants[i])
    this.object =  this.dirigants[i];
    this.index = i;
  }

addIng(){
  this.ingenieurs.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDingenieurs = !this.showADDingenieurs;
}
addCadre(){
  this.cadres.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDcadrs = !this.showADDcadrs;
}

addTech(){
  this.tech.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDTech = !this.showADDTech;
}
assshowADDmoyenH(){
  this.moyens_huamains.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDmoyenH = !this.showADDmoyenH;
}
assshowADDmoyenM(){
  this.moyens_materiel.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDmoyenM = !this.showADDmoyenM;
}
addTravail_tech(){
  this.travail_tech.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDTravail_tech = !this.showADDTravail_tech;
}
addPrestation(){
  this.prestation.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDPrestation = !this.showADDPrestation;
}
addsous_traitance(){
  this.sous_traitance.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDsous_traitance = !this.showADDsous_traitance;
}
addqualifications(){
  this.qualifications.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDqualifications = !this.showADDqualifications;
}
addqualifications_deja(){
  this.qualifications_deja.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDqualifications_deja = !this.showADDqualifications_deja;
}
add_dirigants(){
  this.dirigants.push(JSON.parse(JSON.stringify(this.object)))
  this.object = {}
  this.showADDdirigants = !this.showADDdirigants;
}


constructor(private _formBuilder: FormBuilder) {}
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}

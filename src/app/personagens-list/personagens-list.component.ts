import { Component, OnInit, Inject } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Personagem, PersonagensService } from '../personagens.service';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-personagens-list',
  templateUrl: './personagens-list.component.html',
  styleUrls: ['./personagens-list.component.css']
})
export class PersonagensListComponent implements OnInit {
  personagens: Personagem[];
  personagensCount: number;

  // subscription: Subscription;
  // tableColumns = ['name', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];

  displayedColumns: string[] = ['name', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];
  // dataSource = ELEMENT_DATA;


  constructor(public personagensService: PersonagensService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.personagensService.getPersonagensList().subscribe(data => {
      this.personagens = data.results;
      this.personagensCount = data.count;
  })
  }

  // pageData(event: PageEvent) {
  //   this.subscription = this.charactersService.getCharactersList(event.pageIndex + 1).subscribe(data => {
  //     this.characters = data.results;
  //   });
  // }

  pageData(event: PageEvent) {
    this.personagensService.getPersonagensList(event.pageIndex + 1).subscribe(data => {
      this.personagens = data.results;
    });
  }

  // showDetails(personagem: Personagem) {
  //   this.personagensService.selectedPersonagem = personagem;
  //   this.router.navigate([`/personagem/details`]);
  // }

  // openDialog() {
  //   this.dialog.open(DialogData);
  // }

  showDetails(personagem: Personagem){
    this.personagensService.getPersonagensDetails(personagem.url).subscribe(data => {
      this.personagensService.selectedPersonagem = data;
      this.router.navigate(['/personagens/details']);
    })
    // this.dialog.open(DialogData);
  }

}

@Component({
  selector: "dialog-details",
  templateUrl: "dialog-details.html"
})
export class DialogData {
  personagemDetails: Personagem;

  constructor(public personagensService: PersonagensService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    // console.log(this.personagensService.selectedPersonagem)
    this.personagemDetails = this.personagensService.selectedPersonagem;
  }

}


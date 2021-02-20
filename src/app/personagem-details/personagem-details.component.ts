import { Personagem, PersonagensService } from './../personagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem-details',
  templateUrl: './personagem-details.component.html',
  styleUrls: ['./personagem-details.component.css']
})
export class PersonagemDetailsComponent implements OnInit {
  personagemDetails: Personagem;

  constructor(public personagensService: PersonagensService) { }

  ngOnInit() {
    this.personagemDetails = this.personagensService.selectedPersonagem;

  }

}

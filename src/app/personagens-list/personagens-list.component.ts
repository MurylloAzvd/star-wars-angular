import { Component, OnInit, Inject } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Personagem, PersonagensService } from '../personagens.service';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';


@Component({
  selector: 'app-personagens-list',
  templateUrl: './personagens-list.component.html',
  styleUrls: ['./personagens-list.component.css']
})
export class PersonagensListComponent implements OnInit {
  personagens: Personagem[];
  personagensCount: number;

  constructor(public personagensService: PersonagensService, private router: Router) {

  }

  ngOnInit() {
    this.personagensService.getPersonagensList().subscribe(data => {
      this.personagens = data.results;
      this.personagensCount = data.count;
  })
  }

  pageData(event: PageEvent) {
    this.personagensService.getPersonagensList(event.pageIndex + 1).subscribe(data => {
      this.personagens = data.results;
    });
  }


  showDetails(personagem: Personagem){
    this.personagensService.getPersonagensDetails(personagem.url).subscribe(data => {
      this.personagensService.selectedPersonagem = data;
      this.router.navigate(['/personagens/details']);
    })
  }

}




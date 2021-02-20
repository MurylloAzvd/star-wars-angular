import { Nave, NavesService } from './../naves.service';
import { Component, OnInit, Inject } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {
  naves: Nave[];
  navesCount: number;

  constructor(public navesService: NavesService, private router: Router) { }

  ngOnInit() {
    this.navesService.getNavesList().subscribe(data => {
      this.naves = data.results;
      this.navesCount = data.count;
    })
  }

  pageData(event: PageEvent) {
    this.navesService.getNavesList(event.pageIndex + 1).subscribe(data => {
      this.naves = data.results;
    })
  }

  showDetails(nave: Nave){
    this.navesService.getNavesDetails(nave.url).subscribe(data => {
      this.navesService.selectedNave = data;
      this.router.navigate(['/naves/details']);
    })
  }

}

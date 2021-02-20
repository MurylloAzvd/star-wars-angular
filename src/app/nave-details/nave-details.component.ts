import { Nave, NavesService } from './../naves.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave-details',
  templateUrl: './nave-details.component.html',
  styleUrls: ['./nave-details.component.css']
})
export class NaveDetailsComponent implements OnInit {
  naveDetails: Nave;

  constructor(public navesService: NavesService) { }

  ngOnInit() {
    this.naveDetails = this.navesService.selectedNave;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  viewHeader: boolean;
  @Input()
  set header(val: boolean) {
    this.viewHeader = val;
  }
  get header(): boolean {
    return this.viewHeader;
  }
  constructor(public equipoService: EquipoService) {
    this.viewHeader = true;
   }

  ngOnInit() {

  }

}

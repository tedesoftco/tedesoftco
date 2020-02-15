import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  viewHeaderTeam: boolean;
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit() {
    this.viewHeaderTeam = true;
  }

}

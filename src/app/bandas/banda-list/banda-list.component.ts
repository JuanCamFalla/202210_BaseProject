import { Component, OnInit } from '@angular/core';
import { BandaDetail } from '../banda-detail';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<BandaDetail> = [];
  selected: boolean = false;
  selectedBanda!: BandaDetail;
  miembrosPromedio: number = 0;

  constructor(private bandaService: BandaService) { }

  ngOnInit() {
    this.getBandas();
  }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.calcularPromedioMiembros(this.bandas);
    });
  }

  onSelected(banda: BandaDetail): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  calcularPromedioMiembros(bandas: Array<BandaDetail> ): void {
    let totalMiembros: number = 0;
    for (let i = 0; i < bandas.length; i++) {
      totalMiembros += bandas[i].numberOfMembers;
    }
    this.miembrosPromedio = Math.round(totalMiembros / bandas.length);
  }

}

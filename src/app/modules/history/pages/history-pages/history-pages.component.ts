import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@shared/services/track.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
  }

  receiveData(event: any): void {
    const { value } = event.target;
    this.listResults$ = this.trackService.searchTracks$(value)
  }

}

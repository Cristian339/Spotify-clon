import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { FavoriteService } from '@shared/services/favorite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-pages',
  templateUrl: './favorite-pages.component.html',
  styleUrls: ['./favorite-pages.component.css']
})
export class FavoritePagesComponent implements OnInit {

  listResults$: Observable<TrackModel[]> = new Observable()

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.listResults$ = this.favoriteService.favoriteTracks$
  }

}

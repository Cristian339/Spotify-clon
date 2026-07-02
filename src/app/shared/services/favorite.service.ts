import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favoriteTracks$: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([])

  constructor() { }

  isFavorite(track: TrackModel): boolean {
    return this.favoriteTracks$.getValue().some(t => t._id === track._id)
  }

  toggleFavorite(track: TrackModel): void {
    const currentFavorites = this.favoriteTracks$.getValue()
    const index = currentFavorites.findIndex(t => t._id === track._id)

    if (index >= 0) {
      currentFavorites.splice(index, 1)
    } else {
      currentFavorites.push(track)
    }

    this.favoriteTracks$.next([...currentFavorites])
  }
}

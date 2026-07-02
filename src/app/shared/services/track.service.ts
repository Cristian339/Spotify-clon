import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as dataRaw from '@data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracks$: Observable<TrackModel[]> = of([])

  constructor() {
    const { data }: any = (dataRaw as any).default
    this.dataTracks$ = of(data)
  }

  getAllTracks$(): Observable<any> {
    return this.dataTracks$
  }

  getAllRandom$(): Observable<any> {
    return this.dataTracks$.pipe(
      map((data: TrackModel[]) => {
        return data.reverse()
      })
    )
  }

  searchTracks$(term: string): Observable<any> {
    return this.dataTracks$.pipe(
      map((data: TrackModel[]) => {
        return data.filter(track => {
          return track.name.toLowerCase().includes(term.toLowerCase()) ||
            track.artist?.name.toLowerCase().includes(term.toLowerCase())
        })
      })
    )
  }
}

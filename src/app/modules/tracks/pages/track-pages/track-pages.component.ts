import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json'

@Component({
  selector: 'app-track-pages',
  templateUrl: './track-pages.component.html',
  styleUrls: ['./track-pages.component.css']
})
export class TrackPagesComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [
  ]
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTrackList = data;
  }

}

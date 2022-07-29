import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-pages',
  templateUrl: './track-pages.component.html',
  styleUrls: ['./track-pages.component.css']
})
export class TrackPagesComponent implements OnInit {
mockTrackList = [
{
  name: 'BEBE rexa'
},
{
  name: 'viking mox'
},
{
  name: 'Rez rexa'
},

]
  constructor() { }

  ngOnInit(): void {
  }

}

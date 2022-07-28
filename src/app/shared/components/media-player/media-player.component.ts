import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: any = {
cover: 'https://e-cdns-images.dzcdn.net/images/cover/3d7b540eb85c84a37cd5bf53740991cb-df1eb3ecc8da74a07ad6280c4971cca8-2ae8e9f1714cc6cc9393f7873008f45c-012b27906b430a37ec1d8f793d5c4fa6/264x264-000000-80-0-0.jpg',
album: 'Bruno Mars, Tones and I, Ed Shederan',
name: 'Remix music various artists'

}
  constructor() { }

  ngOnInit(): void {
  }

}

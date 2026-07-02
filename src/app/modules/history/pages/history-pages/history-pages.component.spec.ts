import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@shared/shared.module';
import { HistoryPagesComponent } from './history-pages.component';

describe('HistoryPagesComponent', () => {
  let component: HistoryPagesComponent;
  let fixture: ComponentFixture<HistoryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      declarations: [ HistoryPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

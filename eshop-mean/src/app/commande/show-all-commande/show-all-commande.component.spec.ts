import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCommandeComponent } from './show-all-commande.component';

describe('ShowAllCommandeComponent', () => {
  let component: ShowAllCommandeComponent;
  let fixture: ComponentFixture<ShowAllCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

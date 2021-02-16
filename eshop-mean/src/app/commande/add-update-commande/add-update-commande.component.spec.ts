import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCommandeComponent } from './add-update-commande.component';

describe('AddUpdateCommandeComponent', () => {
  let component: AddUpdateCommandeComponent;
  let fixture: ComponentFixture<AddUpdateCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

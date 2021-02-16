import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeserviceComponent } from './commandeservice.component';

describe('CommandeserviceComponent', () => {
  let component: CommandeserviceComponent;
  let fixture: ComponentFixture<CommandeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

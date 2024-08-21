import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAddDialogComponent } from './personal-add-dialog.component';

describe('PersonalAddDialogComponent', () => {
  let component: PersonalAddDialogComponent;
  let fixture: ComponentFixture<PersonalAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

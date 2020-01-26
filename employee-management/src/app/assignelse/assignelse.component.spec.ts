import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignelseComponent } from './assignelse.component';

describe('AssignelseComponent', () => {
  let component: AssignelseComponent;
  let fixture: ComponentFixture<AssignelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

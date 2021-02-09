import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JockeyComponent } from './jockey.component';

describe('JockeyComponent', () => {
  let component: JockeyComponent;
  let fixture: ComponentFixture<JockeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JockeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

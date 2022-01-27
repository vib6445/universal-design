import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalDesignComponent } from './universal-design.component';

describe('UniversalDesignComponent', () => {
  let component: UniversalDesignComponent;
  let fixture: ComponentFixture<UniversalDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

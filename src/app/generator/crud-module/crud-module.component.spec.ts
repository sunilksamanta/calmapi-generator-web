import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModuleComponent } from './crud-module.component';

describe('CrudModuleComponent', () => {
  let component: CrudModuleComponent;
  let fixture: ComponentFixture<CrudModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

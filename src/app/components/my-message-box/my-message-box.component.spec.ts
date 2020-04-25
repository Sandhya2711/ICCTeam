import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMessageBoxComponent } from './my-message-box.component';

describe('MyMessageBoxComponent', () => {
  let component: MyMessageBoxComponent;
  let fixture: ComponentFixture<MyMessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMessageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

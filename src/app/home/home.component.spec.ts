import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create Home component', () => {
      expect(component.title).toBeTruthy();
  });

  it(`should have as title 'CBS group'`, () => {
    expect(component.title).toEqual('CBS group');
});
});





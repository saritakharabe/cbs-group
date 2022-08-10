import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamMembersComponent } from './team-members.component';

describe('TeamMembersComponent', () => {

  let component: TeamMembersComponent;
  let fixture : ComponentFixture<TeamMembersComponent>;
  
  beforeEach( () => {
     TestBed.configureTestingModule({
       imports: [RouterTestingModule],
      declarations: [ TeamMembersComponent ]
    })
    fixture = TestBed.createComponent(TeamMembersComponent);
    component = fixture.componentInstance;
  });

  it('should create team Member component', () => {
    expect(component.title).toBeTruthy();
});

  it(`should create the title 'Our Team Members'`, () => {
    expect(component.title).toEqual('Our Team Members');
  });
});

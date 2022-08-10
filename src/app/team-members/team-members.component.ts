import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {

  title: string = "Our Team Members";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}

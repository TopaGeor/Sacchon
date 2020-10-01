import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}

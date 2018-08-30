import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CesiumService, MemberService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

}

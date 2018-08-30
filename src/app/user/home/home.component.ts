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
    //this.isLoading = true;
    this.memberService.getById('pres:dtoddleigh@abc').subscribe((res:any) => {
      console.log(res);
      //latitude: 46.54424, longitude: -87.38867
      this.memberService.addMemberWorld(res.terminalLocationList.terminalLocation[0])
    })
    
  }

}

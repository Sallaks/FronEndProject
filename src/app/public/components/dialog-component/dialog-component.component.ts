import {Component, ElementRef, Input, OnInit, ViewChild,} from '@angular/core';
import {ContactService} from "../../../core/services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  @ViewChild("open") openButton! : ElementRef<HTMLDivElement>

  constructor(private contactService : ContactService, private router: Router) { }

  @Input() id : number = 0;
  ngOnInit(): void {
    console.log(this.openButton);
  }

  openModal() {
    const openButton = this.openButton.nativeElement;
    openButton.click();
  }

  deleteContact(id: number, modal: HTMLDialogElement) {
    this.contactService.deleteContact(id).then(() => {
      this.router.navigate(["/contacts"]).then(() => modal.close())
    });
  }

}

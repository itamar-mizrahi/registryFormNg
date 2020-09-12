import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { previewModel } from "src/app/models/preview.model";
import { NgForm } from "@angular/forms";
import { DialogComponent } from '../../dialog/dialog.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Input() formIndex: number;
  @Output() formSubmitEvent = new EventEmitter<NgForm>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  sendForm(f: NgForm) {
    this.formSubmitEvent.emit(f);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

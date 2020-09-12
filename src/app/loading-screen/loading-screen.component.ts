import { Component, OnInit, DoCheck, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { PreviewService } from "../services/preview.service";
import { previewModel } from "../models/preview.model";

@Component({
  selector: "app-loading-screen",
  templateUrl: "./loading-screen.component.html",
  styleUrls: ["./loading-screen.component.css"]
})
export class LoadingScreenComponent implements OnInit, DoCheck {
  d = new Date();
  @ViewChild("f", { static: false }) form: NgForm;
  prevEmpty: previewModel = new previewModel();
  formsData: previewModel[] = [this.prevEmpty];
  preview: previewModel;
  constructor(private http: HttpClient, private previewData: PreviewService) {}

  ngOnInit() {
    this.previewData.currentData.subscribe(data => (this.preview = data));
    setInterval(() => {
      this.d = new Date();
    }, 1000);
    console.log(this.formsData);
  }
  ngDoCheck() {
    if (this.form) {
      let value = this.form.value;
      this.previewData.updatePreviewData(value);
    }
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.http
      .post("http://localhost:1234", form.value)
      .subscribe(responseData => {
        console.log(responseData);
      });
    form.reset();
  }
  newForm() {
    this.formsData.push(new previewModel());
  }
  removeForm(formIndex: number) {
    console.log(formIndex);
  }

  reciveForm($event) {
    console.log("got form : " + $event);
    let f: NgForm = $event;
    console.log(f.value.nameOfCourse);
  }
}

import { Component, OnInit } from "@angular/core";
import { PreviewService } from "../services/preview.service";
import { previewModel } from "../models/preview.model";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.css"]
})
export class PreviewComponent implements OnInit {
  d = new Date();
  valid: boolean = false;
  preview: previewModel;
  constructor(private previewData: PreviewService) {}

  ngOnInit() {
    this.previewData.currentData.subscribe(data => {
      this.preview = data;
    });
    console.log(this.preview);
    setInterval(() => {
      this.d = new Date();
    }, 1000);
  }
  validFunc() {
    if (this.valid == false) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}

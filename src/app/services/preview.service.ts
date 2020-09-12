import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { previewModel } from "../models/preview.model";
@Injectable({
  providedIn: "root"
})
export class PreviewService {
  private previewData = new BehaviorSubject<previewModel>({
    nameOfCourse: "default NameOfCourse",
    timeOfSign1: "default timeofsing1",
    managerName: "default sus",
    managerPhone: "05564654613",
    notes: "default notes"
  });

  currentData = this.previewData.asObservable();
  constructor() {}
  updatePreviewData(data: previewModel) {
    this.previewData.next(data);
  }
}

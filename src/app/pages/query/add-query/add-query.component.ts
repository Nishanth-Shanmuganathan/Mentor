import { QueryService } from './../../../services/query.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UIService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit {

  queryForm: FormGroup;
  domains = [
    'Computer Science',
    'Mechanical Engineering'

  ];
  constructor(
    private uiService: UIService,
    private queryService: QueryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.queryForm = this.formBuilder.group({
      query: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Validators.required],
      domain: ['Mechanical Engineering', Validators.required]
    });
  }

  closeModals() {
    this.uiService.closeModals();
  }

  sendQuery() {
    if (this.queryForm.invalid) { return; }
    const query = {
      query: this.queryForm.value.query,
      domain: this.queryForm.value.domain
    };
    this.queryService.addQueries(query).subscribe(res => {
      this.closeModals();
      this.uiService.errorMessage(res.message);
    }, err => {
      this.uiService.errorMessage(err.error.message);
    });
  }
}

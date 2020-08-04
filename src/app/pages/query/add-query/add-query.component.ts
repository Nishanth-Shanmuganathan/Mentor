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
      query: ['Marshall has forged a reputation, and now makes enough money to run a small team of reporters who have made an impact by sniffing out political scandal and conspiracy. \'I think in many cases the reporting we do is more honest, more straight than a lot of things you see even on the front pages of great papers like the New York Times and the Washington Post, \' he said in an interview last year. \'But I think both kinds of journalism should exist, should co- exist.', Validators.required],
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
      // console.log(err);
      this.uiService.errorMessage(err.error.message);
    });
  }
}

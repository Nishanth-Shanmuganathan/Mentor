import { UIService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Details } from './../../../services/interfaces';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

const domains = [
  'Computer Science',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
  'Automobile Engineering',
  'Aerospace Engineering',
];

@Component({
  selector: 'app-details-registration',
  templateUrl: './details-registration.component.html',
  styleUrls: ['./details-registration.component.css']
})
export class DetailsRegistrationComponent implements OnInit {
  domains = domains;
  firstFormGroup: FormGroup;
  mentorForm: FormGroup;
  startupForm: FormGroup;
  @ViewChild('firstForm') firstForm: NgForm;
  ctc: number;
  label: string;
  countries: string[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private uiService: UIService,
    private route: Router
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      profilePicture: [null],
      username: ['Nishanth Shanmuganathan', Validators.required],
      mobile: ['7639877734', Validators.required],
      role: ['Start-up', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.mentorForm = this.formBuilder.group({
      position: ['CEO', Validators.required],
      experience: [3, Validators.required],
      company: ['Google', Validators.required],
      ctc: [0],
      preference: ['both', Validators.required],
      domain: ['', Validators.required]

    });
    this.startupForm = this.formBuilder.group({
      company: ['Google', Validators.required],
      ctc: [0],
      domain: ['', Validators.required],
      employees: [1, Validators.required]
    });

    // this.authService.countriesList().then(res => {
    //   // this.countries = res.data;
    //   console.log(res);
    // });
  }

  formatLabel(value: number) {
    return value + 'L';
  }

  fetchPlaces(value) {
    if (!value) { return; }
    this.authService.countriesList(value).then(res => {
      this.countries = res;
    });
  }

  selectCountry(value) {
    const data = value.split(',').reverse() || value;
    this.firstFormGroup.controls.country.setValue(data[0].trim());

  }

  sendDetails() {
    if (this.firstFormGroup.invalid) {
      this.firstFormGroup.markAllAsTouched();
      return;
    }
    const validCity = this.countries.findIndex(ele => ele.toLowerCase().includes(this.firstFormGroup.value.city.toString().toLowerCase()));
    if (validCity < 0) {
      this.firstFormGroup.controls.city.setErrors({ invalid: true });
      return;
    }


    if (this.firstFormGroup.value.role === 'Mentor' && this.mentorForm.invalid) { return; }
    if (this.firstFormGroup.value.role === 'Start-up' && this.startupForm.invalid) { return; }


    let details: Details;
    if (this.firstFormGroup.value.role === 'Mentor') {
      details = {
        username: this.firstFormGroup.value.username,
        mobile: this.firstFormGroup.value.mobile,
        role: this.firstFormGroup.value.role,
        city: this.firstFormGroup.value.city,
        country: this.firstFormGroup.value.country,
        profilePic: this.firstFormGroup.value.profilePic,
        professional: {
          position: this.mentorForm.value.position,
          company: this.mentorForm.value.company,
          experience: this.mentorForm.value.experience,
          preference: this.mentorForm.value.preference,
          domain: this.mentorForm.value.domain,
          ctc: this.mentorForm.value.ctc,
        }
      };
    } else {
      details = {
        username: this.firstFormGroup.value.username,
        mobile: this.firstFormGroup.value.mobile,
        role: this.firstFormGroup.value.role,
        city: this.firstFormGroup.value.city,
        country: this.firstFormGroup.value.country,
        profilePic: this.firstFormGroup.value.profilePic,
        professional: {
          company: this.startupForm.value.company,
          domain: this.startupForm.value.domain,
          ctc: this.startupForm.value.ctc,
          employees: this.startupForm.value.employees,
        }
      };
    }
    this.authService.registerDetails(details).subscribe(res => {
      this.uiService.errorMessage(res.message);
      this.route.navigate(['']);
    }, err => {
      // console.log(err.message);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/* font awesome */
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ngflix-landing-strip',
  templateUrl: './landing-strip.component.html',
  styleUrls: ['./landing-strip.component.scss']
})
export class LandingStripComponent implements OnInit {

  public formGroup = new FormGroup({});

  /* font awesome */
  public faSearch = faSearch;

  constructor(
    private router: Router,
    private fb: FormBuilder) {
    //  
  }

  public ngOnInit(): void {

    this.formGroup = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

  public searchMovie(): void {
    this.router.navigate(['/results'], {
      state: {
        title: this.formGroup.get('title').value
      }
    });
  }
}

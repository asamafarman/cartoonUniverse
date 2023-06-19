import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control-lg"
      placeholder="Search....."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width:100%}'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: String) {
    if (value && value.length > 2) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}

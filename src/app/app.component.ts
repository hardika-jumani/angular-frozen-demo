import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cols: any[];
  scrollableCols: any[];
  frozenCols: any[];

  items: any[];

  ngOnInit() {
    this.cols = [
      { field: 'fixedCol1', header: 'Fixed-Col 1' },
      { field: 'fixedCol2', header: 'Fixed-Col 2' },
      { field: 'fixedCol3', header: 'Fixed-Col 3' },
      { field: 'scrollableCol1', header: 'Scrollable Col 1' },
      { field: 'scrollableCol2', header: 'Scrollable Col 2' },
      { field: 'scrollableCol3', header: 'Scrollable Col 3' }
    ];

    this.frozenCols = [
      { field: 'fixedCol1', header: 'Fixed-Col 1', frozen_col: true },
      { field: 'fixedCol2', header: 'Fixed-Col 2', frozen_col: true },
      { field: 'fixedCol3', header: 'Fixed-Col 3', frozen_col: true }
    ];
    this.scrollableCols = [
      { field: 'scrollableCol1', header: 'Scrollable Col 1' },
      { field: 'scrollableCol2', header: 'Scrollable Col 2' },
      { field: 'scrollableCol3', header: 'Scrollable Col 3' },
      { field: 'scrollableCol1', header: 'Scrollable Col 1' },
      { field: 'scrollableCol2', header: 'Scrollable Col 2' },
      { field: 'scrollableCol3', header: 'Scrollable Col 3' }
    ];
    //Items-array should contain a value for the table to be created, although it is not used
    this.items = [{ placeholder: "placeholder" }];

  }
}

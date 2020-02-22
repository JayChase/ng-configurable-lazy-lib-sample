import { Component, Inject, OnInit } from '@angular/core';
import { TestLibConfig } from './test-lib-config';
import { TEST_LIB_CONFIG } from './test-lib-config.token';

@Component({
  selector: 'lib-test-lib',
  template: `
    <h2>Configurable message: {{ message }}</h2>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {
  message: string;
  constructor(@Inject(TEST_LIB_CONFIG) private testLibConfig: TestLibConfig) {}

  ngOnInit() {
    this.message = this.testLibConfig.message;
  }
}

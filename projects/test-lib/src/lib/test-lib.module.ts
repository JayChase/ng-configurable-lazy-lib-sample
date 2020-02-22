import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestLibConfig } from './test-lib-config';
import { TEST_LIB_CONFIG } from './test-lib-config.token';
import { TestLibRoutingModule } from './test-lib-routing.module';
import { TestLibComponent } from './test-lib.component';

export function SettingFactory() {
  return TestLibModule.settings;
}

@NgModule({
  declarations: [TestLibComponent],
  imports: [CommonModule, TestLibRoutingModule],
  providers: [
    {
      provide: TEST_LIB_CONFIG,
      useFactory: SettingFactory
    }
  ]
})
export class TestLibModule {
  static settings: TestLibConfig;

  constructor() {}
}

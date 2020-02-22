import { InjectionToken } from '@angular/core';
import { TestLibConfig } from './test-lib-config';

export const TEST_LIB_CONFIG = new InjectionToken<TestLibConfig>(
  'TEST_LIB_CONFIG'
);

import { TestBed } from '@angular/core/testing';

import { VirtualKeyboarService } from './virtual-keyboar.service';

describe('VirtualKeyboarService', () => {
  let service: VirtualKeyboarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualKeyboarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

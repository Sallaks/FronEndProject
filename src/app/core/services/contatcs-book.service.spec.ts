import { TestBed } from '@angular/core/testing';

import { ContatcsBookService } from './contatcs-book.service';

describe('ContatcsBookService', () => {
  let service: ContatcsBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatcsBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

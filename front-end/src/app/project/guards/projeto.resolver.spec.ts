import { TestBed } from '@angular/core/testing';

import { ProjetoResolver } from './projeto.resolver';

describe('ProjetoResolver', () => {
  let resolver: ProjetoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProjetoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

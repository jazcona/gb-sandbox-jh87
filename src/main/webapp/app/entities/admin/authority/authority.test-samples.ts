import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '38620df0-7b33-4e5b-a4e6-687a264257ef',
};

export const sampleWithPartialData: IAuthority = {
  name: '2428172e-f975-477e-9754-8e9958ce4711',
};

export const sampleWithFullData: IAuthority = {
  name: '887e25a5-fecf-44c6-94d4-e14c743a6cac',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

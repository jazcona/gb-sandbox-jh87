import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 30483,
  label: 'oof enormously times',
};

export const sampleWithPartialData: ILabel = {
  id: 13678,
  label: 'bloop unabashedly hm',
};

export const sampleWithFullData: ILabel = {
  id: 29046,
  label: 'yippee over',
};

export const sampleWithNewData: NewLabel = {
  label: 'ew thoughtfully',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

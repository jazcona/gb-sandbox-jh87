import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 14868,
};

export const sampleWithPartialData: IProject = {
  id: 2186,
  name: 'bucket quarrelsomely utterly',
};

export const sampleWithFullData: IProject = {
  id: 6166,
  name: 'kindly though',
};

export const sampleWithNewData: NewProject = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

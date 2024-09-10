import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32146,
  login: 'A5MV',
};

export const sampleWithPartialData: IUser = {
  id: 10077,
  login: 'M@Zl9mn\\,POtWYW',
};

export const sampleWithFullData: IUser = {
  id: 16726,
  login: 'y@U\\q7kw-K\\oRbe',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

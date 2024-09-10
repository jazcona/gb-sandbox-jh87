import dayjs from 'dayjs/esm';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 8990,
  title: 'legislature exile',
};

export const sampleWithPartialData: ITicket = {
  id: 32629,
  title: 'unnaturally',
  done: false,
};

export const sampleWithFullData: ITicket = {
  id: 32369,
  title: 'hall orderly rely',
  description: 'parallel canine common',
  dueDate: dayjs('2024-09-10'),
  done: false,
};

export const sampleWithNewData: NewTicket = {
  title: 'lily including ozone',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

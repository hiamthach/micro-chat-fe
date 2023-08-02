import { DATE_TIME_FORMAT } from '@/config/constants/date.const';

import dayjs from 'dayjs';

const formatDate = (date: string) => {
  return dayjs(date).format(DATE_TIME_FORMAT);
};

const calPastTime = (date: string) => {
  const now = dayjs();
  const past = dayjs(date);
  const diff = now.diff(past, 'day');
  if (diff > 0) {
    return `${diff} days ago`;
  }
  return `${now.diff(past, 'hour')} hours ago`;
};

const dateHelper = {
  formatDate,
  calPastTime,
};

export default dateHelper;

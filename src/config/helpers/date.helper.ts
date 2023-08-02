import { DATE_TIME_FORMAT } from '@/config/constants/date.const';

import dayjs from 'dayjs';

const formatDate = (date: string) => {
  return dayjs(date).format(DATE_TIME_FORMAT);
};

// Calculate past time from now in minutes, hours, days, weeks, months, years
const calPastTime = (date: string) => {
  const now = dayjs();
  const past = dayjs(date);
  const diff = now.diff(past, 'minute');

  if (diff < 60) {
    return `${diff} minutes ago`;
  } else if (diff < 1440) {
    return `${now.diff(past, 'hour')} hours ago`;
  } else if (diff < 10080) {
    return `${now.diff(past, 'day')} days ago`;
  } else if (diff < 43800) {
    return `${now.diff(past, 'week')} weeks ago`;
  } else if (diff < 525600) {
    return `${now.diff(past, 'month')} months ago`;
  } else {
    return `${now.diff(past, 'year')} years ago`;
  }
};

const dateHelper = {
  formatDate,
  calPastTime,
};

export default dateHelper;

import { DateTime } from 'luxon';

function formatForIcs(text: string) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\r?\n/g, '\\n');
}

function formatDate(date: DateTime) {
  return date.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'");
}

interface formatDateTZProps {
  datetime: string;
  timezone: string;
}

export function formatDateTZ({ datetime, timezone }: formatDateTZProps) {
  return DateTime.fromISO(datetime, { zone: timezone }).toFormat(
    "LLLL dd, yyyy, HH.mm, 'timezone:' z"
  );
}

interface addToCalendarProps {
  id: string;
  datetime: string;
  timezone: string;
  title: string;
  venue: string;
  address: string;
  details: string | null;
}

export function addToCalendar({
  id,
  datetime,
  timezone,
  title,
  venue,
  address,
  details,
}: addToCalendarProps) {
  const dateStart = DateTime.fromISO(datetime, { zone: timezone });
  if (!dateStart.isValid) {
    throw new Error('Invalid event date or timezone');
  }
  const dateEnd = dateStart.plus({ hours: 2 });
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Invity//Event//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${id}@invity.app`,
    `DTSTAMP:${formatDate(DateTime.now())}`,
    `DTSTART:${formatDate(dateStart)}`,
    `DTEND:${formatDate(dateEnd)}`,
    `SUMMARY:${formatForIcs(title)}`,
    `LOCATION:${formatForIcs(`${venue}, ${address}`)}`,
    `DESCRIPTION:${formatForIcs(details ?? '')}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ];
  const ics = lines.join('\r\n');
  const blob = new Blob([ics], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'event.ics';
  link.click();
  URL.revokeObjectURL(url);
}

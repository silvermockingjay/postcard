import * as z from 'zod';
import { themes } from './themes';
import { timezones } from './timezones';

export const Invitation = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Host name is required')
    .regex(
      /^(?=.*\p{L})[\p{L} '-]+$/u,
      'Host name may only contain letters, spaces, hyphens and apostrophes'
    ),
  title: z
    .string()
    .trim()
    .min(1, 'Event title is required')
    .regex(/^(?=.*\p{L})/u, 'Event title must contain at least one letter')
    .regex(/^[\p{L}\d !]+$/u, 'No special characters allowed, apart of "!"'),
  datetime: z.iso
    .datetime({
      local: true,
      error: 'Enter a valid date and time',
    })
    .refine((value) => new Date(value) >= new Date(), {
      error: 'Date and time cannot be in past',
    }),
  timezone: z.enum(
    timezones.map((elem) => elem.value),
    { error: 'Timezone required' }
  ),
  venue: z
    .string()
    .trim()
    .min(1, 'Venue name is required')
    .regex(/^(?=.*\p{L}).+$/u, 'Venue name must contain at least one letter'),
  address: z
    .string()
    .trim()
    .min(5, 'Address is too short')
    .regex(
      /^(?=.*\p{L})(?=.*\d)[\p{L}\d\s.,'#/()-]+$/u,
      'Address must contain at least one letter and one number'
    ),
  details: z.string().optional(),
  theme: z.enum(
    themes.map((elem) => elem.value),
    { error: 'Theme required' }
  ),
});

export type Invitation = z.infer<typeof Invitation>;

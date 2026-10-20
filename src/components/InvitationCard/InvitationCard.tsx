import type { Invitation } from '@/utils/schema';
import { cardStyles } from '@/utils/themes';
import { clsx } from 'clsx';
import { Button } from '../Button';
import { addToCalendar, formatDateTZ } from '@/utils/addToCalendar';

interface ReceivedInvitation extends Omit<Invitation, 'details'> {
  id: string;
  details: string | null;
}

export default function InvitationCard({
  id,
  name,
  title,
  datetime,
  timezone,
  venue,
  address,
  theme,
  details,
}: ReceivedInvitation) {
  const formattedDate = formatDateTZ({
    datetime: datetime,
    timezone: timezone,
  });
  return (
    <div
      className={clsx(
        'flex flex-col justify-start items-center p-8 gap-8 border border-transparent rounded-lg text-base w-2/5 shadow-xl z-10',
        cardStyles[theme].bg,
        cardStyles[theme].colorSecondary,
        cardStyles[theme].fontText
      )}
    >
      <p>You&apos;re invited</p>
      <div
        className={clsx(
          'flex flex-col justify-start items-center gap-2 font-medium',
          cardStyles[theme].fontHeader
        )}
      >
        <h1 className={clsx('text-4xl', cardStyles[theme].color)}>{title}</h1>
        <p className="text-xl">Hosted by {name}</p>
      </div>
      <div className="flex flex-col justify-start items-center gap-2">
        <p className={cardStyles[theme].colorPrimary}>Details</p>
        <ul
          className={clsx(
            'list-disc',
            cardStyles[theme].marker,
            cardStyles[theme].color
          )}
        >
          <li>{formattedDate}</li>
          <li>{venue}</li>
          <li>{address}</li>
        </ul>
      </div>
      <div className="flex flex-row justify-center px-4">
        <p className="text-center">{details}</p>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <Button
          variant="primary"
          customClass={clsx(
            cardStyles[theme].btnBackground,
            cardStyles[theme].btnColor
          )}
          onClick={() =>
            addToCalendar({
              id,
              datetime,
              timezone,
              title,
              venue,
              address,
              details,
            })
          }
        >
          Add to your calendar
        </Button>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <p className="text-sm">Made with Invity</p>
      </div>
    </div>
  );
}

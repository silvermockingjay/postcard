import { Background, InvitationCard } from '@/components';
import { invitationBackgrounds } from '@/utils/backgrounds';
import { useLoaderData } from 'react-router';

export default function Invitation() {
  const cardData = useLoaderData();
  return (
    <div>
      <Background background={invitationBackgrounds[cardData.theme]} />
      <div className="flex flex-col justify-center items-center p-8 z-10">
        <InvitationCard {...cardData} />
      </div>
    </div>
  );
}

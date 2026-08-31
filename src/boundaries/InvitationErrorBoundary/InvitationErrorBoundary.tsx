import { Fallback } from '@/components';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';
import { Boxes, Compass, Link2Off } from 'lucide-react';

export default function InvitationErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  if (isRouteErrorResponse(error) && error.status === 400) {
    return (
      <Fallback
        icon={Link2Off}
        title="This link doesn't look right"
        message="Please, check if the invitation link is correct"
        btnTxt="Back home"
        onClick={() => navigate('/')}
      />
    );
  }
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Fallback
        icon={Compass}
        title="This invitation doesn't exist"
        message="It may have been deleted, or the link is out of date"
        btnTxt="Back home"
        onClick={() => navigate('/')}
      />
    );
  }
  if (error instanceof Error) {
    return (
      <Fallback
        icon={Boxes}
        title="This invitation didn't come together"
        message="The layout engine ran into a problem"
        btnTxt="Try again"
        onClick={() => navigate(0)}
      />
    );
  }
}

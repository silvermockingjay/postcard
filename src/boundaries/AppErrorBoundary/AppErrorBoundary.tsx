import { isRouteErrorResponse, useRouteError, useNavigate } from 'react-router';
import { Fallback } from '@/components';
import { Settings } from 'lucide-react';

export default function AppErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  if (isRouteErrorResponse(error)) {
    return (
      <Fallback
        icon={Settings}
        title="Something went wrong"
        message="The app hit an unexpected error. Reloading usually fixes it"
        btnTxt="Reload page"
        onClick={() => navigate('/')}
      />
    );
  }
}

import { Background, Button } from '@/components';
import { mainBackground } from '@/utils/backgrounds';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Background background={mainBackground} />
      <div className="flex flex-col justify-center items-center gap-8 mt-10 p-8 z-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-fraunces text-8xl p-4 text-center font-medium bg-gradient-to-r from-pink-400 to-amber-500 bg-clip-text text-transparent">
            Page not found
          </h1>
          <p className="font-sans text-lg text-zinc-400 text-center">
            The page you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>
        <Button variant="primary" onClick={() => navigate('/')}>
          <span>
            <ArrowLeft className="text-white" width={36} strokeWidth={1} />
          </span>
          Back to home
        </Button>
      </div>
    </div>
  );
}

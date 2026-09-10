import { Button, Input } from '@/components';
import { createPortal } from 'react-dom';
import { CircleCheck, SearchAlert } from 'lucide-react';
import { useNavigate } from 'react-router';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';

interface ModalProps {
  error?: string;
  success?: string;
  onClose: () => void;
}

export default function Modal({ error, success, onClose }: ModalProps) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const path = `invitation/${success}`;
  const handleCopy = async () => {
    await copyToClipboard(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  if (!success && !error) return null;
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-zinc-100/75">
      <div className="flex flex-col justify-start items-center gap-[20px] p-4 w-1/2 h-1/3 border border-solid border-zinc-200 rounded-md relative bg-zinc-50">
        {error && (
          <div className="flex flex-col justify-center items-center gap-[20px] w-full">
            <SearchAlert className="text-pink-400" size={36} strokeWidth={2} />
            <p className="font-sans text-base text-black">
              We couldn&apos;t create your invitation. Let&apos;s try again!
            </p>
            <p className="font-sans text-base text-zinc-400">{error}</p>
          </div>
        )}
        {success && (
          <div className="flex flex-col justify-center items-center gap-[20px] w-full">
            <CircleCheck
              className="text-emerald-400"
              size={36}
              strokeWidth={2}
            />
            <p className="font-sans text-base text-black">
              Congrats! Your invitation is ready!
            </p>
            <div className="flex flex-row w-full justify-center items-center gap-[20px]">
              <Input type="text" value={path} readOnly />
              <Button variant="primary" onClick={() => navigate(path)}>
                View
              </Button>
              <Button variant="secondary" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        )}
        <Button
          variant="warning"
          isIcon={true}
          customClass="absolute top-[5px] right-[5px] w-auto"
          onClick={onClose}
        >
          X
        </Button>
      </div>
    </div>,
    document.body
  );
}

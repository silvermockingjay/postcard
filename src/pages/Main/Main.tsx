import { Button, Input, Textarea, Modal, CustomRadioBtn } from '@/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Invitation } from '@/utils/schema';
import { themes } from '@/utils/themes';
import { createInvitation } from '@/services/APIrequests';
import { useState } from 'react';
import { MainBackground } from '@/components/backgrounds';
import { ArrowRight } from 'lucide-react';

export default function Main() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: zodResolver(Invitation),
    mode: 'onBlur',
  });
  const isTouched = Object.keys(touchedFields).length > 0;
  const onSubmit = async (data: Invitation) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await createInvitation(data);
      setSuccess(res.id);
    } catch (error) {
      console.error(error);
      setError(
        'Something went wrong while creating your invitation. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  const closeModal = () => {
    setError('');
    setSuccess('');
  };
  return (
    <main className="z-10">
      <MainBackground />
      <div className="flex flex-col justify-start items-center p-8 font-sans text-lg text-black gap-8">
        <h1 className="font-fraunces text-6xl text-center font-medium z-10">
          Good plans deserve <br /> good invitations
        </h1>
        <p className="text-zinc-400 text-center w-1/3 z-10">
          Fill in the details. Invity turns them into an invitation your guests
          will actually read - no design skills required.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-2/5 border border-solid border-zinc-200 rounded-xl p-8 bg-white shadow-xl z-10"
        >
          <Input
            id="title"
            labelText="Event name"
            placeholder="Birthday party"
            {...register('title')}
            error={errors.title?.message}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="name"
              labelText="Hosted by"
              placeholder="Anastasia"
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              id="datetime"
              type="datetime-local"
              labelText="Date and time"
              {...register('datetime')}
              error={errors.datetime?.message}
            />
            <Input
              id="venue"
              labelText="Venue"
              placeholder="Wine&Art Cafe"
              {...register('venue')}
              error={errors.venue?.message}
            />
            <Input
              id="address"
              labelText="Address"
              placeholder="Moscow, ul. Krasivaya, 28"
              {...register('address')}
              error={errors.address?.message}
            />
          </div>
          <Textarea
            id="details"
            labelText="Message to guests"
            placeholder="No gifts, please! Only smiles!"
            {...register('details')}
          />
          <CustomRadioBtn title="Invitation style" name="theme" info={themes} />
          <div className="flex flex-row justify-end items-center w-full">
            <Button
              variant="primary"
              type="submit"
              isDisabled={(isTouched && !isValid) || loading}
            >
              Generate invitation
              <span>
                <ArrowRight className="text-white" width={36} strokeWidth={1} />
              </span>
            </Button>
          </div>
        </form>
      </div>
      <Modal error={error} success={success} onClose={closeModal} />
    </main>
  );
}

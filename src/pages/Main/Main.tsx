import { Button, Input, Textarea, Select } from '@/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Invitation } from '@/utils/schema';
import { themes } from '@/utils/themes';

export default function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(Invitation),
    mode: 'onBlur',
  });
  function onSubmit(data: Invitation) {
    console.log(data);
  }
  return (
    <div className="flex flex-col justify-start items-center w-1/4 border border-solid border-zinc-200 rounded-md p-[12px]">
      <p className="font-sans text-lg text-black">Create your invitation!</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[8px] w-full"
      >
        <Input
          id="name"
          labelText="Host name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          id="title"
          labelText="Event title"
          {...register('title')}
          error={errors.title?.message}
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
          {...register('venue')}
          error={errors.venue?.message}
        />
        <Input
          id="address"
          labelText="Address"
          {...register('address')}
          error={errors.address?.message}
        />
        <Select
          id="theme"
          labelText="Choose invitation theme"
          placeholderText="--Please, choose an option--"
          options={themes}
          {...register('theme')}
          error={errors.theme?.message}
        />
        <Textarea
          id="details"
          labelText="Details (optional)"
          {...register('details')}
        />
        <Button variant="primary" type="submit" isDisabled={!isValid}>
          Submit
        </Button>
      </form>
    </div>
  );
}

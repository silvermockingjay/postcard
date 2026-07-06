import { Button, Input, Textarea } from '@/components';
import type React from 'react';

export default function Main() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col justify-start items-center w-1/4 border border-solid border-zinc-200 rounded-md p-[12px]">
      <p className="font-sans text-lg text-black">Create your invitation!</p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-[8px] w-full"
      >
        <Input id="host" labelText="Host name" />
        <Input id="purpose" labelText="Event title" />
        <Input id="datetime" type="datetime-local" labelText="Date and time" />
        <Input id="address" labelText="Address" />
        <Textarea id="details" labelText="Details (optional)" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

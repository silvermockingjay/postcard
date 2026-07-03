import type React from 'react';

interface InputErrors {
  id: string;
  message: string;
}

interface InputProps {
  id: string;
  type?: string;
  value?: string;
  labelText?: string;
  name?: string;
  placeholderText?: string;
  inputClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: InputErrors[];
}

export default function Input({
  id,
  type = 'text',
  value,
  labelText,
  name,
  placeholderText,
  inputClass,
  onChange,
  errors,
}: InputProps) {
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-[8px]">
      <label className="font-semibold" htmlFor={id}>
        {labelText}
      </label>
      <div className="flex flex-col items-start">
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholderText}
          className={`w-full p-[12px] border border-solid border-zinc-200 rounded-md cursor-text outline-none ${inputClass}`}
          value={value}
          onChange={onChange}
        />
        <div className="input-error">
          {errors?.map((error) => (
            <div key={error.id}>{error.message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TextareaProps {
  id: string;
  labelText?: string;
  textareaClass?: string;
}

export default function Textarea({
  id,
  labelText,
  textareaClass,
}: TextareaProps) {
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-[8px]">
      <label className="font-semibold" htmlFor={id}>
        {labelText}
      </label>
      <textarea
        id={id}
        className={`w-full p-[12px] border border-solid border-zinc-200 rounded-md cursor-text outline-none ${textareaClass}`}
      ></textarea>
    </div>
  );
}

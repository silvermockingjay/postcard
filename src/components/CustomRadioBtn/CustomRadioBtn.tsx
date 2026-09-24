interface Data {
  id: number;
  value: string;
}

interface CustomRadioBtnProps {
  title: string;
  name: string;
  info: Data[];
}

export default function CustomRadioBtn({
  title,
  name,
  info,
}: CustomRadioBtnProps) {
  return (
    <div className="flex flex-col w-full font-sans text-base text-black">
      <p className="font-semibold">{title}</p>
      <div className="flex flex-row justify-start items-center gap-4 py-4">
        {info.map((elem) => (
          <div key={elem.id}>
            <input
              type="radio"
              name={name}
              id={elem.value}
              className="peer sr-only"
              defaultChecked={elem.value === 'standard'}
            />
            <label
              htmlFor={elem.value}
              className="w-12 h-8 border border-transparent rounded-full bg-zinc-100 py-2 px-4 text-zinc-400 text-white capitalize hover:border-solid hover:border-zinc-300 peer-checked:bg-black peer-checked:text-white cursor-pointer transition-colors"
            >
              {elem.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

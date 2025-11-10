interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  className?: string;
}

export default function Checkbox({
  checked = false,
  onChange,
  label,
  className,
}: CheckboxProps) {
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={
          'mr-2 h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded ' +
          className
        }
        checked={checked}
        onChange={onValueChange}
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
}

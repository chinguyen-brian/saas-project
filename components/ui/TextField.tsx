import { HTMLInputTypeAttribute } from 'react';
interface TextFieldProps {
  onChange: (value: string) => void;
  value: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  label: string;
  placeholder?: string;
}

export default function TextField({
  label,
  onChange,
  type = 'text',
  value = '',
  className = '',
  placeholder = '',
}: TextFieldProps) {
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        className={
          'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900' +
          className
        }
        value={value}
        onChange={onValueChange}
        placeholder={placeholder}
      />
    </>
  );
}

type ButtonProps = {
  label: string;
  [key: string]: any;
}

export default function DailyButton({ label, ...restProps }: ButtonProps) {
  return (
    <button {...restProps} className="w-40 h-10 flex items-center justify-center bg-brand-second rounded-md p-4">
      <span className="text-white text-2xl">{label}</span>
    </button>
  )
}

export default function ColoredButton({ className, text }) {
  return (
    <button
      className={`focus:outline-none text-light focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
    >
      {text}
    </button>
  );
}
``
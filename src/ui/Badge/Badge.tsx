export function Badge({ label }: { label: string }) {
  return (
    <div className="text-sm uppercase font-medium bg-primary-3 inline-flex py-1 px-2 rounded-2xl text-white">
      {label}
    </div>
  );
}

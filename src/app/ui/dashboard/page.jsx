import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Dashboard</h1>
      </div>
      <div className="mt-4">
        <p>Welcome to your financial dashboard.</p>
        <p>Use the menu to navigate to different sections.</p>
      </div>
    </div>
  );
}

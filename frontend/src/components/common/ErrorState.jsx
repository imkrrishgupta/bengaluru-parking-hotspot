import { AlertCircle } from 'lucide-react';

export default function ErrorState({ message = 'Something went wrong' }) {
  return (
    <div className="bg-[#1a1a1a] border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
      <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
      <p className="text-sm text-red-400">{message}</p>
    </div>
  );
}

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function RefreshButton({ onRefresh }) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      if (onRefresh) await onRefresh();
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={refreshing}
      className="flex items-center gap-1.5 text-[13px] font-semibold rounded-md px-3 py-1.5 transition-colors disabled:opacity-50"
      style={{
        background: '#101010',
        color: '#f2f2f2',
        border: '1px solid #3d3a39',
      }}
    >
      <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
      {refreshing ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}

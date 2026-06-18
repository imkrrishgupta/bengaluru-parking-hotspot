export default function EmptyState({ message = 'No data available' }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-lg p-10 text-center">
      <p className="text-[14px]" style={{ color: '#8b949e' }}>
        {message}
      </p>
    </div>
  );
}

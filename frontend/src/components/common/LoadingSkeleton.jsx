export default function LoadingSkeleton({ height = 'h-32', rows }) {
  if (rows) {
    return (
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] animate-pulse rounded-lg h-10"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`bg-[#1a1a1a] animate-pulse rounded-lg ${height}`}
    />
  );
}

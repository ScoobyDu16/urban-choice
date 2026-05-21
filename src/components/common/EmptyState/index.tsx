interface EmptyStateProps {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  message = "No items found.",
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <p className="text-gray-500 text-lg mb-4">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="text-orange-500 hover:text-orange-600 font-medium transition-colors cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

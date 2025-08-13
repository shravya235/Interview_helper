// src/components/custom/loading-spinner.tsx
export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-24">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      <p className="text-lg font-medium text-gray-300">Generating your personalized plan...</p>
      <p className="text-sm text-gray-500">This may take a moment while we analyze the data.</p>
    </div>
  );
}
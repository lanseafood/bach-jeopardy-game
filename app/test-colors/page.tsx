export default function TestColors() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Color Test Page</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-sunset-green text-white rounded">
          <h2 className="text-xl font-semibold">sunset-green (#6B8765)</h2>
          <p>This should be a green color</p>
        </div>
        
        <div className="p-4 bg-sunset-orange text-white rounded">
          <h2 className="text-xl font-semibold">sunset-orange (#F8D1A3)</h2>
          <p>This should be an orange color</p>
        </div>
        
        <div className="p-4 bg-sunset-cream text-sunset-charcoal rounded border">
          <h2 className="text-xl font-semibold">sunset-cream (#FCEFD8)</h2>
          <p>This should be a cream color</p>
        </div>
        
        <div className="p-4 bg-sunset-yellow text-sunset-charcoal rounded">
          <h2 className="text-xl font-semibold">sunset-yellow (#FDB813)</h2>
          <p>This should be a yellow color</p>
        </div>
        
        <div className="p-4 bg-sunset-pink text-sunset-charcoal rounded">
          <h2 className="text-xl font-semibold">sunset-pink (#FFD1DC)</h2>
          <p>This should be a pink color</p>
        </div>
      </div>
    </div>
  )
} 
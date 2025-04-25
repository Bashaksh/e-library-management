export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="store-layout">
      <div className="store-header mb-4 border-b pb-2">
        <h2 className="text-lg font-medium">E-Library Store</h2>
      </div>
      {children}
    </div>
  )
}
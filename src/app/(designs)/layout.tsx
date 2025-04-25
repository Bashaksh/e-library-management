export default function DesignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="designs-layout">
      <div className="designs-header mb-4 border-b pb-2">
        <h2 className="text-lg font-medium">Library Design System</h2>
      </div>
      {children}
    </div>
  )
}
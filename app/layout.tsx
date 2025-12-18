export const metadata = {
  title: 'XpressDelivery',
  description: 'Logistics & Delivery Company in Saudi Arabia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

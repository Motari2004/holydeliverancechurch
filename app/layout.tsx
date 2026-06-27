import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Holy Deliverance Church',
  description: 'A place of worship, community, and spiritual growth in Ogembo.',
  keywords: 'church, worship, Ogembo, Holy Deliverance, Christian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
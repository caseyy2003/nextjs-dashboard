import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav'; // Import the navigation

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <div className="flex">
                    <SideNav /> {/* Ensure sidebar/nav is included */}
                    <main className="flex-grow">{children}</main>
                </div>
            </body>
        </html>
    );
}

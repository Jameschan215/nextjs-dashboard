import SideNav from '../ui/dashboard/sidenav';

// Enable Partial Pre-rendering, i.e. PPR
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<SideNav />
			</div>
			<div className="flex-grow p-6 md:overflow-y-scroll md:p-12">
				{children}
			</div>
		</div>
	);
}

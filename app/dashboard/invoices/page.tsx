import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Table from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page({
	searchParams,
}: {
	searchParams?: { query?: string; page?: string };
}) {
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = await fetchInvoicesPages(query);

	return (
		<div className="w-full">
			<div className="w-full flex items-center justify-between">
				<h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
			</div>

			<div className="mt-4 md:mt-8 flex items-center justify-between gap-2">
				<Search placeholder="Search invoices..." />
				<CreateInvoice />
			</div>

			<Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
				<Table query={query} currentPage={currentPage} />
			</Suspense>

			<div className="w-full mt-5 flex justify-center">
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	);
}

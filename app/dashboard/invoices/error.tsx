'use client';

import { useEffect } from 'react';

type TError = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: TError) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="h-full flex flex-col items-center justify-center">
			<h2 className="text-center">Something went wrong!</h2>
			<button
				onClick={() => reset()}
				className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
				Reset
			</button>
		</main>
	);
}

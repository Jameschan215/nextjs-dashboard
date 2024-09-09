import AcmeLogo from '../ui/acme-logo';
import LoginForm from '../ui/login-form';

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto w-full max-w-[400px] flex flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="h-20 md:h-36 w-full flex items-end bg-blue-500 rounded-lg p-3">
					<div className="text-white w-32 md:w-36">
						<AcmeLogo />
					</div>
				</div>
				<LoginForm />
			</div>
		</main>
	);
}

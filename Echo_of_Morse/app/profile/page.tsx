import PageShell from "@/components/layout/page-shell";
import { useI18n } from "@/lib/i18n";

export default function ProfilePage() {
	const { dictionary } = useI18n();

	return (
		<PageShell>
		<h1>dictionary.Profile</h1>
		<p>This is the profile page.</p>
		</PageShell>
	);
}
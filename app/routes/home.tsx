import { Button } from "components/ui/button/button";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "muzzle" },
		{ name: "description", content: "test" },
	];
}

export default function Home() {
	return (
		<Button>test button</Button>
	);
}

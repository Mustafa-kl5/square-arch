import Main from "./main";

export default function Home({ data }) {
	return data ? (
		<div className="position-relative">
			<Main />
		</div>
	) : (
		<h1> Loading</h1>
	);
}

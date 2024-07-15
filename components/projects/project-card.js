import { useRouter } from "next/router";

export default function ProjectCard({ data }) {
	const path = `/projects/${data.id}/${data.title.replace(/\s/g, "_")}`;
	const router = useRouter();
	function onSelect() {
		const carousel = document.getElementById("carousel");
		const item = document.getElementById("animation-section");
		if (carousel && item) {
			carousel.className = carousel?.className.replace(
				"animate__fadeIn",
				"animate__fadeOut"
			);
			item.className = item?.className.replace(
				"animate__fadeInRight ",
				"animate__fadeOutRight"
			);
		}

		setTimeout(() => {
			router.push(path, path, { shallow: true });
		}, 700);
	}
	const getRandomInt = () => {
		return Math.floor(Math.random() * 4);
	};
	return (
		<a className="link project-link " onClick={onSelect}>
			<div
				className={`project-box-card animate__animated animate__fadeIn animate__delay-${getRandomInt()}s`}
			>
				<div className="info-over-image">
					<div>{data.date}</div>
					<div className="fw-bold">{data.location}</div>
					<div className="fw-bold">{data.title}</div>
				</div>
				<div
					className="card-project-image"
					style={{ backgroundImage: `url(${data.main_image})` }}
				></div>
			</div>
		</a>
	);
}

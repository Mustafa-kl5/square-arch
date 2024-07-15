export default function ContactInformation(props) {
	const clickOnPhone = () => {
		window.open(`tel:${props.tel}`);
	};
	return (
		<div className="Wrap-box2">
			<div className="Spacing-content">
				ADDRESS
				<br />
				<span style={{ color: "rgb(181, 181, 181)" }}>
					{props.address}
				</span>
			</div>
			<div className="Spacing-content">
				EMAIL - GENERAL INQUIRIES
				<br />
				<a
					onClick={() => window.open(`mailto:${props.generalemail}`)}
					href={`mailto:${props.generalemail}`}
					className="social-link"
				>
					{props.generalemail}
				</a>
			</div>
			<div className="Spacing-content">
				EMAIL - JOB OPPORTUNITIES
				<br />
				<a
					onClick={() => window.open(`mailto:${props.marketinemail}`)}
					href={`mailto:${props.marketinemail}`}
					className="social-link"
				>
					{props.marketinemail}
				</a>
			</div>
			<div className="Spacing-content">
				TELEPHONE <br />
				<a
					href={`tel:${props.tel}`}
					onClick={clickOnPhone}
					className="social-link"
				>
					{props.tel}
				</a>
			</div>
		</div>
	);
}

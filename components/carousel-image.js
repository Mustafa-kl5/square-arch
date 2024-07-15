import Image from "next/image";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

export default function CarouselImg({ images }) {
	const swiperRef = useRef(null);
	const router = useRouter();
	useEffect(() => {
		swiperRef.current.swiper.slideTo(0);
	}, [router.asPath]);

	return (
		<>
			<div
				className="carousel-image animate__animated animate__fadeInRight "
				id="carousel-container"
			>
				<Swiper ref={swiperRef} className="mySwiper"  slidesPerView={"auto"} pagination={{clickable: true}} spaceBetween={6} initialSlide={0}>
					{images.map((item, index) => {
						return (
							<SwiperSlide
								key={index}
								className="image-box"
								style={{
									backgroundImage: `url(${item})`,
								}}
							></SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="swiper-arrows">
				<button
					id="prev-image"
					className=" button-prev animate__animated animate__fadeInRight"
					onClick={() => swiperRef.current.swiper.slidePrev()}
				>
					<Image
						className="arrow-image"
						width={10}
						height={10}
						loader={() => "/image/prev.png"}
						src="/image/prev.png"
						alt="prev"
					/>
				</button>
				<span
					id="middel"
					className=" middle-font animate__animated animate__fadeInRight"
				>
					IMAGES
				</span>
				<button
					id="next-image"
					className=" button-next animate__animated animate__fadeInRight"
					onClick={() => swiperRef.current.swiper.slideNext()}
				>
					<Image
						className="arrow-image"
						width={10}
						height={10}
						loader={() => "/image/next.png"}
						src="/image/next.png"
						alt="next"
					/>
				</button>
			</div>
		</>
	);
}

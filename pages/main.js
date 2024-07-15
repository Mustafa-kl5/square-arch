import MainStart from "../components/main-start";
import { getSquareData, getSquareTitle } from "../services/square.service";
import Head from "next/head";

function Main() {
    const { Main } = getSquareData();

    return (
        <>
            <Head>
                <title>{`Home Page | ${getSquareTitle()}`}</title>
                <meta
                    name="description"
                    content={`${Main[0]?.description_1} ${Main[0]?.description_2}`}
                />
                <meta name="keywords" content={Main[0]?.key_words} />
				<meta property="og:title" content={`Home Page | ${getSquareTitle()}`} />
  				<meta property="og:description"  content={`${Main[0]?.description_1} ${Main[0]?.description_2}`} />
            </Head>
            <div className="center  ">
                <MainStart data={Main[0]} />
            </div>
        </>
    );
}

export default Main;

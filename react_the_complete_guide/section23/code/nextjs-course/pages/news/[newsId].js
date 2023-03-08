import { useRouter } from "next/router";

// our-domain/news/{something-important}
// filename will be used as pathname

const DetailPage = () => {
    // certain data and methods
    const router = useRouter();

    // from what we chose in [] syntax
    const newsId = router.query.newsId;

    // send a request to the backend API
    // to fetch the news item with newsId
    // can build dynamic pages here

    return <h1>The DetailPage {newsId} </h1>
};

export default DetailPage;
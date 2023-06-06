// our-domain/news
// filename will be used as pathname

import { Link} from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
    return (
    <Fragment>
        <h1>The NewsPage</h1>
        <ul>
            <li><Link href="/news/20">NextJS is a Great Framework</Link></li>
            <li>Something Else</li>
        </ul>
    </Fragment>)
}
export default NewsPage;

//site-internal
// use <Link>
// get best of both worlds
// will stay in SPA mode with <Link>
// if visited externally, will hit traditional SSR
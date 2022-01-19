import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { links, ctas, logo } from "../../navigation";
import config from "../../config";
import useOpenGraphImage from "../../utils/use-open-graph-image";

const layouts = {
  "centered-column": ({ children }) => (
    <div
      className="content prose prose-xl prose-blue mx-auto px-6 my-5"
      children={children}
    />
  ),
  "two-column": ({ children }) => (
    <div
      // style={{ columnCount: 2, columnGap: "2rem" }}
      className={
        "two-column content prose prose-xl max-w-7xl prose-blue mx-auto px-6 my-5"
      }
      children={children}
    />
  ),
  default: (props) => (
    <div className={"no-page-outline max-w-7xl m-auto"} {...props} />
  ),
};

const Layout = ({ layout, children, frontmatter }) => {
  const layoutToDisplay = layouts[layout] || layouts.default;
  const { imageURL } = useOpenGraphImage(frontmatter.title);

  return (
    <div className="">
      <Head>
        <title>
          {config.title} | {frontmatter.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageURL} />
        <meta property="twitter:image" content={imageURL} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Navigation links={links} ctas={ctas} logo={logo} />
      <div className="">{layoutToDisplay({ children })}</div>
      <Footer />
    </div>
  );
};

export default Layout;

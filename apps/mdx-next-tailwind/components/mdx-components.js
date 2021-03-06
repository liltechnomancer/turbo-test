import Wrapper from "./Wrapper";
import Hero from "./Hero";

const components = {
  h1: (props) => <h1 className="font-black font-young-serif" {...props} />,
  h2: (props) => <h2 className="font-black font-display" {...props} />,
  h3: (props) => <h3 className="font-black font-display" {...props} />,
  p: (props) => <p className="" {...props} />,
  a: (props) => <a className="text-purple-600" {...props} />,
  em: (props) => <em>{props.children}</em>,
  del: (props) => <span>{props.children}</span>,
  strong: (props) => <strong>{props.children}</strong>,
  nav: (props) => <nav {...props} />,
  blockquote: (props) => (
    <blockquote
      className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-blue-500"
      {...props}
    >
      <span fontWeight="font-bold">{props.children}</span>
    </blockquote>
  ),
  Button: (props) => (
    <button className="text-base inline-flex m-0 items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <a {...props}>
        <span className="text-white">{props.children}</span>
      </a>
    </button>
  ),
  Box: (props) => (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6" {...props}></div>
    </div>
  ),
  Card: (props) => (
    <div className="bg-gray-50 overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6" {...props}></div>
    </div>
  ),
  Content: (props) => (
    <div className="content prose prose-xl max-w-7xl px-2" {...props} />
  ),
  Columns: ({ columnCount, ...props }) => (
    <div
      className={`lg:grid lg:grid-cols-${columnCount} lg:gap-6`}
      {...props}
    />
  ),
  Column: (props) => <div {...props} />,
  wrapper: Wrapper,
  Hero: Hero,
};

export default components;

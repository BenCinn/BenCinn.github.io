import Link from "next/link";

export default function Blog(props) {
      return (
        <Link href={`blog/${props.slug}`}>
          <a><div className="overflow-hidden max-w-sm rounded shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
        <img className="w-full" src={props.img} alt={props.text} />
        <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.text}</div>
        <p className="text-base text-gray-700">
          {props.desc}
        </p>
        </div>
        <div className="mx-6 mt-4 mb-2 text-base text-gray-700">
          <span>Posted: {props.date}</span>
        </div>
        <div className="px-6 pt-4 pb-3">
          {props.tags.map(tag => {
              return (
                <span key={tag} className="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
              )
          })}
          {props.latest == false ? '' : <span className="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-yellow-200 rounded-full">newest</span>}
        </div>
      </div></a>
          
        </Link>
        
    );
}

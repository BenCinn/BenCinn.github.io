export default function Blog(props) {
  if (props.latest == false){
      return (
        <div class="overflow-hidden max-w-sm rounded shadow-lg">
        <img class="w-full" src={props.img} alt={props.text} />
        <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold">{props.text}</div>
        <p class="text-base text-gray-700">
          {props.desc}
        </p>
        </div>
        <div className="px-6 pt-4 pb-2 text-base text-gray-700">
          Posted: {props.date}
        </div>
        <div class="px-6 pt-4 pb-2">
          {props.tags.map(tag => {
              return (
                <span class="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
              )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div class="overflow-hidden max-w-sm rounded shadow-lg">
      <img class="w-full" src={props.img} alt={props.text} />
      <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">{props.text}</div>
      <p class="text-base text-gray-700">
        {props.desc}
      </p>
      </div>
      <div className="px-6 pt-4 text-base text-gray-700">
        <span>Posted: {props.date}</span>
      </div>
      <div class="px-6 pt-4 pb-2">
        {props.tags.map(tag => {
            return (
              <span class="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
            )
        })}
        <span class="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-yellow-200 rounded-full">new</span>
      </div>
    </div>
  );
  }
  
}

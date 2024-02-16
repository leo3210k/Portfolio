export default function AnimatedText({ text, className=""}) {
  return (
    <h1>
      {
        text.split(" ").map((word, index) => 
          <span key={word+'-'+index} className="inline-block">
            {word}&nbsp;
          </span>
        )
      }
    </h1>
  )
}
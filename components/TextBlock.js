const TextBlock = ({ text, classes, title }) => {
  return (
    <div className="text-block-wrapper">
      <div className={`text-block ${classes} `}>
        <h3 className="title">{title}</h3>
        { text }
      </div>
    </div>
  )
}

export default TextBlock

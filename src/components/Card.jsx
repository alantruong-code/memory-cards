export default function Card(props) { 
  // determine which class to apply based on flip state
  let cardClass;
  if (props.isFaceUp) {
    cardClass = 'card flipped'
  } else {
    cardClass = 'card'
  }

  // show value if faced up, otherwise show question mark
  let cardContent;
  if (props.isFaceUp) {
    cardContent = props.value 
  } else {
    cardContent = '?'
  }

  // pass card id back up to parent when clicked
  function handleClick() {
   props.onClick(props.id)
  }

  return (
    <div className={cardClass} onClick={handleClick}>
      {/* display card content */} 
      {cardContent}
    </div>
  )
}
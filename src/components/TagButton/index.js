import './index.css'

const TagButton = props => {
  const {tagDetails, onClickTagBtn, isActive} = props
  const {displayText, optionId, isTabClicked} = tagDetails

  const onClickBtn = () => {
    onClickTagBtn(displayText)
  }

  const changeClassName = isActive ? 'eachBtnEle2' : 'eachBtnEle'

  return (
    <li>
      <button className={changeClassName} type="button" onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TagButton

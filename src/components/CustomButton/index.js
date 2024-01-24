const CustomButton = props => {
  const {btnData, onClickBtn} = props
  const {menuCategory, menuCategoryId} = btnData

  const onClickChange = () => {
    onClickBtn(menuCategoryId)
  }

  return (
    <button type="button" onClick={onClickChange}>
      {menuCategory}
    </button>
  )
}
export default CustomButton

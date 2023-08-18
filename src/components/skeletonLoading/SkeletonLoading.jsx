import "./SkeletonLoading.scss"
import PropTypes from "prop-types"
const SkeletonLoading = (props) => {
  return (
    <>
      <div className={`skeleton ${props.className}`}></div>
    </>
  )
}

SkeletonLoading.propTypes = {
  className: PropTypes.string,
}

export default SkeletonLoading

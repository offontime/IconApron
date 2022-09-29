import styles from './index.module.scss'

const IconApron = ({ name }) => {
  return (
    <>
      <span className={`${styles['icon-apron']} ${name}`}> </span>
    </>
  )
}

export default IconApron

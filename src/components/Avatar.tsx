import styles from './Avatar.module.css';

interface AvatarProps {
  source: string
  hasBorder?: boolean
}

export function Avatar({ source, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={source}
    />
  )
}
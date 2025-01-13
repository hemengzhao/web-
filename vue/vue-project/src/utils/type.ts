export interface ICustomizeContextmenu {
  text: string
  onClick?: () => void
  type?: 'separator'
  style?: string
  disabled?: boolean
}

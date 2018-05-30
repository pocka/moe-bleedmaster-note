import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

export interface Theme {
  sizes: {
    small: number
    medium: number
    large: number
    extraLarge: number
  }
  colors: {
    background: string
    foreground: string
    foregroundLight: string
    main: string
    accent: string
  }
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, injectGlobal, keyframes, ThemeProvider }
export type ThemedStyledProps<P> = styledComponents.ThemedOuterStyledProps<
  P,
  Theme
>
export default styled

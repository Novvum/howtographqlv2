import { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components'

export const mobile = <T>(body: FlattenInterpolation<ThemedStyledProps<any, T>>[]) => css`
  @media (max-width: 800px) {
    ${body};
  }
`

export const tablet = <T>(body: FlattenInterpolation<ThemedStyledProps<any, T>>[]) => css`
  @media (max-width: 1040px) {
    ${body};
  }
`

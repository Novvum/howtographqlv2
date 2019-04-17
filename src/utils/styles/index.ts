import { injectGlobal } from 'styled-components'
import { documentStyles } from './global'
import normalize from './normalize'

// [HACK]: please upgrade to styled-components@4, use createGlobalStyle

injectGlobal`
  ${normalize}
  ${documentStyles}
`

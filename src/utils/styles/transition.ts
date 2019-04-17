export const transition = (...props: string[]) => {
  if (props.length === 0) {
    return ``
  }

  return props.join(' 150ms ease,') + ` 150ms ease`
}

export default transition

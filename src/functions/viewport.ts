
export const calcViewPort = (newState): Function => {
    const x = window.matchMedia("(min-width: 624px)")
    newState(x.matches)

    const handleResize = () => newState(x.matches)
    x.addListener(handleResize)
    return () => x.removeListener(handleResize)
}
import { useRef, useState } from "react"

export function useAppearance() {
	const [isDark, setIsDark] = useState(false)
	const checkBoxAppearance = useRef()
	const root = document.documentElement

	function toggleAppearance(e) {
		if (e.target.checked) {
			setIsDark(true)
			root.id = "rootDarkMode"
			// checkBoxAppearance.current.checked = "true"
		} else {
			setIsDark(false)
			root.removeAttribute("id")
		}
	}

	return { isDark, toggleAppearance, checkBoxAppearance, root }
}

// Legacy version 😀
/* function makeDark() {
	setIsDark(true)

	root.setProperty('--mainColor', '#5573ed')
	root.setProperty('--black18', '#fff');;
	root.setProperty('--ff', '#363636')
	// foregrounds
	root.setProperty('--frBtnExpand', '#fff')
	root.setProperty('--frWelcomeMessage', '#f2f2f7')
	// backgrounds
	root.setProperty('--bgBtnExpand', '#343333')
	root.setProperty('--bg', '#181818')
	root.setProperty('--bgModal', '#242424')
	root.setProperty('--bgInputModal', '#262626')
	root.setProperty('--borderInputNewTaskDescription', '#333333')
	root.setProperty('--borderInputNewTaskTitle', '#333333')
	// this.root.setProperty('--bgTask', '#202020')
	root.setProperty('--bgTask', 'linear-gradient(180deg,#242424,#121212 65.62%)')
	root.setProperty('--bgFadeEffect', 'transparent')

	// borders
	root.setProperty('--borderTask', 'transparent')
	// shadows
	root.setProperty('--shadowFinder', 'transparent')
}

function makeLight() {
	setIsDark(false)

	root.setProperty('--mainColor', '#4263eb')
	root.setProperty('--black18', '#181818')
	root.setProperty('--ff', '#fff')
	// foregrounds
	root.setProperty('--frBtnExpand', '#181818')
	root.setProperty('--frWelcomeMessage', '#5d5a5a')
	// backgrounds
	root.setProperty('--bg', '#f2f2f7')
	root.setProperty('--bgBtnExpand', '#f2f2f7')
	root.setProperty('--bgModal', '#f2f2f7')
	root.setProperty('--bgInputModal', '#fff')
	root.setProperty('--borderInputNewTaskDescription', '#c9c9c9')
	root.setProperty('--borderInputNewTaskTitle', '#c9c9c9')
	root.setProperty('--bgTask', '#fff')
	root.setProperty('--bgFadeEffect', '#fff')
	// borders
	root.setProperty('--borderTask', '#c9c9c9')
	// shadows
	root.setProperty('--shadowFinder', '0px 20px 18px -18px rgba(21, 91, 166, 0.2)')
} */

import { useState } from "react"

export function useAppearance() {
	const root = document.documentElement.style
	const [isDark, setIsDark] = useState(false)

	function makeDark() {
		setIsDark(true)

		root.setProperty('--mainColor', '#5573ed')
		root.setProperty('--black18', '#fff');;
		root.setProperty('--ff', '#363636')
		// foregrounds
		root.setProperty('--fr-btn-expand', '#fff')
		root.setProperty('--fr-descriptions', '#f2f2f7')
		// backgrounds
		root.setProperty('--bg-btn-expand', '#343333')
		root.setProperty('--bg', '#181818')
		root.setProperty('--bg-modal', '#242424')
		root.setProperty('--bg-modal-input', '#262626')
		root.setProperty('--bg-modal-input-border', '#333333')
		root.setProperty('--bg-modal-inputTitle-border', '#333333')
		// this.root.setProperty('--bg-task', '#202020')
		root.setProperty('--bg-task', 'linear-gradient(180deg,#242424,#121212 65.62%)')
		root.setProperty('--bg-fadeEffect', 'transparent')

		root.setProperty('--bg-blur-navBar', 'rgba(27, 27, 27, 0.2)')
		// borders
		root.setProperty('--border-task', 'transparent')
		// shadows
		root.setProperty('--shadow-finder', 'transparent')
	}

	function makeLight() {
		setIsDark(false)

		root.setProperty('--mainColor', '#4263eb')
		root.setProperty('--black18', '#181818')
		root.setProperty('--ff', '#fff')
		// foregrounds
		root.setProperty('--fr-btn-expand', '#181818')
		root.setProperty('--fr-descriptions', '#5d5a5a')
		// backgrounds
		root.setProperty('--bg', '#f2f2f7')
		root.setProperty('--bg-btn-expand', '#f2f2f7')
		root.setProperty('--bg-modal', '#f2f2f7')
		root.setProperty('--bg-modal-input', '#fff')
		root.setProperty('--bg-modal-input-border', '#c9c9c9')
		root.setProperty('--bg-modal-inputTitle-border', '#c9c9c9')
		root.setProperty('--bg-task', '#fff')
		root.setProperty('--bg-fadeEffect', '#fff')
		root.setProperty('--bg-blur-navBar', 'rgba(255, 255, 255, 0.4)')
		// borders
		root.setProperty('--border-task', '#c9c9c9')
		// shadows
		root.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(21, 91, 166, 0.2)')
	}

	return { makeDark, makeLight, isDark }
}

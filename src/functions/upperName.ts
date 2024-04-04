/**
* pablo  oScaR   gonzaleZ CAMARENA --> Pablo Oscar Gonzalez Camarena
* @param {string} str Fix the user input name
*/
export function fixName(str: string) {
	const a = str.trim().toLowerCase().split(' ').filter(n => n !== '')
	return a.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
}

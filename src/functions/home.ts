
const numeroDia: number = new Date().getDate()
const diaSemana: string = new Date().toLocaleDateString("es-MX", { weekday: 'long' })
const diaSemanaPascal: string = diaSemana.slice(0, 1).toUpperCase() + diaSemana.slice(1).toLowerCase()

export const textoBienvenida: string = `Hoy es ${diaSemanaPascal} ${(numeroDia === 1) ? '1ro' : numeroDia}. ¿Algo nuevo?`

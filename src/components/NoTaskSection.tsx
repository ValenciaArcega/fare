import React from 'react'
import { IconNoTasks } from './icons/tasks'

export function NoTaskSection() {
  return <section className="no-task">
    <IconNoTasks />
    <h4>El baúl de ideas esta vacío.</h4>
  </section>
}
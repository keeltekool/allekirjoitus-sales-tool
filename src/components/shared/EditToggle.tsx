'use client'

import { useState } from 'react'
import { useBrand } from '@/lib/brand-context'

export function EditToggle() {
  const [editing, setEditing] = useState(false)
  const { locale } = useBrand()

  function toggle() {
    setEditing(!editing)
    document.body.classList.toggle('editing')
  }

  return (
    <button
      className={`edit-toggle ${editing ? 'edit-toggle--active' : ''}`}
      onClick={toggle}
    >
      {editing ? locale.editButton.active : locale.editButton.inactive}
    </button>
  )
}

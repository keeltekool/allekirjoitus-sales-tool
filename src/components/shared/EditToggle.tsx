'use client'

import { useBrand } from '@/lib/brand-context'

export function EditToggle({ editing, onToggle }: { editing: boolean; onToggle: () => void }) {
  const { locale } = useBrand()

  return (
    <button
      className={`edit-toggle ${editing ? 'edit-toggle--active' : ''}`}
      onClick={onToggle}
    >
      {editing ? locale.editButton.active : locale.editButton.inactive}
    </button>
  )
}

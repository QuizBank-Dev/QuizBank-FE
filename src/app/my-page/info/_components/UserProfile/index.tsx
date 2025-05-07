'use client'

import { useState } from 'react'
import Viewer from './Viewer'
import Editor from './Editor'

export default function UserProfile() {
    const [isEditMode, setIsEditMode] = useState(false)
    if (!isEditMode) {
        return <Viewer onEditMode={() => setIsEditMode(true)} />
    }

    return <Editor onCancelEditMode={() => setIsEditMode(false)} />
}

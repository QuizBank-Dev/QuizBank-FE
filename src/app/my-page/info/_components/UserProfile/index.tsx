'use client'

import { useState } from 'react'
import Viewer from './Viewer'
import Editor from './Editor'

export default function UserProfile() {
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <>
            <Viewer
                isEditMode={isEditMode}
                onEditMode={() => setIsEditMode(true)}
            />
            <Editor
                isEditMode={isEditMode}
                onCancelEditMode={() => setIsEditMode(false)}
            />
        </>
    )
}

'use client'

import Viewer from './Viewer'
import { useState } from 'react'
import Editor from '@/app/my-page/info/_components/UserProfile/Editor'

export default function UserProfile() {
    const [isEditMode, setIsEditMode] = useState(false)
    if (!isEditMode) {
        return <Viewer onEditMode={() => setIsEditMode(true)} />
    }

    return <Editor onCancelEditMode={() => setIsEditMode(false)} />
}

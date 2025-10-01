import { useState } from 'react'
import EnrollDialog from '../EnrollDialog'
import { Button } from '@/components/ui/button'

export default function EnrollDialogExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Enrollment Dialog</Button>
      <EnrollDialog open={open} onOpenChange={setOpen} selectedCourse="12-Month Support Plan" />
    </div>
  )
}

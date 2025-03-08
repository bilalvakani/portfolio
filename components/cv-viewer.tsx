"use client"

import { Button } from "@/components/ui/button"
import { XIcon, DownloadIcon } from "lucide-react"

interface CVViewerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVViewer({ isOpen, onClose }: CVViewerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-4xl h-[90vh] rounded-lg shadow-xl border border-border flex flex-col">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h3 className="text-xl font-bold">Muhammad Bilal Vakani - CV</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/cv.pdf" download="Muhammad_Bilal_Vakani_CV.pdf">
                <DownloadIcon className="h-4 w-4 mr-1" /> Download
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-0">
          <iframe
            src="/placeholder.svg?height=800&width=600"
            className="w-full h-full border-0"
            title="Muhammad Bilal Vakani CV"
          />
        </div>
      </div>
    </div>
  )
}


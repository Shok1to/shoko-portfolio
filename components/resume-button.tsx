"use client"

import { Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ResumeButtonProps {
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function ResumeButton({ className, size = "default", variant = "default" }: ResumeButtonProps) {
  const { toast } = useToast()

  const handleClick = () => {
    // You can track resume downloads here if needed
    toast({
      title: "Resume downloaded",
      description: "Thank you for your interest in my profile!",
    })
  }

  return (
    <Button size={size} variant={variant} className={`gap-2 ${className}`} asChild onClick={handleClick}>
      <Link href="/sample-resume.pdf" download>
        <Download className="h-4 w-4" />
        Download Resume
      </Link>
    </Button>
  )
}


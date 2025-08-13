'use client'

import { Download } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function PDFButton({ targetId, filename }: { targetId: string; filename: string }) {
  const exportPdf = async () => {
    const node = document.getElementById(targetId)
    if (!node) return
    const canvas = await html2canvas(node, { scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const ratio = canvas.width / canvas.height
    const pdfWidth = pageWidth
    const pdfHeight = pdfWidth / ratio

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(filename)
  }

  return (
    <button onClick={exportPdf} className="btn-ghost inline-flex items-center gap-2">
      <Download className="h-4 w-4" /> Export PDF
    </button>
  )
}
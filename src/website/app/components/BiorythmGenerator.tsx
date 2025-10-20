'use client'
// BiorythmGraph.tsx
import React, { useEffect, useRef, useState } from 'react'

// Define the biorythm cycle lengths (in days)
const CYCLE_LENGTHS = {
  physical: 23,
  emotional: 28,
  intellectual: 33,
}

const CYCLE_COLORS = {
  physical: '#FF6B6B',
  emotional: '#4ECDC4',
  intellectual: '#45B7D1',
}

// Define the biorythm types
type BiorythmType = 'physical' | 'emotional' | 'intellectual'

// Biorythm data interface
interface BiorythmData {
  date: Date
  physical: number
  emotional: number
  intellectual: number
}

// Component props
interface BiorythmGraphProps {
  birthDate: Date
  startDate: Date
  days: number
}

// Main component
const BiorythmGraph: React.FC<BiorythmGraphProps> = ({
  birthDate,
  startDate,
  days,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<BiorythmData[]>([])

  // Calculate biorythm values
  const calculateBiorythm = (
    birthDate: Date,
    startDate: Date,
    days: number
  ): BiorythmData[] => {
    const result: BiorythmData[] = []
    const shiftGraph = 3

    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(currentDate.getDate() + i - shiftGraph)

      // Calculate days since birth
      const timeDiff = currentDate.getTime() - birthDate.getTime()
      const daysSinceBirth = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

      // Calculate biorythm values
      const physical = Math.sin(
        (2 * Math.PI * daysSinceBirth) / CYCLE_LENGTHS.physical
      )
      const emotional = Math.sin(
        (2 * Math.PI * daysSinceBirth) / CYCLE_LENGTHS.emotional
      )
      const intellectual = Math.sin(
        (2 * Math.PI * daysSinceBirth) / CYCLE_LENGTHS.intellectual
      )

      result.push({
        date: currentDate,
        physical,
        emotional,
        intellectual,
      })
    }

    return result
  }

  // Draw the graph
  const drawGraph = (ctx: CanvasRenderingContext2D, data: BiorythmData[]) => {
    const canvas = ctx.canvas
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = '#e0e0e0'
    ctx.lineWidth = 1

    const maxHeight = 12

    // Horizontal lines
    for (let i = 0; i <= maxHeight; i++) {
      const y = (i * height) / maxHeight
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()

      // Draw labels
      ctx.fillStyle = '#666'
      ctx.font = '12px sans-serif'
      ctx.textAlign = 'right'
      ctx.fillText(((maxHeight / 2 - i) * 20).toString(), 30, y + 4)
    }

    // Vertical lines
    const dayStep = Math.ceil(data.length / 10)
    for (let i = 0; i < data.length; i += dayStep) {
      const x = (i / data.length) * width
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()

      // Draw date labels
      const date = data[i].date
      ctx.fillStyle = '#666'
      ctx.font = '10px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`${date.getMonth() + 1}/${date.getDate()}`, x, height - 10)
    }

    // Draw center line
    ctx.strokeStyle = '#999'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()

    // Draw biorythm curves
    const drawCurve = (
      data: BiorythmData[],
      color: string,
      type: BiorythmType
    ) => {
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 2

      data.forEach((point, index) => {
        const x = (index / (data.length - 1)) * width
        // Invert Y-axis to make positive values above center
        const y = height / 2 - (point[type] * height) / 2.4

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()
    }

    // Draw all three curves
    drawCurve(data, CYCLE_COLORS.physical, 'physical')
    drawCurve(data, CYCLE_COLORS.emotional, 'emotional')
    drawCurve(data, CYCLE_COLORS.intellectual, 'intellectual')
  }

  // Update data when props change
  useEffect(() => {
    const calculatedData = calculateBiorythm(birthDate, startDate, days)
    setData(calculatedData)
  }, [birthDate, startDate, days])

  // Draw graph when data changes
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        drawGraph(ctx, data)
      }
    }
  }, [data])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} width={800} height={400} className="p-5" />
    </div>
  )
}

// Main Biorythm Generator Component
const BiorythmGenerator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date>(new Date())
  const [startDate, setStartDate] = useState<Date>(new Date())
  const days = 30

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(new Date(e.target.value))
  }

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value))
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex justify-center">
        <div className="p-5">
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate.toISOString().split('T')[0]}
            onChange={handleBirthDateChange}
          />
        </div>

        <div className="p-5">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate.toISOString().split('T')[0]}
            onChange={handleStartDateChange}
          />
        </div>
      </div>

      <BiorythmGraph birthDate={birthDate} startDate={startDate} days={days} />

      <div className="flex justify-center">
        <div>
          <p>
            Biorythms are cyclical patterns that influence human behavior and
            performance. This visualization shows three primary biorythms:
          </p>
          <ul>
            <li>
              <strong>
                <span className="text-physical-color">Physical</span>:{' '}
              </strong>
              23-day cycle - affects strength, endurance, and physical
              coordination
            </li>
            <li>
              <strong>
                <span className="text-emotional-color">Emotional</span>:{' '}
              </strong>
              28-day cycle - affects mood, intuition, and emotional balance
            </li>
            <li>
              <strong>
                <span className="text-intellectual-color">Intellectual</span>:{' '}
              </strong>
              33-day cycle - affects mental clarity, analytical ability, and
              learning
            </li>
          </ul>
          <p>
            Values range from -100% (low) to 100% (high). The graph shows how
            these cycles interact over time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BiorythmGenerator

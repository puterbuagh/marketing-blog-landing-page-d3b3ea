import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerClient } from '@/lib/supabase/server'

const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120),
  email: z.string().email('Invalid email').max(200),
  phone: z.string().max(40).optional().or(z.literal('')),
  message: z.string().min(1, 'Message is required').max(2000),
  source: z.string().max(120).optional().or(z.literal('')),
  website: z.string().max(0).optional().or(z.literal('')), // honeypot must be empty
})

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot check — silently succeed if bot filled hidden field
  if (payload && typeof payload === 'object' && 'website' in payload) {
    const hp = (payload as Record<string, unknown>).website
    if (typeof hp === 'string' && hp.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }
  }

  const parsed = LeadSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 },
    )
  }

  const { name, email, phone, message, source } = parsed.data

  try {
    const supabase = await createServerClient()
    const { error } = await supabase.from('leads').insert({
      name,
      email,
      phone: phone || null,
      message,
      source: source || 'landing',
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 },
    )
  }
}

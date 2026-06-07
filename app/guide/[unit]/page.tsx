import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { unitData, type Unit } from '@/lib/guideData'
import { GuideNav } from '@/components/guide/GuideNav'
import { GuideHero } from '@/components/guide/GuideHero'
import { SpaceSection } from '@/components/guide/SpaceSection'
import { BuildingSection } from '@/components/guide/BuildingSection'
import { EatSection } from '@/components/guide/EatSection'
import { ExploreSection } from '@/components/guide/ExploreSection'
import { ContactSection } from '@/components/guide/ContactSection'
import { GuideFooter } from '@/components/guide/GuideFooter'

interface Props {
  params: Promise<{ unit: string }>
}

export function generateStaticParams() {
  return [{ unit: 'calima' }, { unit: 'mojo' }, { unit: 'picon' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { unit } = await params
  const data = unitData[unit as Unit]
  if (!data) return {}

  return {
    title: `Welcome to ${data.displayName} — RØFE Arrecife`,
    robots: { index: false, follow: false },
  }
}

export default async function GuidePage({ params }: Props) {
  const { unit } = await params
  const data = unitData[unit as Unit]

  if (!data) {
    notFound()
  }

  return (
    <div className="bg-rofe-white text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8 }}>
      <GuideNav />
      <GuideHero unitName={data.displayName} />

      {/* Section break */}
      <div style={{ height: '4px', background: 'var(--rofe-cream)' }} />

      <SpaceSection data={data} />

      <div style={{ height: '4px', background: 'var(--rofe-cream)' }} />

      <BuildingSection unit={unit as Unit} />

      <div style={{ height: '4px', background: 'var(--rofe-cream)' }} />

      <EatSection />

      <div style={{ height: '4px', background: 'var(--rofe-cream)' }} />

      <ExploreSection />

      <div style={{ height: '4px', background: 'var(--rofe-cream)' }} />

      <ContactSection />

      <GuideFooter />
    </div>
  )
}

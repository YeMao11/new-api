/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Shield, Server, Key, Eye, Code, Gauge } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'reliable',
      icon: <Shield className='size-5' strokeWidth={1.5} />,
      title: t('Built for Long-Term Use'),
      desc: t(
        'Multi-key failover with automatic health checks. When one upstream key fails or reaches its limit, traffic shifts to the next available channel without interruption.'
      ),
    },
    {
      id: 'standard',
      icon: <Code className='size-5' strokeWidth={1.5} />,
      title: t('Standard API, Zero Code Changes'),
      desc: t(
        'Fully compatible with OpenAI, Anthropic, and Gemini API protocols. Replace the base URL and your existing code works as-is — no SDK changes, no rewrite.'
      ),
    },
    {
      id: 'infra',
      icon: <Server className='size-5' strokeWidth={1.5} />,
      title: t('Managed Infrastructure'),
      desc: t(
        'A single endpoint abstracts away the complexity of managing multiple upstream providers. We handle provisioning, rate limits, and version updates on our side.'
      ),
    },
    {
      id: 'transparent',
      icon: <Eye className='size-5' strokeWidth={1.5} />,
      title: t('Transparent & Auditable'),
      desc: t(
        'The proxy layer is open source under AGPLv3 and publicly auditable on GitHub. No conversation data is stored. Privacy policy is clear and linked on every page.'
      ),
    },
    {
      id: 'platform',
      icon: <Key className='size-5' strokeWidth={1.5} />,
      title: t('API Key Management & Access Control'),
      desc: t(
        'Create and manage API keys with fine-grained permissions. Set spending limits, restrict model access, and organize users into teams — all from the dashboard.'
      ),
    },
    {
      id: 'pricing',
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('Practical Pricing, Real Value'),
      desc: t(
        'Upstream costs are structurally lower through regional procurement. Usage-based billing with real-time tracking — pay only for what you consume, with no hidden markups.'
      ),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('Why AIProxy')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('A service designed to stay')}
            <br />
            {t('reliable over the long run')}
          </h2>
        </AnimateInView>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 80}
              animation='fade-up'
              className='border-border/40 bg-background hover:border-border/60 group rounded-xl border p-6 transition-colors duration-300'
            >
              <div className='text-muted-foreground group-hover:text-foreground mb-4 flex size-10 items-center justify-center rounded-lg border bg-muted/30 transition-colors'>
                {f.icon}
              </div>
              <h3 className='mb-2 text-sm font-semibold'>{f.title}</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

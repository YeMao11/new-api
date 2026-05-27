import { Construction } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PublicLayout } from '@/components/layout'

export function Docs() {
  const { t } = useTranslation()

  return (
    <PublicLayout>
      <div className='flex min-h-[60vh] items-center justify-center p-8'>
        <div className='max-w-md space-y-6 text-center'>
          <div className='flex justify-center'>
            <Construction className='text-muted-foreground h-24 w-24' strokeWidth={1.5} />
          </div>
          <div className='space-y-3'>
            <h2 className='text-2xl font-bold'>
              {t('Documentation Coming Soon')}
            </h2>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}

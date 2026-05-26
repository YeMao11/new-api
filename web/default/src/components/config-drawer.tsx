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
import { type SVGProps } from 'react'
import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as Radio } from '@base-ui/react/radio-group'
import { CircleCheck, Palette } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { IconThemeDark } from '@/assets/custom/icon-theme-dark'
import { IconThemeLight } from '@/assets/custom/icon-theme-light'
import { IconThemeSystem } from '@/assets/custom/icon-theme-system'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/theme-provider'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  sideDrawerContentClassName,
  sideDrawerFormClassName,
  sideDrawerHeaderClassName,
} from '@/components/drawer-layout'

const Item = RadioPrimitive.Root

export function ConfigDrawer() {
  const { t } = useTranslation()

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            className='max-md:hidden rounded-md p-2 hover:bg-accent transition-colors'
            aria-label={t('Theme')}
          >
            <Palette className='size-[1.2rem]' aria-hidden='true' />
          </button>
        }
      >
        <Palette className='size-[1.2rem]' aria-hidden='true' />
      </SheetTrigger>
      <SheetContent className={sideDrawerContentClassName('sm:max-w-sm')}>
        <SheetHeader className={sideDrawerHeaderClassName()}>
          <SheetTitle>{t('Theme')}</SheetTitle>
        </SheetHeader>
        <div className={sideDrawerFormClassName()}>
          <ThemeConfig />
        </div>
      </SheetContent>
    </Sheet>
  )
}

function RadioGroupItem(props: {
  item: {
    value: string
    label: string
    icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement
  }
  isTheme?: boolean
}) {
  const isTheme = props.isTheme ?? false
  return (
    <Item
      value={props.item.value}
      className={cn('group outline-none', 'transition duration-200 ease-in')}
      aria-label={`Select ${props.item.label.toLowerCase()}`}
      aria-describedby={`${props.item.value}-description`}
    >
      <div
        className={cn(
          'ring-border relative rounded-md ring-[1px]',
          'group-data-checked:ring-primary group-data-checked:shadow-2xl',
          'group-focus-visible:ring-2'
        )}
        role='img'
        aria-hidden='false'
        aria-label={`${props.item.label} option preview`}
      >
        <CircleCheck
          className={cn(
            'fill-primary size-6 stroke-white',
            'group-data-unchecked:hidden',
            'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'
          )}
          aria-hidden='true'
        />
        <props.item.icon
          className={cn(
            !isTheme &&
              'stroke-primary fill-primary group-data-unchecked:stroke-muted-foreground group-data-unchecked:fill-muted-foreground'
          )}
          aria-hidden='true'
        />
      </div>
      <div
        className='mt-1 text-xs'
        id={`${props.item.value}-description`}
        aria-live='polite'
      >
        {props.item.label}
      </div>
    </Item>
  )
}

function ThemeConfig() {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()
  return (
    <Radio
      value={theme}
      onValueChange={setTheme}
      className='grid w-full grid-cols-3 gap-4'
      aria-label={t('Select theme preference')}
    >
      {[
        { value: 'system', label: t('System'), icon: IconThemeSystem },
        { value: 'light', label: t('Light'), icon: IconThemeLight },
        { value: 'dark', label: t('Dark'), icon: IconThemeDark },
      ].map((item) => (
        <RadioGroupItem key={item.value} item={item} isTheme />
      ))}
    </Radio>
  )
}


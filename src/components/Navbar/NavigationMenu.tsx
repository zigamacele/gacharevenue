'use client'

import { PieChart, Table2 } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/lib/shadcn/ui/navigation-menu.tsx'
import { cn } from '@/lib/shadcn/utils.ts'

import ImageComponent from '@/components/ImageComponent.tsx'

import chartsScreenshot from '@/assets/Navmenu/charts.jpeg'
import faqScreenshot from '@/assets/Navmenu/faq.jpeg'
import feedbackScreenshot from '@/assets/Navmenu/feedback.jpeg'
import graveyardScreenshot from '@/assets/Navmenu/graveyard.jpeg'
import revenueScreenshot from '@/assets/Navmenu/revenue.jpeg'

import { CHARTS, FAQ, FEEDBACK, GRAVEYARD, REVENUE } from '@/constants/links.ts'

const NavigationMenu: React.FC = () => {
  return (
    <NavigationMenuPrimitive>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-72 grid-cols-2 gap-3 overflow-scroll p-3 md:w-[400px] lg:w-[650px] lg:grid-cols-[0.75fr_0.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='from-muted/50 to-muted group relative flex h-full w-full select-none flex-col justify-end rounded-md border border-neutral-800 bg-[#121212] bg-gradient-to-b p-6 no-underline outline-none transition-all hover:border-neutral-700 hover:shadow-lg focus:shadow-md'
                    to={REVENUE}
                  >
                    <span className='via-neutral-[#121212]/80 absolute left-0 top-0 z-10 h-32 w-full rounded-t bg-gradient-to-t from-[#121212] to-transparent sm:h-28 lg:h-48' />
                    <ImageComponent
                      height={128}
                      width={350}
                      src={revenueScreenshot}
                      alt='Revenue screenshot'
                      className='absolute left-0 top-0 h-32 w-full rounded-t object-cover opacity-60 transition-opacity group-hover:opacity-100 sm:h-28 lg:h-48'
                    />
                    <div className='z-40'>
                      <Table2 size={36} strokeWidth={1.5} />
                      <div className='mb-1 mt-2 text-lg font-semibold'>
                        Revenue
                      </div>
                      <p className='text-sm leading-tight opacity-40'>
                        Check last months gacha mobile revenue.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='from-muted/50 to-muted group relative flex h-full w-full select-none flex-col justify-end rounded-md border border-neutral-800 bg-[#121212] bg-gradient-to-b p-6 no-underline outline-none transition-all hover:border-neutral-700 hover:shadow-lg focus:shadow-md'
                    to={CHARTS}
                  >
                    <span className='via-neutral-[#121212]/80 absolute left-0 top-0 z-10 h-32 w-full rounded-t bg-gradient-to-t from-[#121212] to-transparent sm:h-28 lg:h-48' />
                    <ImageComponent
                      height={128}
                      width={350}
                      src={chartsScreenshot}
                      alt='Charts screenshot'
                      className='absolute left-0 top-0 h-32 w-full rounded-t object-cover opacity-60 transition-opacity group-hover:opacity-100 sm:h-28 lg:h-48'
                    />
                    <div className='z-40'>
                      <PieChart size={36} strokeWidth={1.5} />
                      <div className='mb-1 mt-2 text-lg font-semibold'>
                        Charts
                      </div>
                      <p className='text-sm leading-tight opacity-40'>
                        Monthly interactive line, bar, pie charts and more.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className='col-span-2 lg:col-auto'>
                <ListItem
                  className='col-span-2 hover:border-neutral-700 lg:col-auto'
                  href={GRAVEYARD}
                  title='Graveyard'
                  image={graveyardScreenshot}
                >
                  Games that ended its service or are in maintenance mode.
                </ListItem>
              </li>
              <ListItem
                href={FEEDBACK}
                title='Feedback'
                image={feedbackScreenshot}
                className='hover:border-neutral-700'
              >
                Leave feedback, suggestions or request a feature.
              </ListItem>
              <ListItem
                href={FAQ}
                title='FAQs'
                image={faqScreenshot}
                className='hover:border-neutral-700'
              >
                Site and data frequently asked questions.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuPrimitive>
  )
}

interface ListItemProps {
  className?: string
  title: string
  image?: string
  href: string
  children: React.ReactNode
}

const ListItem: React.FC<ListItemProps> = ({
  className,
  title,
  image,
  href,
  children,
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            'from-muted/50 to-muted transition-allhover:border-neutral-700 group relative flex h-full w-full select-none flex-col justify-end rounded-md border border-neutral-800 bg-[#121212] bg-gradient-to-b p-3 no-underline outline-none hover:shadow-lg focus:shadow-md',
            className,
          )}
        >
          <div className='z-40'>
            <p className='mb-1 text-sm font-semibold leading-none'>{title}</p>
            <p className='text-muted-foreground line-clamp-2 text-sm leading-snug opacity-40'>
              {children}
            </p>
          </div>
          {image && (
            <>
              <span className='via-neutral-[#121212]/80 absolute right-0 top-0 z-10 h-full w-20 rounded-r bg-gradient-to-r from-[#121212] to-transparent sm:w-40' />
              <ImageComponent
                height={80}
                width={80}
                src={image}
                alt={title}
                className='absolute right-0 top-0 h-full w-20 rounded-r object-cover opacity-60 transition-opacity group-hover:opacity-100 sm:w-40'
              />
            </>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = 'ListItem'

export default NavigationMenu

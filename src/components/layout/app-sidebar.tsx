'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, Briefcase, PlusCircle, Bot, History } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const AppSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Candidate Search', icon: Search },
    { href: '/history', label: 'Search History', icon: History },
    { href: '/jobs', label: 'Job Postings', icon: Briefcase },
    { href: '/post-job', label: 'Post a Job', icon: PlusCircle },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="shrink-0 text-primary-foreground hover:bg-transparent">
                <Bot className="size-6" />
            </Button>
            <h1 className="font-headline text-lg font-semibold truncate">JobScout AI</h1>
            <div className="grow" />
            <SidebarTrigger className="[&>svg]:text-primary-foreground" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                  <React.Fragment>
                    <item.icon />
                    <span>{item.label}</span>
                  </React.Fragment>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

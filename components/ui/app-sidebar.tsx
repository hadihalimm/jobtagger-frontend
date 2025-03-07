import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './sidebar';
import { Contact, Table2, Video } from 'lucide-react';

const menuItems = [
  {
    title: 'Job Tracker',
    url: '#',
    icon: Table2,
  },
  {
    title: 'Interviews',
    url: '#',
    icon: Video,
  },
  {
    title: 'Contacts',
    url: '#',
    icon: Contact,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl font-bold text-center mt-8 mb-12">JobTagger</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex justify-start gap-4 py-6">
                    <item.icon className="scale-130" />
                    <span className="text-lg font-semibold">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="mb-8">
          <SidebarMenuItem className="flex flex-col justify-between ml-2 border">
            <h1 className="text-lg font-semibold">User email</h1>
            <h1 className="text-lg font-semibold">Logout</h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

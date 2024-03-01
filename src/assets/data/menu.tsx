import {
  FileLineChart,
  Globe,
  LayoutDashboardIcon,
  Megaphone,
} from 'lucide-react';

export const menu = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboardIcon className='h-5 w-5' />,
    link: '/dashboard',
  },
  {
    title: 'Campaign',
    icon: <Megaphone className='h-5 w-5' />,
    link: '/campaign',
  },
  {
    title: 'Analytics',
    icon: <FileLineChart className='h-5 w-5' />,
    link: '/analytics',
  },
  {
    title: 'Network',
    icon: <Globe className='h-5 w-5' />,
    link: '/network',
  },
];

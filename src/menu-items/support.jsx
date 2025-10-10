// assets
import { BarsOutlined, FileTextOutlined } from '@ant-design/icons';

// icons
const icons = {
  BarsOutlined,
  FileTextOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'Analytics',
  title: 'Analytics',
  type: 'group',
  children: [
    {
      id: 'order-log',
      title: 'Order log',
      type: 'item',
      url: '/sample-page',
      icon: icons.BarsOutlined
    },
    {
      id: 'report',
      title: 'Report',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.FileTextOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;

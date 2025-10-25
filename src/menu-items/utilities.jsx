// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  SnippetsOutlined,
  InboxOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  UserOutlined,
  CoffeeOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  InboxOutlined,
  SnippetsOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  CoffeeOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'role_management',
  title: 'Role management',
  type: 'group',
  children: [
    {
      id: 'role-customer',
      title: 'Customer',
      type: 'item',
      url: '/customer',
      icon: icons.UserOutlined
    },
    {
      id: 'role-chef',
      title: 'Chef',
      type: 'item',
      url: '/chef',
      icon: icons.CoffeeOutlined
    },
    {
      id: 'role-chef_manager',
      title: 'Chef_manager',
      type: 'item',
      url: '/chefManager',
      icon: icons.SnippetsOutlined
    },
    // {
    //   id: 'role-Delivery_boy',
    //   title: 'Delivery_boy',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.InboxOutlined
    // }
  ]
};

export default utilities;

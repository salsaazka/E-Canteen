import React from 'react'
import Cookies from 'universal-cookie'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// User Management
const UserManagement = React.lazy(() => import('./views/pages/userManagement/Index'))

const Items = React.lazy(() => import('./views/pages/itemManagement/Index'))
const AddItem = React.lazy(() => import('./views/pages/itemManagement/addItem/Index'))
const EditItem = React.lazy(() => import('./views/pages/itemManagement/editItem/Index'))

const CardsManagement = React.lazy(() => import('./views/pages/cardManagement/Index'))
const AddCard = React.lazy(() => import('./views/pages/cardManagement/addCard/Index'))
// const EditCard = React.lazy(() => import('./views/pages/cardManagement/editCard/Index'))

const Device = React.lazy(() => import('./views/pages/device/Index'))
const AddDevice = React.lazy(() => import('./views/pages/device/addDevice/Index'))
const EditDevice = React.lazy(() => import('./views/pages/device/editDevice/Index'))

const Order = React.lazy(() => import('./views/pages/order/Index'))
const AddOrder = React.lazy(() => import('./views/pages/order/addOrder/Index'))
const EditOrder = React.lazy(() => import('./views/pages/order/editOrder/Index'))

const cookies = new Cookies()
let routes = []
if (cookies.get('auth_token')) {
  routes = [
    { path: '/', exact: true, name: 'Home' },
    // Pages

    { path: '/user-management', name: 'User Management', element: UserManagement },
    { path: '/items', name: 'Items', element: Items },
    { path: '/items/add', name: 'Add Item', element: AddItem },
    { path: '/items/edit/:id', name: 'Edit Item', element: EditItem },
    { path: '/cards', name: 'Cards', element: CardsManagement },
    { path: '/cards/add/:id', name: 'Add Card', element: AddCard },
    // { path: '/cards/edit/:id', name: 'Edit Card', element: EditCard },
    { path: '/devices', name: 'Devices', element: Device },
    { path: '/devices/add', name: 'Add Device', element: AddDevice },
    { path: '/devices/edit/:id', name: 'Edit Device', element: EditDevice },
    { path: '/orders', name: 'Orders', element: Order },
    { path: '/orders/add', name: 'Add Order', element: AddOrder },
    { path: '/orders/edit/:id', name: 'Edit Order', element: EditOrder },

    // End Pages
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/theme', name: 'Theme', element: Colors, exact: true },
    { path: '/theme/colors', name: 'Colors', element: Colors },
    { path: '/theme/typography', name: 'Typography', element: Typography },
    { path: '/base', name: 'Base', element: Cards, exact: true },
    { path: '/base/accordion', name: 'Accordion', element: Accordion },
    { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
    { path: '/base/cards', name: 'Cards', element: Cards },
    { path: '/base/carousels', name: 'Carousel', element: Carousels },
    { path: '/base/collapses', name: 'Collapse', element: Collapses },
    { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
    { path: '/base/navs', name: 'Navs', element: Navs },
    { path: '/base/paginations', name: 'Paginations', element: Paginations },
    { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
    { path: '/base/popovers', name: 'Popovers', element: Popovers },
    { path: '/base/progress', name: 'Progress', element: Progress },
    { path: '/base/spinners', name: 'Spinners', element: Spinners },
    { path: '/base/tables', name: 'Tables', element: Tables },
    { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
    { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
    { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
    { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
    { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
    { path: '/charts', name: 'Charts', element: Charts },
    { path: '/forms', name: 'Forms', element: FormControl, exact: true },
    { path: '/forms/form-control', name: 'Form Control', element: FormControl },
    { path: '/forms/select', name: 'Select', element: Select },
    { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
    { path: '/forms/range', name: 'Range', element: Range },
    { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
    { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
    { path: '/forms/layout', name: 'Layout', element: Layout },
    { path: '/forms/validation', name: 'Validation', element: Validation },
    { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
    { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
    { path: '/icons/flags', name: 'Flags', element: Flags },
    { path: '/icons/brands', name: 'Brands', element: Brands },
    { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
    { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
    { path: '/notifications/badges', name: 'Badges', element: Badges },
    { path: '/notifications/modals', name: 'Modals', element: Modals },
    { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
    { path: '/widgets', name: 'Widgets', element: Widgets },
  ]
} else {
  routes = []
  window.location.href = '/login'
}
export default routes

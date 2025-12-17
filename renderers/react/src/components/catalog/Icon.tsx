import * as Icons from '@douyinfe/semi-icons';
import { Types } from '@a2ui/lit/0.8';
import { CatalogComponentProps } from './index';
import { useStringBinding } from '../../core/hooks';

type IconComponentType = typeof Icons.IconPlus;

// Map common icon names to Semi UI icons
const iconMap: Record<string, IconComponentType> = {
  'add': Icons.IconPlus,
  'plus': Icons.IconPlus,
  'close': Icons.IconClose,
  'check': Icons.IconTick,
  'search': Icons.IconSearch,
  'edit': Icons.IconEdit,
  'delete': Icons.IconDelete,
  'settings': Icons.IconSetting,
  'home': Icons.IconHome,
  'user': Icons.IconUser,
  'star': Icons.IconStar,
  'like': Icons.IconLikeHeart,
  'heart': Icons.IconLikeHeart,
  'info': Icons.IconInfoCircle,
  'warning': Icons.IconAlertCircle,
  'error': Icons.IconClose,
  'success': Icons.IconTickCircle,
  'arrow-left': Icons.IconArrowLeft,
  'arrow-right': Icons.IconArrowRight,
  'arrow-up': Icons.IconArrowUp,
  'arrow-down': Icons.IconArrowDown,
  'chevron-left': Icons.IconChevronLeft,
  'chevron-right': Icons.IconChevronRight,
  'chevron-up': Icons.IconChevronUp,
  'chevron-down': Icons.IconChevronDown,
  'menu': Icons.IconMenu,
  'more': Icons.IconMore,
  'refresh': Icons.IconRefresh,
  'download': Icons.IconDownload,
  'upload': Icons.IconUpload,
  'copy': Icons.IconCopy,
  'mail': Icons.IconMail,
  'phone': Icons.IconPhone,
  'calendar': Icons.IconCalendar,
  'clock': Icons.IconClock,
  'location': Icons.IconMapPin,
  'link': Icons.IconLink,
  'image': Icons.IconImage,
  'video': Icons.IconVideo,
  'file': Icons.IconFile,
  'folder': Icons.IconFolder,
};

export function Icon({ surfaceId, component }: CatalogComponentProps) {
  const node = component as Types.IconNode;
  const { name } = node.properties;

  const iconName = useStringBinding(name, component, surfaceId);

  if (!iconName) {
    return null;
  }

  const IconComp = iconMap[iconName.toLowerCase()] ?? Icons.IconHelpCircle;

  const style: React.CSSProperties = {
    flex: component.weight ?? 'initial',
  };

  return <span data-id={component.id}><IconComp style={style} /></span>;
}


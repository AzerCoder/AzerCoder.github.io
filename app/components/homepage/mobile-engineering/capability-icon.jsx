// @flow strict
import {
  TbApi,
  TbBell,
  TbBroadcast,
  TbCloudOff,
  TbDeviceTabletCode,
  TbGauge,
  TbMessageCircle,
  TbPlayerPlay,
  TbRepeat,
  TbRocket,
  TbTopologyStar3,
} from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";

// Mobil muhandislik yo'nalishlari uchun ikonkalar.
const ICONS = {
  realtime: TbBroadcast,
  chat: TbMessageCircle,
  state: TbTopologyStar3,
  dataflow: TbRepeat,
  offline: TbCloudOff,
  api: TbApi,
  performance: TbGauge,
  media: TbPlayerPlay,
  maps: FaMapMarkedAlt,
  push: TbBell,
  architecture: TbDeviceTabletCode,
  release: TbRocket,
};

function CapabilityIcon({ name, size = 22 }) {
  const Icon = ICONS[name] ?? TbDeviceTabletCode;
  return <Icon size={size} />;
}

export default CapabilityIcon;

import { IconType } from "react-icons";

import {
    HiArrowRight,
    HiArrowTopRightOnSquare,
    HiArrowUpRight,
    HiCalendarDays,
    HiEnvelope,
    HiOutlineCloud,
    HiOutlineDocument,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineLink,
    HiOutlineRocketLaunch,
    HiOutlineServer,
    HiUser,
} from "react-icons/hi2";

import {
    PiBookBookmarkDuotone,
    PiGridFourDuotone,
    PiHouseDuotone,
    PiImageDuotone,
    PiUserCircleDuotone,
} from "react-icons/pi";

import {
    SiFigma,
    SiJavascript,
    SiNextdotjs,
    SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaThreads, FaX } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  user: HiUser,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaX, // Map twitter to x icon
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  server: HiOutlineServer,
  cloud: HiOutlineCloud,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

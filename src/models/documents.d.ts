export interface SimDocument {
  name: string;
  ilvl: number;
  item_id: string | null;
  id: string;
  isEquipped: boolean;
  player_name: string;
  dps_mean: number;
  dps_min: number;
  dps_max: number;
  dps_std_dev: number;
  dps_mean_std_dev: number;
}
export interface BossDocument {
  href: string;
  id: string;
  name: string;
  items: number[];
  zone: string;
  encounterOrder: number;
}

export interface MemberDocument {
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  spec?: Spec | null;
  guild: string;
  guildRealm: string;
  lastModified: number;
  rank: number;
  id: string;
  simReportsUrls?: string[] | null;
}

export interface GuildDocument {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  level: number;
  side: number;
  achievementPoints: number;
  emblem: Emblem;
  id: string; // as the form of guildname_realm
}

export interface Spec {
  name: string;
  role: string;
  backgroundImage: string;
  icon: string;
  description: string;
  order: number;
}
export interface Emblem {
  icon: number;
  iconColor: string;
  iconColorId: number;
  border: number;
  borderColor: string;
  borderColorId: number;
  backgroundColor: string;
  backgroundColorId: number;
}

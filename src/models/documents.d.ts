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

export interface ItemDocument {
  droppedBy: string;
  id: number;
  disenchantingSkillRank: number;
  description: string;
  name: string;
  icon: string;
  stackable: number;
  itemBind: number;
  bonusStats?: BonusStatsEntity[] | null;
  itemSpells?: ItemSpellsEntity[] | null;
  buyPrice: number;
  itemClass: number;
  itemSubClass: number;
  containerSlots: number;
  inventoryType: number;
  equippable: boolean;
  itemLevel: number;
  maxCount: number;
  maxDurability: number;
  minFactionId: number;
  minReputation: number;
  quality: number;
  sellPrice: number;
  requiredSkill: number;
  requiredLevel: number;
  requiredSkillRank: number;
  itemSource: ItemSource;
  baseArmor: number;
  hasSockets: boolean;
  isAuctionable: boolean;
  armor: number;
  displayInfoId: number;
  nameDescription: string;
  nameDescriptionColor: string;
  upgradable: boolean;
  heroicTooltip: boolean;
  context: string;
  bonusLists?: number[] | null;
  availableContexts?: string[] | null;
  bonusSummary: BonusSummary;
  artifactId: number;
}

export interface BonusStatsEntity {
  stat: number;
  amount: number;
}
export interface ItemSpellsEntity {
  spellId: number;
  nCharges: number;
  consumable: boolean;
  categoryId: number;
  trigger: string;
  scaledDescription: string;
}
export interface ItemSource {
  sourceId: number;
  sourceType: string;
}
export interface BonusSummary {
  defaultBonusLists?: number[] | null;
  chanceBonusLists?: number[] | null;
  bonusChances?: BonusChancesEntity[] | null;
}
export interface BonusChancesEntity {
  chanceType: string;
  stats?: (StatsEntity | null)[] | null;
  sockets?: (SocketsEntity | null)[] | null;
}
export interface StatsEntity {
  statId: string;
  delta: number;
}
export interface SocketsEntity {
  socketType: string;
}

export interface ItemsJoinedSims extends ItemDocument {
  sims: SimDocument[];
}

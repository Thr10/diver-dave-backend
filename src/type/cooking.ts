export type CookingMenuItem = {
  name: string;
  icon_name: string;
  required: number;
};

export type CookingUnlockType = 'Employee' | 'SHOP' | 'SPECIAL';
export type CookingTag = 'NO_FARM' | 'BOSS' | 'EMPLOYEE';
export type FestiveType = 'SAILFISH' | 'SHARK' | 'MEDUSA' | 'TUNNY';

export type CookingComplexInfo = {
  menu: CookingMenuItem[];
  unlock_info: {
    type: CookingUnlockType;
    employee_level?: number;
    employee_name?: string;
    employee_icon?: string;
    shop_level?: number;
    boss_name?: string;
    boss_icon?: string;
    event_name?: string;
    event_icon?: string;
  };
  tag_list: CookingTag[];
  festive_list: FestiveType[];
};

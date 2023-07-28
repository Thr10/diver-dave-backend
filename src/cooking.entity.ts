import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cooking')
export class CookingEntity {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  name_en: string;

  @Column()
  name_zh: string;

  @Column()
  fish_needs_num: number;

  @Column()
  farm_needs_num: number;

  @Column()
  spices_needs_num: number;

  @Column()
  icon_picture: string;
}

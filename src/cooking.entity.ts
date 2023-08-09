import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CookingComplexInfo, CookingMenuItem } from './type/cooking';

@Entity('cooking')
export class CookingEntity {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  name_en: string;

  @Column()
  name_zh: string;

  @Column()
  price: number;

  @Column()
  price_max: number;

  @Column()
  mark: number;

  @Column()
  mark_max: number;

  @Column()
  yield: number;

  @Column({ length: 1024 })
  describe: string;

  @Column()
  icon_name: string;

  @Column()
  scene_picture: string;

  @Column()
  unlock_fire: string;

  @Column({ type: 'json', nullable: true })
  complex_info: CookingComplexInfo;
}

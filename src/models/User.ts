import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'users',
})

export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @Unique
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  password: string;
}

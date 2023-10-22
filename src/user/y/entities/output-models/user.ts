import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface userAttributes {
    id?: number;
    name?: string;
    password?: string;
    status?: string;
    createAt?: number;
    updateAt?: number;
    deleteAt?: number;
}

@Table({ tableName: "user", timestamps: false })
export class user extends Model<userAttributes, userAttributes> implements userAttributes {
    @Column({ allowNull: true, type: DataType.INTEGER })
    id?: number;
    @Column({ allowNull: true, type: DataType.STRING(50) })
    name?: string;
    @Column({ allowNull: true, type: DataType.STRING(50) })
    password?: string;
    @Column({ allowNull: true, type: DataType.STRING(50) })
    status?: string;
    @Column({ allowNull: true, type: DataType.INTEGER })
    createAt?: number;
    @Column({ allowNull: true, type: DataType.INTEGER })
    updateAt?: number;
    @Column({ allowNull: true, type: DataType.INTEGER })
    deleteAt?: number;
}
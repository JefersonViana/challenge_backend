import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
  InferCreationAttributes<SequelizeUser>> {
    declare id: CreationOptional<number>;

    declare username: string;

    declare email: string;

    declare password: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_name',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
  underscored: true,
});


export default SequelizeUser;

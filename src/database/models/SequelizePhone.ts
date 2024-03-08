import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizePhone extends Model<InferAttributes<SequelizePhone>,
  InferCreationAttributes<SequelizePhone>> {
    declare id: CreationOptional<number>;

    declare name: string;

    declare brand: string;

    declare model: string;

    declare price: number;

    declare color: string;
}

SequelizePhone.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'phones',
  timestamps: false,
  underscored: true,
});


export default SequelizePhone;
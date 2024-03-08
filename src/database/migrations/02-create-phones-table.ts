import { Model, QueryInterface, DataTypes} from 'sequelize';
import { ICellPhone } from '../../interfaces/iphone/ICellPhone';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICellPhone>>('phones', {
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
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('phones');
  },
};

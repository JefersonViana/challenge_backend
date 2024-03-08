// criar 20 celulares para popular o banco
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("phones", [
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "black",
      },
      {
        name: "Samsung Galaxy S21",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "white",
      },
      {
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "blue",
      },
      {
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "red",
      },
      {
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "green",
      },
      {
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "yellow",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "purple",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "pink",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "orange",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "black",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "white",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "blue",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "red",
      },
      {
        name: "Samsung Galaxy S20",
        brand: "Samsung",
        price: 1000,
        model: "S20",
        color: "green",
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("phones", {});
  },
};
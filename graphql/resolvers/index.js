const Place = require("../../models/Rent/Place");
const City = require("../../models/Rent/City");

const Restroom = require("../../models/Restroom/Restroom");
const CrimeInfo = require("../../models/Restroom/CrimeInfo");
const CheckedInfo = require("../../models/Restroom/CheckedInfo");

module.exports = {
  Query: {
    places: async (_, { id }) => {
      return await Place.findOne({ _id: id });
    },

    cities: async (_, { name }) => {
      return await City.find({ name: { $regex: name } });
    },

    restrooms: async (_, { address }) => {
      return await Restroom.find({ address: { $regex: address } });
    },

    crimeInfo: async (_, { restroomId }) => {
      return await CrimeInfo.find();
    },

    checkedInfo: async (_, { restroomId }) => {
      return await CheckedInfo.findOne({ restroomId: restroomId });
    },
  },
  City: {
    async places(_, __) {
      const places = await Place.find();
      return places.filter((place) => {
        return place.cityId === _.id;
      });
    },
  },
  Place: {
    async cities(_, __) {
      const cities = await City.find();
      return cities.filter((city) => {
        return city.id === _.cityId;
      });
    },
  },

  Restroom: {
    async crimeInfo(_, __) {
      const crimeInfo = await CrimeInfo.find();
      return crimeInfo.filter((info) => {
        return info.restroom_id === _.id;
      });
    },
    async checkedInfo(_, __) {
      const checkedInfo = await CheckedInfo.find();
      return checkedInfo.filter((info) => {
        return info.restroomId === _.id;
      });
    },
  },
};

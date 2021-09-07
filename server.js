const express = require("express");
const app = express();
const reader = require("xlsx");
const fs = require("fs");
const connectDatabase = require("./database");
//const suppliers = require("./suppliers");
const mongoose = require("mongoose");
const ikame = require("./ikame");
connectDatabase();
const file = reader.readFile("./ikame.xlsx");
let firmalar = [];
let cities = [];
let towns = [];

const object = {
  name:"",
  queryType: "octopus",
  email: "",
  email2: "",
  email3: "",
  phone: "",
  phone2: "",
  phone3: "",
  name: "",
  adress: "",
  city: "",
  creationDate: new Date(),
  lastUpdateDate: new Date(),
  isActive: true,
  isDeleted: false,
  accountingCode: "",
  shortCode: "",
};
const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    firmalar.push(res);
  });
}
fs.readFile("towns.json", "utf8", (err, data) => {
  towns = JSON.parse(data);
});
fs.readFile("cities.json", "utf8", (err, data) => {
  if (err) throw err;
  cities = JSON.parse(data);
  for (let i = 0; i < firmalar.length; i++) {
    object.queryType = "octopus";
    object.shortCode = "";
    object.accountingCode = "";
    object.creationDate = new Date();
    object.lastUpdateDate = new Date();
    object.isActive = true;
    object.isDeleted = false;
    object.name=firmalar[i]["name"];
    console.log(object.name);
    object.email = firmalar[i]["Mail 1"];
    object.email2 = firmalar[i]["Mail 2"]?firmalar[i]["Mail 2"]:"";
    object.email3 = firmalar[i]["Mail 3"]?firmalar[i]["Mail 3"]:"";
    object.phone = firmalar[i]["Tel 1"];
    object.phone2 = firmalar[i]["Tel 2"] ? firmalar[i]["Tel 3"] : "";
    object.phone3 = firmalar[i]["Tel 2"] ? firmalar[i]["Tel 3"] : "";
    object.adress = "";

    /*const city = cities.find(
      (f) =>
        f.name
          .toUpperCase()
          .replaceAll("İ", "I")
          .replaceAll("Ç", "C")
          .replaceAll("Ğ", "G")
          .replaceAll("Ö", "O")
          .replaceAll("Ü", "U")
          .replaceAll("Ş", "S") ===
        firmalar[i]["Bölge"]
          .toUpperCase()
          .replaceAll("İ", "I")
          .replaceAll("Ç", "C")
          .replaceAll("Ğ", "G")
          .replaceAll("Ö", "O")
          .replaceAll("Ü", "U")
          .replaceAll("Ş", "S")
    );
    if (city) {
      object.city = mongoose.Types.ObjectId(city["_id"]["$oid"]);
      suppliers.create(object);
    } else {
      const town = towns.find(
        (t) =>
          t.name
            .toUpperCase()
            .replaceAll("İ", "I")
            .replaceAll("Ç", "C")
            .replaceAll("Ğ", "G")
            .replaceAll("Ö", "O")
            .replaceAll("Ü", "U")
            .replaceAll("Ş", "S") ===
          firmalar[i]["Bölge"]
            .toUpperCase()
            .replaceAll("İ", "I")
            .replaceAll("Ç", "C")
            .replaceAll("Ğ", "G")
            .replaceAll("Ö", "O")
            .replaceAll("Ü", "U")
            .replaceAll("Ş", "S")
      );
      if (town) {
        object.city = mongoose.Types.ObjectId(town["city"]["$oid"]);
        suppliers.create(object);
      } else {
        object.city = mongoose.Types.ObjectId("612de8cf427307df8f4e97f7");
        suppliers.create(object);
      }
    }*/
    ikame.create(object);
  }
});

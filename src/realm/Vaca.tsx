import React from "react";
import Realm from "realm";

export class Vaca extends Realm.Object<Vaca> {
  name !: string;
  born !: Date;
  pariu ?: Date;
  monta ?:Date;
  mastite ?: boolean;
  raca ?:string;

  static schema:Realm.ObjectSchema = {
    name: "Vaca",
    properties: {
      name: "string",
      born: "date",
      pariu: "date?",
      monta: "date?",
      mastite: "bool?",
      raca: "string?",
    },
    primaryKey: "name",
  };
}
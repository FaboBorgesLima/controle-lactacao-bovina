import Realm from "realm";
export class Lote extends Realm.Object<Lote> {
    _id !: Realm.BSON.UUID;
    start !: Date;
    end !: Date;
    numVacas !: number;
    vol !:number;
  
    static schema:Realm.ObjectSchema = {
      name: "Lote",
      properties: {
        _id: "uuid",
        start: "date",
        end: "date",
        numVacas: "int",
        vol: "double",
      },
      primaryKey: "_id",
    };
  }
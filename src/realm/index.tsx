import Realm from 'realm';
import { Vaca } from './Vaca';

export const RealmConfig: Realm.Configuration = {
    schema: [Vaca],
    deleteRealmIfMigrationNeeded:true
}
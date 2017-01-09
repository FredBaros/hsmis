/**
 * Created by FrenzyBit on 08/01/2017.
 */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
const PupilsDb = new Mongo.Collection('pupilDetails');
export default PupilsDb;
var Schemas = {};
Schemas.Pupil = new SimpleSchema({
    firstName: {
        type: String,
        label: "First Name",
        max:20
    },
    lastName:{
        type: String,
        label: "Last Name",
        max:20
    },
    DoB:{
        type: Date,
        label: "Date of Birth",
        max:10
    },
});
PupilsDb.attachSchema(Schemas.Pupil);

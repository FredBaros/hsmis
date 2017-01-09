/**
 * Created by FrenzyBit on 08/01/2017.
 */
import {Template} from 'meteor/templating';
import {PupilsDb} from '../api/common.js';
import './body.html';

Template.body.helpers({
    pupil(){
        return PupilsDb.find({});
    }
});
Template.body.events({
    'click .test'(event){
        alert('I am working');
    }
});
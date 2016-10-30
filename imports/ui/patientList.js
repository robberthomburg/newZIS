/**
 * Created by robberthomburg on 28-10-16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Patients } from '../api/patients.js';

import './patientList.html';
import './patientNew.js';
import './patientEdit.js';


Template.patientList.onCreated(function() {
    Meteor.subscribe('patients');
});


Template.patientList.helpers({
    patients () {
        return Patients.find({}, { sort: { surname: 1}});
    },
    isOwner() {
        return this.owner === Meteor.userId();
    },
});

Template.patientList.events({
    'click .delete' () {
        Meteor.call('patients.remove', this._id);
    },
});

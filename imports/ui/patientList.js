/**
 * Created by robberthomburg on 28-10-16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Patients } from '../api/patients.js';

import './patientList.html';
import './patient.js';


Template.patientList.onCreated(function() {
    console.log('de juiste functie gaat af');
    Meteor.subscribe('patients');
});


Template.patientList.helpers({
    patients () {
        return Patients.find({}, { sort: { name: 1}});
    },
});

Template.patientList.events({
    'submit .new-patient'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const name = target.name.value;

        // Insert a patient into the collection
        Meteor.call('patients.insert', name);

        // Clear form
        target.name.value = '';
    },
});

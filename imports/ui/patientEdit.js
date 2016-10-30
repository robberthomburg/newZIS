/**
 * Created by robberthomburg on 28-10-16.
 */

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Patients } from '../api/patients.js';

import './patientEdit.html';

/** Template.patientEdit.helpers({
    patient(){
        patients.findone(params.patientID)
    },
    target.name.value = patient.name;

}) */

Template.patientEdit.events({
    'submit .edit-patient'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const name = target.name.value;
        const surname = target.surname.value;
        const dateofbirth = target.dateofbirth.value;

        // Insert a patient into the collection
        Meteor.call('patients.update', name, surname, dateofbirth);

        //back to list
        FlowRouter.go("/patients");

    },
});

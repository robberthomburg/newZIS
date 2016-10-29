/**
 * Created by robberthomburg on 28-10-16.
 */

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './patientNew.html';

Template.patientNew.helpers({

});

Template.patientNew.events({
    'submit .new-patient'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const name = target.name.value;

        // Insert a patient into the collection
        Meteor.call('patients.insert', name);

        //back to list
        FlowRouter.go("/patients");

    },
});

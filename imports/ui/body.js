/**
 * Created by robberthomburg on 23-10-16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Patients } from '../api/patients.js';

import './patient.js';
import './body.html';

Template.body.helpers({
    patients () {
        return Patients.find({}, { sort: { name: 1}});
    },
});


Template.body.events({
    'submit .new-patient'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const name = target.name.value;

        // Insert a patient into the collection
        Patients.insert({
            name,
            createdAt: new Date(), // current time
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });

        // Clear form
        target.name.value = '';
    },
});
/**
 * Created by robberthomburg on 23-10-16.
 */

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import './patient.html';

Template.patient.helpers({
    isOwner() {
        return this.owner === Meteor.userId();
    },
});

Template.patient.events({

   'click .delete' () {
      Meteor.call('patients.remove', this._id);
   },
    'click .toggle-private'() {
        Meteor.call('patients.setPrivate', this._id, !this.private);
    },
});
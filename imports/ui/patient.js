/**
 * Created by robberthomburg on 23-10-16.
 */

import { Template } from 'meteor/templating';

import { Patients } from '../api/patients.js';

import './patient.html';

Template.patient.events({

   'click .delete' () {
      Patients.remove(this._id);
   },

});
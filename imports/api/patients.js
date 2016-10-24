/**
 * Created by robberthomburg on 23-10-16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Patients = new Mongo.Collection('patients');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('patients', function tasksPublication() {
        return Patients.find();
    });
}

Meteor.methods({
    'patients.insert'(name) {
        check(name, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Patients.insert({
            name,
            createdAt: new Date(),
            owner: this.userId,
            username: Meteor.users.findOne(this.userId).username,
        });
    },
    'patients.remove'(patientId) {
        check(patientId, String);

        Patients.remove(patientId);
    },
    'patients.setPrivate'(patientId, setToPrivate) {
        check(patientId, String);
        check(setToPrivate, Boolean);

        const patient = Patients.findOne(patientId);

        // Make sure only the task owner can make a task private
        if (patient.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Patients.update(patientId, { $set: { private: setToPrivate } });
    },
});
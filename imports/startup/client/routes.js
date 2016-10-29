/**
 * Created by robberthomburg on 28-10-16.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/body.js'
import '../../ui/patientList.js'

// home page
FlowRouter.route('/', {
    action: function(){
        BlazeLayout.render('appBody');
    }
});

// patienten pagina groep

var patientListRoute = FlowRouter.group({
    prefix: '/patients',
    name: 'patients'
});

patientListRoute.route('/', {
    action: function(){
        console.log("de route naar patienten gaat af")
        BlazeLayout.render('appBody', {content:"patientList"});
    }
});

// patienten detail pagina

patientListRoute.route('/:patientID', {
    action: function(){
        BlazeLayout.render('appBody', {content:"patient"});
    }
});

patientListRoute.route('/:patientID/edit', {
    action: function(){
        BlazeLayout.render('appBody', {content:"patient"});
    }
});

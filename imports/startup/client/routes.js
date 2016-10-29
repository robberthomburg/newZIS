/**
 * Created by robberthomburg on 28-10-16.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/body.js'
import '../../ui/patientList.js'
import '../../ui/patientNew.js'

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

patientListRoute.route('/new', {
    action: function(){
        console.log("route naar nieuwe patient");
        BlazeLayout.render('appBody', {content:"patientNew"});
    }
});
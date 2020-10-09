// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'SmartLights'

client.on('connect', ()=>{
    setInterval(()=>{
        var message 
        //Randomiser for person simulation 
        var person = Math.random();
        if(person < 0.5)
        {
            person = Math.floor(person)
        }       
        else
        {
            person= Math.ceil(person)
        }

        //Randomiser for room simulation 
        var room = Math.floor(Math.random() * 10) + 1;

        //simulated detection 
        if(room == 1)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 1, Floor 1'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 1, Floor 1'
            }
        }

        if(room == 2)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 2, Floor 1'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 2, Floor 1'
            }
        }

        if(room == 3)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 3, Floor 1'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 3, Floor 1'
            }
        }

        if(room == 4)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 4, Floor 1'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 4, Floor 1'
            }
        }

        if(room == 5)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 5, Floor 1'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 5, Floor 1'
            }
        }

        if(room < 6)
        {
            client.publish(topic, message)
            console.log('Message sent!', message)
        }
    }, 5000)
})
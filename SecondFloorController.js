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
        if(room == 6)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 6, Floor 2'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 6, Floor 2'
            }
        }

        if(room == 7)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 7, Floor 2'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 7, Floor 2'
            }
        }

        if(room == 8)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 8, Floor 2'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 8, Floor 2'
            }
        }

        if(room == 9)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 9, Floor 2'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 9, Floor 2'
            }
        }

        if(room == 10)
        {
           if(person == 1)
            {
                message = 'Lights have been switched on in Room 10, Floor 2'
            }
            else if(person == 0)
            {
                message = 'Lights have been switched off in Room 10, Floor 2'
            }
        }
        
        if(room > 5)
        {
            client.publish(topic, message)
            console.log('Message sent!', message)
        }
    }, 5000)
})
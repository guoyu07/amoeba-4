PlayerCollection = new Mongo.Collection( "players" );

var Schemas = {};
Schemas.Player = new SimpleSchema({
    user_id: {
        type: String,
        label: "The user_id of a player",
        index: 1,
        unique: true
    },
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    radius: {
        type: Number,
        label: "The radius of a player"
    },
    x: {
        type: Number,
        label: "Centre X position (pixels)",
        index: 1
    },
    y: {
        type: Number,
        label: "Centre Y position (pixels)",
        index: 1
    }
});

PlayerCollection.attachSchema( Schemas.Player );

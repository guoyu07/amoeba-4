Canvas = {};

/**
 * This Canvas elements context
 */
var ctx;

/**
 * Initialize a Canvas
 * @argument {String} selector  A css selector to the Canvas element, generally an id
 * @argument {Object} options   Additional options, eg height & width values
 * @returns  Void
 */
Canvas.initialize = function (selector, options) {
    options = options || {};
    options.height = options.height || Canvas.constants.height;
    options.width = options.width || Canvas.constants.width;

    canvas = $(selector);
    canvas.attr({ "height" : options.height, "width" : options.width });
    ctx = canvas[0].getContext("2d");

    // Draw vertical grid lines
    ctx.beginPath();
    for ( var x = 0.5; x < options.width; x += 10 ) {
      ctx.moveTo( x, 0 );
      ctx.lineTo( x, options.height );
    }

    // Draw horizontal grid lines
    for ( var y = 0.5; y < options.height; y += 10 ) {
      ctx.moveTo( 0, y );
      ctx.lineTo( options.width, y );
    }

    ctx.strokeStyle = "#eee";
    ctx.stroke();
};

/**
 * Based on the stage dimensions, return random x & y points
 * @returns {Object}
 */
Canvas.generateRandomCoordinates = function () {
    return {
        x : Random.number( 0, Canvas.constants.width ),
        y : Random.number( 0, Canvas.constants.height )
    };
};

/**
 * Note that at this stage we do not take into account any existing cells on the canvas.
 * Therefore a cell may take the position of an existing cell.
 */
Canvas.renderCell = function() {
    var path = new Path2D(),
        coords = this.generateRandomCoordinates();
    path.arc ( coords.x, coords.y, App.constants.cell.radius, 0, Numbers.degreesToRadians(360) );
    ctx.fillStyle = Colour.generateHexColour();
    ctx.fill( path );
};

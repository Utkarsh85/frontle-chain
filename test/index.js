var chain= require('../index');

var one= function (ctx, next) {
  setTimeout(function() {
    ctx.one = 'Hello';
    console.log(ctx);
    return next();
  }, 1);
}

var two= function (ctx, next) {
  setTimeout(function() {
    ctx.two = 'Hello';
    console.log(ctx);
    return next();
  }, 1);
}

var three= function (ctx, next) {
  setTimeout(function() {
    ctx.three = 'Hello';
    console.log(ctx);
    return next();
  }, 1);
}

chain([one,[two,three,[two,three]],three,function (ctx,next) {
	console.log(ctx);
}]);
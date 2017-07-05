var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})

router.get('/admin', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title'
    };

    await ctx.render('index', {
    });
})

router.get('/teacher', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title'
    };

    await ctx.render('index', {
    });
})
module.exports = router;

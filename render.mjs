import nunjucks from 'nunjucks';
import mjml2html from 'mjml';

import { writeFile, mkdir, rmdir, cp } from 'node:fs/promises';

import { lines } from './lines.mjs';
import { join } from 'node:path';

const render = async () => {

  const env = nunjucks.configure();

  env.addFilter('imgPath', function(fileName) {
    return `./images/${fileName}`;
  });

  for (const ctx of Object.values(lines)) {

    console.log(ctx);

    let res = nunjucks.render('template.njk', ctx);
    // console.log(res);

    let m = mjml2html(res);
    // console.log(m);

    await cp('images', join(ctx.path, 'images'), { recursive: true, force: true });

    // await rmdir('_dist', { recursive: true, force: true });
    await mkdir(ctx.path, { recursive: true });
    await writeFile( join(ctx.path, 'index.html') , m.html);
  }
};




render();
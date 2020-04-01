Package.describe({
  name: 'svelte:compiler',
  version: '3.19.1_1',
  summary: 'Svelte compiler',
  git: 'https://github.com/meteor-svelte/meteor-svelte.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'svelte-compiler',
  use: [
    'babel-compiler@7.5.2',
    'caching-compiler@1.2.1',
    'ecmascript@0.14.1'
  ],
  sources: [
    'SvelteCompiler.js',
    'plugin.js'
  ],
  npmDependencies: {
    '@babel/runtime': '7.8.4',
    'find-up': '3.0.0',
    htmlparser2: '3.10.1',
    'source-map': '0.5.6',
    svelte: '3.19.2'
  }
});

Package.onUse(function (api) {
  api.versionsFrom('1.8');
  api.use('isobuild:compiler-plugin@1.0.0');

  // Dependencies for compiled Svelte components (taken from `ecmascript`).
  api.imply([
    'modules',
    'ecmascript-runtime',
    'babel-runtime',
    'promise'
  ]);
});

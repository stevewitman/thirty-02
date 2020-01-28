module.exports = {
  name: 'app02',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app02',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

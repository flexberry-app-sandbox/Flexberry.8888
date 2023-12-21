import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-8888-должность', 'Unit | Model | i-i-s-8888-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-8888-должность',
    'model:i-i-s-8888-настройки',
    'model:i-i-s-8888-отчет-о-сервере',
    'model:i-i-s-8888-программы',
    'model:i-i-s-8888-расположение',
    'model:i-i-s-8888-сервер',
    'model:i-i-s-8888-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

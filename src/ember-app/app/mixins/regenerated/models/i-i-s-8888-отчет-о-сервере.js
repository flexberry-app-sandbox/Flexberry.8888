import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  режим: DS.attr('i-i-s-8888-режим-сервера'),
  расположение: DS.belongsTo('i-i-s-8888-расположение', { inverse: null, async: false }),
  сервер: DS.belongsTo('i-i-s-8888-сервер', { inverse: null, async: false })
});

export let ValidationRules = {
  режим: {
    descriptionKey: 'models.i-i-s-8888-отчет-о-сервере.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-8888-отчет-о-сервере.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сервер: {
    descriptionKey: 'models.i-i-s-8888-отчет-о-сервере.validations.сервер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОСервереE', 'i-i-s-8888-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 }),
    расположение: belongsTo('i-i-s-8888-расположение', 'Расположение', {
      адрес: attr('Адрес', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'адрес' }),
    сервер: belongsTo('i-i-s-8888-сервер', 'Сервер', {
      протокол: attr('Протокол', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'протокол' })
  });

  modelClass.defineProjection('ОтчетОСервереL', 'i-i-s-8888-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 }),
    расположение: belongsTo('i-i-s-8888-расположение', 'Адрес', {
      адрес: attr('Адрес', { index: 1 })
    }, { index: -1, hidden: true }),
    сервер: belongsTo('i-i-s-8888-сервер', 'Протокол', {
      протокол: attr('Протокол', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

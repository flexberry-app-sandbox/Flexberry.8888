import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS8888ДолжностьLForm from './forms/i-i-s-8888-должность-l';
import IIS8888ОтчетОСервереLForm from './forms/i-i-s-8888-отчет-о-сервере-l';
import IIS8888РасположениеLForm from './forms/i-i-s-8888-расположение-l';
import IIS8888СерверLForm from './forms/i-i-s-8888-сервер-l';
import IIS8888СотрудникLForm from './forms/i-i-s-8888-сотрудник-l';
import IIS8888ДолжностьEForm from './forms/i-i-s-8888-должность-e';
import IIS8888ОтчетОСервереEForm from './forms/i-i-s-8888-отчет-о-сервере-e';
import IIS8888РасположениеEForm from './forms/i-i-s-8888-расположение-e';
import IIS8888СерверEForm from './forms/i-i-s-8888-сервер-e';
import IIS8888СотрудникEForm from './forms/i-i-s-8888-сотрудник-e';
import IIS8888ДолжностьModel from './models/i-i-s-8888-должность';
import IIS8888НастройкиModel from './models/i-i-s-8888-настройки';
import IIS8888ОтчетОСервереModel from './models/i-i-s-8888-отчет-о-сервере';
import IIS8888ПрограммыModel from './models/i-i-s-8888-программы';
import IIS8888РасположениеModel from './models/i-i-s-8888-расположение';
import IIS8888СерверModel from './models/i-i-s-8888-сервер';
import IIS8888СотрудникModel from './models/i-i-s-8888-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-8888-должность': IIS8888ДолжностьModel,
    'i-i-s-8888-настройки': IIS8888НастройкиModel,
    'i-i-s-8888-отчет-о-сервере': IIS8888ОтчетОСервереModel,
    'i-i-s-8888-программы': IIS8888ПрограммыModel,
    'i-i-s-8888-расположение': IIS8888РасположениеModel,
    'i-i-s-8888-сервер': IIS8888СерверModel,
    'i-i-s-8888-сотрудник': IIS8888СотрудникModel
  },

  'application-name': '8888',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '8888',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '8888',
          title: '8888'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-8888-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-8888-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          сервера: {
            caption: 'Сервера',
            title: 'Сервера',
            'i-i-s-8888-сервер-l': {
              caption: 'Сервер',
              title: ''
            },
            'i-i-s-8888-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-8888-расположение-l': {
              caption: 'Расположение',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-8888-должность-l': IIS8888ДолжностьLForm,
    'i-i-s-8888-отчет-о-сервере-l': IIS8888ОтчетОСервереLForm,
    'i-i-s-8888-расположение-l': IIS8888РасположениеLForm,
    'i-i-s-8888-сервер-l': IIS8888СерверLForm,
    'i-i-s-8888-сотрудник-l': IIS8888СотрудникLForm,
    'i-i-s-8888-должность-e': IIS8888ДолжностьEForm,
    'i-i-s-8888-отчет-о-сервере-e': IIS8888ОтчетОСервереEForm,
    'i-i-s-8888-расположение-e': IIS8888РасположениеEForm,
    'i-i-s-8888-сервер-e': IIS8888СерверEForm,
    'i-i-s-8888-сотрудник-e': IIS8888СотрудникEForm
  },

});

export default translations;

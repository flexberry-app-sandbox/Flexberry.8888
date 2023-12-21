import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-8888-должность-l');
  this.route('i-i-s-8888-должность-e',
  { path: 'i-i-s-8888-должность-e/:id' });
  this.route('i-i-s-8888-должность-e.new',
  { path: 'i-i-s-8888-должность-e/new' });
  this.route('i-i-s-8888-отчет-о-сервере-l');
  this.route('i-i-s-8888-отчет-о-сервере-e',
  { path: 'i-i-s-8888-отчет-о-сервере-e/:id' });
  this.route('i-i-s-8888-отчет-о-сервере-e.new',
  { path: 'i-i-s-8888-отчет-о-сервере-e/new' });
  this.route('i-i-s-8888-расположение-l');
  this.route('i-i-s-8888-расположение-e',
  { path: 'i-i-s-8888-расположение-e/:id' });
  this.route('i-i-s-8888-расположение-e.new',
  { path: 'i-i-s-8888-расположение-e/new' });
  this.route('i-i-s-8888-сервер-l');
  this.route('i-i-s-8888-сервер-e',
  { path: 'i-i-s-8888-сервер-e/:id' });
  this.route('i-i-s-8888-сервер-e.new',
  { path: 'i-i-s-8888-сервер-e/new' });
  this.route('i-i-s-8888-сотрудник-l');
  this.route('i-i-s-8888-сотрудник-e',
  { path: 'i-i-s-8888-сотрудник-e/:id' });
  this.route('i-i-s-8888-сотрудник-e.new',
  { path: 'i-i-s-8888-сотрудник-e/new' });
});

export default Router;

import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНастрEnum from '../enums/i-i-s-8888-тип-настр';

export default FlexberryEnum.extend({
  enum: ТипНастрEnum,
  sourceType: 'IIS.8888.ТипНастр'
});

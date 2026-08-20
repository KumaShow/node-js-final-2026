import { EntitySchema } from 'typeorm';

const CoacheSchema = new EntitySchema({
  name: 'Coache',
  tableName: 'COACHE',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
      nullable: false,
    },
    // userId: {

    // }
  }
});

export { CoacheSchema };
import { EntitySchema } from 'typeorm';

const CreditPackageSchema = new EntitySchema({
  name: 'CreditPackage',
  tableName: 'CREDIT_PACKAGE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    name: {
      type: 'varchar',
      length: 50,
      nullable: false,
      unique: true,
    },
    credit_amount: {
      type: 'int',
      nullable: false,
    },
    price: {
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: false,
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
  },
});

export { CreditPackageSchema };

import { appDataSource } from '../../../database/data-source.js';
import { CreditPackageSchema } from '../../../database/entities/CreditPackage.js';
import { AppError } from '../../utils/AppError.js';

export const getAllCreditPackages = async () => {
  const creditPackages = await appDataSource
    .getRepository(CreditPackageSchema)
    .find();
  return creditPackages;
};

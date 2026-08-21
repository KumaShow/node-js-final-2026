import { getAllCreditPackages } from './creditPackage.service.js';

export const getCreditPackages = async (req, res, next) => {
  try {
    const creditPackages = await getAllCreditPackages();

    res.status(200).json({ status: 'success', data: creditPackages });
  } catch (err) {
    next(err);
  }
};

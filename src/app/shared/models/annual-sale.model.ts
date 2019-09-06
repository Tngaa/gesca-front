import { MonthlySale } from './monthly-sale.model';

export class AnnualSale {
  public id: number;
  public year: number;
  public monthlySales: MonthlySale[];
  public sales: number;
  public socialCharges: number;
  public professionalFees: number;
}

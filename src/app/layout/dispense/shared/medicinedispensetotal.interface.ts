export interface MedicineDispenseTotal{
    medicineId: number;
    total: number;
  //  dispensations: Dispensation[];
}

export interface Dispensation {
    medicineBrandId: number;
    quantity: number;
    lote: number;
}
export interface Medicine {
    name: string;
    total: number;
    dispensations: Dispensation[];
}

export interface Dispensation {
    medicineBrandId: number;
    quantity: number;
    lote: number;
}
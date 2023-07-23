export interface IForm {
    info: IInfo | null;
    plan: IPlan | null;
    addons: IAddon[] | null;
}

export type TBilled = 'monthly' | 'yearly'

export interface IInfo {
    name: string;
    email: string;
    phone: string;
}

export interface IPlan {
    name: 'arcade' | 'advanced' | 'pro' | null;
    term: TBilled;
    price: number;
}

export interface IAddon {
    name: string;
    price: number;
}
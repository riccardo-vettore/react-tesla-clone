import {TeslaButton} from './tesla-button';

export interface TeslaHomeSection {
    title: string;
    backgroundImgUrl: string;
    showSubTitle: Boolean;
    subTitle?: string;
    subTitleHRef?: string;
    showDownArrow: Boolean;
    disclaimer?: string;
    buttons?: TeslaButton[];
}

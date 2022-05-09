export interface LayoutNavigationItem
{
    id?: string;
    title?: string;
    icon?: string;
    active?: boolean;
    link?: string;
    exactMatch?: boolean;
    children?: LayoutNavigationItem[];
    type:
        | 'basic';
}


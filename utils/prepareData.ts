import { PortfolioItem, ItemsByGroup } from '@/types/interfaces';

export const prepareData = (items: PortfolioItem[]): ItemsByGroup => {
    const groups: ItemsByGroup = [
        ['Корпоративные сайты', []],
        ['CRM-системы', []],
    ];

    let corporateCount = 0;
    let crmCount = 0;

    items.forEach(item => {
        if (item.title.toLowerCase().includes('корпоративный') && corporateCount < 3) {
            groups[0][1].push(item); 
            corporateCount++;
        } else if (item.title.toLowerCase().includes('crm') && crmCount < 3) {
            groups[1][1].push(item); 
            crmCount++;
        } else if (corporateCount < 3) {
            groups[0][1].push(item); 
            corporateCount++;
        } else if (crmCount < 3) {
            groups[1][1].push(item); 
            crmCount++;
        }
    });

    return groups;
};

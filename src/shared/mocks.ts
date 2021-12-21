import {GeoLocation, Address, Company, User} from './common';

export const mockGeoLocation: GeoLocation = {
    lat:	'-37.3159',
    lng:	'81.1496'
};
export const mockCompany: Company = {
    name:	'Romaguera-Crona',
    catchPhrase:	'Multi-layered client-server neural-net',
    bs: 	'harness real-time e-markets'
};

export const mockAddress: Address = {
    street:	'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: mockGeoLocation,
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
};

export const mockUsers: User[] = [
    {
        id:	1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        company: mockCompany,
        address: mockAddress,
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org'
    }
];

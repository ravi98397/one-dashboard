import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'utility',
        icon: 'fal fa-box-open',
        label: 'Utilities'
        // items: [
        //     {
        //         routeLink: 'products/level1.1',
        //         label: 'Level 1.1',
        //         items: [
        //             {
        //                 routeLink: 'products/level2.1',
        //                 label: 'Level 2.1',
        //             },
        //             {
        //                 routeLink: 'products/level2.2',
        //                 label: 'Level 2.2',
        //                 items: [
        //                     {
        //                         routeLink: 'products/level3.1',
        //                         label: 'Level 3.1'
        //                     },
        //                     {
        //                         routeLink: 'products/level3.2',
        //                         label: 'Level 3.2'
        //                     }
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         routeLink: 'products/level1.2',
        //         label: 'Level 1.2',
        //     }
        // ]
    },
    {
        routeLink: 'features',
        icon: 'fal fa-file',
        label: 'Features'
    },
    {
        routeLink: 'user',
        icon: 'fal fa-camera',
        label: 'User'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true
        // items: [
        //     {
        //         routeLink: 'settings/profile',
        //         label: 'Profile'
        //     },
        //     {
        //         routeLink: 'settings/customize',
        //         label: 'Customize'
        //     }
        // ]
    },
];
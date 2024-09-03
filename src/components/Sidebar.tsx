import {toast} from 'react-toastify';

import qanawatLogo from '../icons/qanawatLogo.svg';
import chevronLeft from '../icons/chevronLeft.svg';
import dashboard from '../icons/dashboard.svg';
import users from '../icons/users.svg';
import content from '../icons/content.svg';
import support from '../icons/support.svg';
import financial from '../icons/financial.svg';
import chevronDown from '../icons/chevronDown.svg';
import ellipsis from '../icons/ellipsis.svg';
import {useState} from 'react';

export default function Sidebar() {
    const menuItems = [
        {name: 'Dashboard', icon: dashboard, children: null},
        {name: 'Users', icon: users, children: null},
        {
            name: 'Content',
            icon: content,
            children: [{name: 'Overview'}, {name: 'Sales statistics'}],
        },
        {name: 'Support', icon: support, children: null},
        {name: 'Financial', icon: financial, children: []},
    ] as const;
    const [activeItem, setActiveItem] =
        useState<(typeof menuItems)[number]['name']>('Content');

    const [activeSubItem, setActiveSubItem] = useState('Overview');
    return (
        <div className="bg-blue-500 text-white min-w-60 flex flex-col justify-between">
            <div>
                <div className="flex justify-between content-center ml-5 mr-4 h-14">
                    <img
                        className="w-14 h-9 mt-[10px]"
                        alt="logo"
                        src={qanawatLogo}
                    />
                    <button
                        onClick={() => toast('Collapse sidebar')}
                        className="flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-blue-400 mt-3 hover:bg-blue-600">
                        <img alt="" src={chevronLeft} />
                    </button>
                </div>
                {menuItems.map(item => (
                    <div>
                        <button
                            onClick={() => setActiveItem(item.name)}
                            className={`pl-5 py-3 flex w-full  ${
                                activeItem === item.name
                                    ? 'bg-gray-900'
                                    : 'hover:bg-blue-600'
                            }`}>
                            <img alt="" src={item.icon} />
                            <div className="flex justify-between w-full mr-4">
                                <div className="ml-[10px]">{item.name}</div>
                                {item.children && (
                                    <img alt="down" src={chevronDown} />
                                )}
                            </div>
                        </button>
                        {item.children &&
                            activeItem === item.name &&
                            item.children.map(child => (
                                <button
                                    onClick={() => setActiveSubItem(child.name)}
                                    className={`pl-5 py-3 w-full flex ${
                                        activeSubItem === child.name &&
                                        'bg-blue-600'
                                    } hover:bg-blue-600`}>
                                    <div className="w-5 h-5 flex justify-center items-center">
                                        <div className="w-1 h-1 bg-blue-100 rounded-full" />
                                    </div>
                                    <div className="ml-[10px]">
                                        {child.name}
                                    </div>
                                </button>
                            ))}
                    </div>
                ))}

                {/* <div className="pl-5 py-3 flex bg-gray-900">
                    <img alt="" src={content} />
                    <div className="flex justify-between w-full mr-4">
                        <div className="ml-[10px]">Content</div>
                        <img alt="down" src={chevronDown} />
                    </div>
                </div>
                <div className="pl-5 py-3 flex bg-blue-600">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-1 h-1 bg-blue-100 rounded-full" />
                    </div>
                    <div className="ml-[10px]">Overview</div>
                </div>
                <div className="pl-5 py-3 flex">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-1 h-1 bg-blue-100 rounded-full" />
                    </div>
                    <div className="ml-[10px]">Sales statistics</div>
                </div>
                <div className="ml-5 py-3 flex">
                    <img alt="" src={support} />
                    <div className="ml-[10px]">Support</div>
                </div>
                <div className="pl-5 py-3 flex">
                    <img alt="" src={financial} />
                    <div className="flex justify-between w-full mr-4">
                        <div className="ml-[10px]">Financial</div>
                        <img alt="down" src={chevronDown} />
                    </div>
                </div> */}
            </div>
            <button className="border-t-[1px] border-blue-400 pl-5 py-3 flex justify-between items-center hover:bg-blue-600">
                <div className="flex items-center">
                    <div className="bg-white w-8 h-8 text-blue-500 font-bold text-[22px] rounded-lg text-center">
                        T
                    </div>
                    <div className="ml-2">Tran H.</div>
                </div>
                <img alt="ellipsis" src={ellipsis} className="mr-3" />
            </button>
        </div>
    );
}

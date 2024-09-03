import Header from './Header';
import AlbumMain from './AlbumMain';
import GeneralInfo from './GeneralInfo';
import {useState} from 'react';

export default function Page() {
    const tabs = [
        'General information',
        'Analytics',
        'Related',
        'Stores',
    ] as const;
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(
        'General information',
    );
    return (
        <div className="w-full text-sm">
            <Header />
            <AlbumMain />
            <div className="flex mt-[30px] ml-5">
                {tabs.map(tab => (
                    <button
                        onClick={() => setActiveTab(tab)}
                        key={tab}
                        className={`${
                            tab === activeTab
                                ? 'font-semibold text-blue-500 border-b-2 border-blue-500'
                                : 'text-gray-500 hover:text-blue-500'
                        } p-4 text-base`}>
                        {tab}
                    </button>
                ))}
            </div>
            <GeneralInfo />
        </div>
    );
}

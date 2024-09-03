import bell from '../icons/bell.svg';
import britain from '../icons/britain.svg';
import chevronGrey from '../icons/chevronGrey.svg';
import {toast} from 'react-toastify';

export default function Header() {
    const notificationAmount = 5;
    return (
        <div className="flex justify-between border-b-[1px] border-gray-50">
            <div className="pl-6 py-4 font-semibold text-base ">
                Content Overview
            </div>
            <div className="flex content-center gap-6 mr-6">
                <button
                    onClick={() => toast('Notifications')}
                    className="relative w-6">
                    <img alt="notifications" src={bell} />
                    <div className="absolute h-4 w-4 text-xs font-medium rounded-full bg-blue-500 text-white top-3 right-0">
                        {notificationAmount > 9 ? 9 : notificationAmount}
                    </div>
                </button>
                <button
                    onClick={() => toast('Change language')}
                    className="flex items-center">
                    <img alt="en" src={britain} />
                    <img alt="" src={chevronGrey} className="ml-2" />
                </button>
            </div>
        </div>
    );
}

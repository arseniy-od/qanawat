import ReactPlayer from 'react-player/youtube';
import {toast} from 'react-toastify';

import chevronRight from '../icons/chevronRight.svg';
import spotify from '../icons/spotify.svg';
import soundcloud from '../icons/soundcloud.svg';
import wmg from '../icons/wmg.svg';
import youtube from '../icons/youtube.svg';

type Store = {
    name: string;
    address: string;
};

export default function GeneralInfo() {
    const stores: Store[] = [
        {
            name: 'ABC Music',
            address: 'Chesham House, Chesham Close Romford, Essex, RM7 7PJ',
        },
        {
            name: 'ABC Music',
            address: 'Chesham House, Chesham Close Romford, Essex, RM7 7PJ',
        },
        {
            name: 'ABC Music',
            address: 'Chesham House, Chesham Close Romford, Essex, RM7 7PJ',
        },
        {
            name: 'ABC Music',
            address: 'Chesham House, Chesham Close Romford, Essex, RM7 7PJ',
        },
        {
            name: 'ABC Music',
            address: 'Chesham House, Chesham Close Romford, Essex, RM7 7PJ',
        },
    ];
    return (
        <div className="flex mt-6 ml-7">
            <div className="rounded-2xl overflow-hidden">
                <ReactPlayer
                    width={'664px'}
                    height={'372px'}
                    controls
                    light
                    style={{borderRadius: '1rem'}}
                    url="https://www.youtube.com/watch?v=TQT8nSMGV58"
                />
            </div>
            <div className="ml-9 mr-7">
                <div className="font-semibold text-base">Release via</div>
                <div className="flex gap-10 justify-items-center mt-2 mr-6">
                    <img alt="spotify" src={spotify} />
                    <img alt="soundcloud" src={soundcloud} />
                    <img alt="wmg" src={wmg} />
                    <img alt="youtube" src={youtube} />
                </div>
                <div className="font-semibold text-base mt-5">Store</div>
                <div className="mt-2">
                    {stores.splice(0, 4).map((store, index) => (
                        <div key={index} className={`${index && 'mt-3'}`}>
                            <div className="">{store.name}</div>{' '}
                            <div className="text-gray-400 mt-1">
                                {store.address}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => toast('View all')}
                    className="flex justify-center mt-4 w-full gap-2">
                    <div className="text-center font-semibold text-blue-500">
                        View all
                    </div>
                    <img alt="" src={chevronRight} />
                </button>
            </div>
        </div>
    );
}

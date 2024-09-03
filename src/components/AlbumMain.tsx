import checkMark from '../icons/checkMark.svg';

export default function AlbumMain() {
    return (
        <div className="flex mt-6 w-full">
            <img
                src="theact.jpg"
                alt="album thumbnail"
                className="h-[188px] w-[188px] rounded-2xl ml-7 flex-none"
            />

            <div className="flex-auto">
                <div className="ml-10 flex justify-between">
                    <div className="flex-auto mr-7">
                        <div className="text-white leading-4 bg-blue-500 px-[6px] py-1 w-fit rounded-[4px]">
                            Tracks
                        </div>
                        <div className="flex justify-between border-b-[1px] border-gray-50 mr-2">
                            <div className="pb-3">
                                <div className="flex justify-items-center mt-2 gap-[5.5px]">
                                    <div className="font-semibold text-base leading-6 text-gray-800">
                                        Content name
                                    </div>
                                    <img alt="" src={checkMark} />
                                </div>
                                <div className="flex text-gray-400">
                                    <div>Artist name</div>
                                    <div className="ml-7">Artist role</div>
                                </div>
                            </div>
                            <div className="mr-5">
                                <div className="flex justify-between">
                                    <div className="text-gray-400">
                                        Release Date
                                    </div>
                                    <div className="">12 Jun 2024</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-gray-400">
                                        Creation Date
                                    </div>
                                    <div className="ml-3">12 Jun 2024</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-10 mt-3">
                            <div>
                                <div className="flex">
                                    <div className="text-gray-400 min-w-10">
                                        Label
                                    </div>
                                    <div className="ml-3">Label</div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400 min-w-10">
                                        Cline
                                    </div>
                                    <div className="ml-3">Cline</div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400 min-w-10">
                                        Pline
                                    </div>
                                    <div className="ml-3">Pline</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <div className="text-gray-400">
                                        Copyright Year
                                    </div>
                                    <div className="ml-3">2024</div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400">Genre</div>
                                    <div className="ml-3">
                                        RnB - Pop - Ballad
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400">
                                        Explicit
                                    </div>
                                    <div className="ml-3">A</div>
                                </div>
                            </div>
                            <div className="w-48 mr-5">
                                <div className="flex">
                                    <div className="text-gray-400">UPC</div>
                                    <div className="ml-3">2024</div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400">ISRC</div>
                                    <div className="ml-3">RnB</div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="text-gray-400">Status</div>
                                    <div className="ml-3">Released</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

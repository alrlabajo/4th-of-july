import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Player = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className='flex items-center gap-4 w-full h-full'>
                <img src="/images/cover.jpg" alt="Player" className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-md flex-shrink-0" />
                <div className="flex flex-col justify-center flex-1 min-w-0 space-y-2">
                    <div>
                        <h2 className="text-stone-900 text-sm sm:text-lg md:text-xl font-semibold truncate text-left">Wonderful World</h2>
                        <p className="text-stone-700 text-xs sm:text-base truncate text-left">&TEAM</p>
                    </div>
                    <div className="flex items-center sm:justify-start gap-1">
                        <Icon icon="mdi:shuffle" className="text-stone-700 hover:text-stone-900 text-2xl cursor-pointer hidden sm:block" />
                        <Icon icon="mdi:skip-previous" className="text-stone-700 hover:text-stone-900 text-2xl cursor-pointer" />
                        <Icon icon="icon-park-solid:play" className="text-stone-700 hover:text-stone-900 text-2xl cursor-pointer" />
                        <Icon icon="mdi:skip-next" className="text-stone-700 hover:text-stone-900 text-2xl cursor-pointer" />
                        <Icon icon="mdi:repeat" className="text-stone-700 hover:text-stone-900 text-2xl cursor-pointer hidden sm:block" />
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-gray-600 w-full">
                        <span className="text-xs">1:23</span>
                        <div className="flex-1 bg-gray-300 rounded-full h-1.5 cursor-pointer group">
                            <div className="bg-stone-700 h-1.5 rounded-full relative group-hover:bg-stone-900 transition-colors" style={{ width: '35%' }}>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-stone-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                        <span className="text-xs">3:45</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;

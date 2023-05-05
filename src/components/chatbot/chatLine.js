import React from 'react';
import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';
import { Image } from '@chakra-ui/react';


const BalancerWrapper = (props) => <Balancer {...props} />;

export const LoadingChatLine = () => (
    <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
        <div className="flex flex-grow space-x-3">
            <div className="min-w-0 flex-1">
                <p className="font-large text-xxl text-gray-900">
                    <Image
                        src="https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png"
                        alt="Brimstone"
                        borderRadius="full"
                        boxSize="50px"
                        objectFit="cover"
                        mb={"5px"}
                    />
                </p>
                <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
                        <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
                    </div>
                    <div className="h-2 rounded bg-zinc-500"></div>
                </div>
            </div>
        </div>
    </div>
);

const convertNewLines = (text) =>
    text.split('\n').map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

export function ChatLine({ role = 'assistant', content }) {
    if (!content) {
        return null;
    }
    const formattedMessage = convertNewLines(content);

    return (
        <div
            className={
                role !== 'assistant'
                    ? 'float-right clear-both'
                    : 'float-left clear-both'
            }
        >

            <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
                <div className="flex space-x-3">
                    <div className="flex-1 gap-4">
                        <p className="font-large text-xxl text-gray-900">
                            {role === 'assistant' ?
                                <Image
                                    src="https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png"
                                    alt="Brimstone"
                                    borderRadius="full"
                                    boxSize="50px"
                                    objectFit="cover"
                                    mb={"5px"}
                                /> :
                                <Image
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                                    alt="Default Avatar"
                                    borderRadius="full"
                                    boxSize="50px"
                                    objectFit="cover"
                                    mb="5px"
                                />

                            }


                        </p>
                        <p
                            className={clsx(
                                'text ',
                                role === 'assistant' ? 'font-semibold font- ' : 'text-gray-700'
                            )}
                        >
                            <BalancerWrapper>{formattedMessage}</BalancerWrapper>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

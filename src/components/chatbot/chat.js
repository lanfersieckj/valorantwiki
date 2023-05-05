import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { ChatLine, LoadingChatLine } from './chatLine';
import { useCookies } from 'react-cookie';

const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3';

const initialMessages = [
    {
        role: 'assistant',
        content: `Hey there! I'm here to help you with any questions you have about the game. Just ask away, soldier!`,
    },
];

const InputMessage = ({ input, setInput, sendMessage }) => (
    <div className="mt-6 flex clear-both">
        <input
            type="text"
            aria-label="chat input"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
            value={input}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    sendMessage(input);
                    setInput('');
                }
            }}
            onChange={(e) => {
                setInput(e.target.value);
            }}
        />
        <Button
            type="submit"
            className="ml-4 flex-none"
            onClick={() => {
                sendMessage(input);
                setInput('');
            }}
        >
            Say
        </Button>
    </div>
);

export default function Chat() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [cookie, setCookie] = useCookies([COOKIE_NAME]);

    useEffect(() => {
        if (!cookie[COOKIE_NAME]) {
            const randomId = Math.random().toString(36).substring(7);
            setCookie(COOKIE_NAME, randomId);
        }
    }, [cookie, setCookie]);

    const sendMessage = async (message) => {
        setLoading(true);
        const newMessages = [
            ...messages,
            { role: 'user', content: message },
        ];
        setMessages(newMessages);
        const last10messages = newMessages.slice(-10);

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: last10messages,
                user: cookie[COOKIE_NAME],
            }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        let lastMessage = '';

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);

            lastMessage = lastMessage + chunkValue;

            setMessages([
                ...newMessages,
                { role: 'assistant', content: lastMessage },
            ]);

            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border-zinc-100  lg:border lg:p-6">
            {messages.map(({ content, role }, index) => (
                <ChatLine key={index} role={role} content={content} />
            ))}

            {loading && <LoadingChatLine />}

            {messages.length < 2 && (
                <span className="mx-auto flex flex-grow text-gray-600 clear-both">
                    Type a message to start the conversation
                </span>
            )}
            <InputMessage
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
            />
        </div>
    );
}  